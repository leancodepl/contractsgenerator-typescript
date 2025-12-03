import ts from "typescript"
import {
  isSchemaGenericType,
  isSchemaInternalType,
  isSchemaKnownType,
  leancode,
  SchemaProperty,
  SchemaType,
} from "@leancodepl/contractsgenerator-typescript-schema"
import { fieldValidationReturnSchema } from "../configuration"
import { zodIdentifier } from "../utils/consts"
import {
  getPropertyTypeCategory,
  knownTypeToCategory,
  type PropertyTypeCategory,
} from "../utils/getPropertyTypeCategory"
import { getSchemaName } from "../utils/getSchemaName"
import { parseZodCode } from "../utils/parseZodCode"
import { ZodContext } from "../zodContext"
import type { FieldValidationContext } from "../configuration"

export function generatePropertySchema(
  property: SchemaProperty,
  context: ZodContext,
  interfaceFullName: string,
): ts.PropertyAssignment {
  const defaultSchema = generateZodSchemaForType(property.type, context)

  let zodSchema = defaultSchema
  if (context.configuration.fieldValidation) {
    const fieldPath = `${interfaceFullName}.${property.name}`
    const defaultSchemaCode = context.printNode(defaultSchema)
    const propertyTypeCategory = getPropertyTypeCategory(property.type, context)

    const validationContext: FieldValidationContext = {
      name: property.name,
      isNullable: property.type.isNullable,
      type: propertyTypeCategory,
    }

    const customSchemaCode = context.configuration.fieldValidation(fieldPath, validationContext)

    if (customSchemaCode !== undefined) {
      const validationResult = fieldValidationReturnSchema.safeParse(customSchemaCode)
      if (!validationResult.success) {
        throw new Error(
          `Invalid return type from fieldValidation for ${fieldPath}: expected string or undefined. ${validationResult.error.message}`,
        )
      }
      const fullCode = `${defaultSchemaCode}${customSchemaCode}`
      zodSchema = parseZodCode(fullCode)
    }
  }

  return ts.factory.createPropertyAssignment(ts.factory.createIdentifier(property.name), zodSchema)
}

export function generateZodSchemaForType(type: SchemaType, context: ZodContext): ts.Expression {
  let baseSchema: ts.Expression

  if (isSchemaKnownType(type)) {
    baseSchema = generateKnownTypeSchema(type, context)
  } else if (isSchemaInternalType(type)) {
    baseSchema = generateInternalTypeSchema(type, context)
  } else if (isSchemaGenericType(type)) {
    baseSchema = generateGenericTypeSchema(type)
  } else {
    throw new Error(`Unknown type received: ${JSON.stringify(type)}`)
  }

  if (type.isNullable) {
    return ts.factory.createCallExpression(
      ts.factory.createPropertyAccessExpression(baseSchema, "nullable"),
      undefined,
      [],
    )
  }

  return baseSchema
}

function generateKnownTypeSchema(
  type: { type: number; typeArguments: SchemaType[] },
  context: ZodContext,
): ts.Expression {
  const KnownType = leancode.contracts.KnownType

  switch (type.type) {
    case KnownType.Array:
      if (type.typeArguments.length > 0) {
        const elementSchema = generateZodSchemaForType(type.typeArguments[0], context)

        return ts.factory.createCallExpression(
          ts.factory.createPropertyAccessExpression(zodIdentifier, "array"),
          undefined,
          [elementSchema],
        )
      }

      return ts.factory.createCallExpression(
        ts.factory.createPropertyAccessExpression(zodIdentifier, "array"),
        undefined,
        [createZodCall("any")],
      )
    case KnownType.Map:
      if (type.typeArguments.length === 2) {
        const keySchema = generateZodSchemaForType(type.typeArguments[0], context)
        const valueSchema = generateZodSchemaForType(type.typeArguments[1], context)

        return ts.factory.createCallExpression(
          ts.factory.createPropertyAccessExpression(zodIdentifier, "record"),
          undefined,
          [keySchema, valueSchema],
        )
      }

      return ts.factory.createCallExpression(
        ts.factory.createPropertyAccessExpression(zodIdentifier, "record"),
        undefined,
        [createZodCall("string"), createZodCall("any")],
      )
    case KnownType.Object:
    case KnownType.Binary:
      return createZodCall("any")
    default:
      return generateZodSchemaFromCategory(knownTypeToCategory[type.type] ?? "unknown")
  }
}

function generateZodSchemaFromCategory(category: PropertyTypeCategory): ts.Expression {
  switch (category) {
    case "string":
    case "number":
    case "boolean":
      return createZodCall(category)
    case "array":
    case "object":
    case "enum":
    case "unknown":
    default:
      return createZodCall("any")
  }
}

function generateInternalTypeSchema(
  type: { id: string; typeArguments: SchemaType[] },
  context: ZodContext,
): ts.Expression {
  const transformedName = context.nameTransform(type.id)

  if (transformedName === undefined) {
    throw new Error(`Cannot generate schema for excluded type: ${type.id}`)
  }

  const schemaName = getSchemaName(transformedName)
  const namespaceParts = transformedName.split(".").slice(0, -1)

  let expression: ts.Expression
  if (namespaceParts.length === 0) {
    expression = ts.factory.createIdentifier(schemaName)
  } else {
    expression = ts.factory.createIdentifier(namespaceParts[0])

    for (let i = 1; i < namespaceParts.length; i++) {
      expression = ts.factory.createPropertyAccessExpression(expression, namespaceParts[i])
    }

    expression = ts.factory.createPropertyAccessExpression(expression, schemaName)
  }

  // If the type has generic arguments, call the schema function with them
  if (type.typeArguments.length > 0) {
    const args = type.typeArguments.map(arg => generateZodSchemaForType(arg, context))
    return ts.factory.createCallExpression(expression, undefined, args)
  }

  return expression
}

function generateGenericTypeSchema(type: { name: string }): ts.Expression {
  return ts.factory.createIdentifier(getSchemaName(type.name))
}

function createZodCall(method: string): ts.CallExpression {
  return ts.factory.createCallExpression(
    ts.factory.createPropertyAccessExpression(zodIdentifier, method),
    undefined,
    [],
  )
}
