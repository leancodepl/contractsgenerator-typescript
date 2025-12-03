import ts from "typescript"
import {
  isSchemaGenericType,
  isSchemaInternalType,
  isSchemaKnownType,
  leancode,
  SchemaProperty,
  SchemaType,
} from "@leancodepl/contractsgenerator-typescript-schema"
import { toCamelCase } from "../utils/toCamelCase"
import { ZodContext } from "../zodContext"

export function generatePropertySchema(property: SchemaProperty, context: ZodContext): ts.PropertyAssignment {
  const zodSchema = generateZodSchemaForType(property.type, context)

  return ts.factory.createPropertyAssignment(ts.factory.createIdentifier(property.name), zodSchema)
}

function generateZodSchemaForType(type: SchemaType, context: ZodContext): ts.Expression {
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
    case KnownType.String:
      return createZodCall("string")
    case KnownType.Boolean:
      return createZodCall("boolean")
    case KnownType.Int8:
    case KnownType.UInt8:
    case KnownType.Int16:
    case KnownType.UInt16:
    case KnownType.Int32:
    case KnownType.UInt32:
    case KnownType.Int64:
    case KnownType.UInt64:
    case KnownType.Float32:
    case KnownType.Float64:
      return createZodCall("number")
    case KnownType.Guid:
      return createZodCall("string")
    case KnownType.Uri:
      return createZodCall("string")
    case KnownType.DateOnly:
      return createZodCall("string")
    case KnownType.TimeOnly:
      return createZodCall("string")
    case KnownType.DateTimeOffset:
      return createZodCall("string")
    case KnownType.DateTime:
      return createZodCall("string")
    case KnownType.TimeSpan:
      return createZodCall("string")
    case KnownType.Object:
      return createZodCall("any")
    case KnownType.Binary:
      return createZodCall("any")
    case KnownType.Array:
      if (type.typeArguments.length > 0) {
        const elementSchema = generateZodSchemaForType(type.typeArguments[0], context)
        return ts.factory.createCallExpression(
          ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier("z"), "array"),
          undefined,
          [elementSchema],
        )
      }
      return ts.factory.createCallExpression(
        ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier("z"), "array"),
        undefined,
        [createZodCall("any")],
      )
    case KnownType.Map:
      if (type.typeArguments.length === 2) {
        const keySchema = generateZodSchemaForType(type.typeArguments[0], context)
        const valueSchema = generateZodSchemaForType(type.typeArguments[1], context)
        return ts.factory.createCallExpression(
          ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier("z"), "record"),
          undefined,
          [keySchema, valueSchema],
        )
      }
      return ts.factory.createCallExpression(
        ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier("z"), "record"),
        undefined,
        [createZodCall("string"), createZodCall("any")],
      )
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

  const parts = transformedName.split(".")
  const schemaName = toCamelCase(parts[parts.length - 1]) + "Schema"

  if (parts.length === 1) {
    return ts.factory.createIdentifier(schemaName)
  }

  let expression: ts.Expression = ts.factory.createIdentifier(parts[0])
  for (let i = 1; i < parts.length; i++) {
    expression = ts.factory.createPropertyAccessExpression(expression, parts[i])
  }

  return ts.factory.createPropertyAccessExpression(expression, schemaName)
}

function generateGenericTypeSchema(type: { name: string }): ts.Expression {
  return ts.factory.createIdentifier(toCamelCase(type.name) + "Schema")
}

function createZodCall(method: string): ts.CallExpression {
  return ts.factory.createCallExpression(
    ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier("z"), method),
    undefined,
    [],
  )
}
