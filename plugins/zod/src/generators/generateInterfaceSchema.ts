import ts from "typescript"
import {
  isSchemaInterface,
  isSchemaInternalType,
  isSchemaKnownType,
  SchemaInterface,
} from "@leancodepl/contractsgenerator-typescript-schema"
import { zodIdentifier } from "../utils/consts"
import { formatComment } from "../utils/formatComment"
import { getSchemaName } from "../utils/getSchemaName"
import { ZodContext } from "../zodContext"
import { generatePropertySchema, generateZodSchemaForType } from "./generatePropertySchema"

export function generateInterfaceSchema(schemaInterface: SchemaInterface, context: ZodContext): ts.Statement[] {
  if (schemaInterface.getIsAttribute(context.schemaEntities)) return []

  const name = schemaInterface.getName(context.nameTransform)
  if (name === undefined) return []

  const fullName = schemaInterface.getFullName(context.nameTransform)
  if (fullName === undefined) return []

  const schemaName = getSchemaName(name)

  const properties = schemaInterface.properties.map(property => generatePropertySchema(property, context, fullName))

  let zodObjectCall: ts.Expression = ts.factory.createCallExpression(
    ts.factory.createPropertyAccessExpression(zodIdentifier, "object"),
    undefined,
    [ts.factory.createObjectLiteralExpression(properties, true)],
  )

  zodObjectCall = applyExtends(zodObjectCall, schemaInterface, context)
  zodObjectCall = applyComment(zodObjectCall, schemaInterface)

  return createSchemaStatement(zodObjectCall, schemaInterface, schemaName)
}

function applyExtends(
  zodObjectCall: ts.Expression,
  schemaInterface: SchemaInterface,
  context: ZodContext,
): ts.Expression {
  if (schemaInterface.extendTypes.length === 0) {
    return zodObjectCall
  }

  let result = zodObjectCall

  for (const extendType of schemaInterface.extendTypes) {
    if (isSchemaKnownType(extendType)) {
      continue
    }

    if (!isSchemaInternalType(extendType)) {
      continue
    }

    const extendedName = extendType.id
    const extendedEntity = context.schemaEntities.find(e => e.id === extendedName)

    if (extendedEntity && isSchemaInterface(extendedEntity) && extendedEntity.getIsAttribute(context.schemaEntities)) {
      continue
    }

    const transformedExtendedName = context.nameTransform(extendedName)

    if (transformedExtendedName === undefined) {
      continue
    }

    const extendedParts = transformedExtendedName.split(".")
    const extendedSchemaName = getSchemaName(transformedExtendedName)
    const extendedNamespaceParts = extendedParts.slice(0, -1)

    let extendedSchemaRef: ts.Expression
    if (extendedNamespaceParts.length === 0) {
      extendedSchemaRef = ts.factory.createIdentifier(extendedSchemaName)
    } else {
      extendedSchemaRef = ts.factory.createIdentifier(extendedNamespaceParts[0])
      for (let i = 1; i < extendedNamespaceParts.length; i++) {
        extendedSchemaRef = ts.factory.createPropertyAccessExpression(extendedSchemaRef, extendedNamespaceParts[i])
      }
      extendedSchemaRef = ts.factory.createPropertyAccessExpression(extendedSchemaRef, extendedSchemaName)
    }

    if (extendType.typeArguments.length > 0) {
      const typeArgs = extendType.typeArguments.map(arg => generateZodSchemaForType(arg, context))
      extendedSchemaRef = ts.factory.createCallExpression(extendedSchemaRef, undefined, typeArgs)
    }

    const shapeAccess = ts.factory.createPropertyAccessExpression(extendedSchemaRef, "shape")

    result = ts.factory.createCallExpression(ts.factory.createPropertyAccessExpression(result, "extend"), undefined, [
      shapeAccess,
    ])
  }

  return result
}

function applyComment(zodObjectCall: ts.Expression, schemaInterface: SchemaInterface): ts.Expression {
  const comment = formatComment(schemaInterface.comment, schemaInterface.attributes)
  if (!comment) {
    return zodObjectCall
  }

  const metaObject = ts.factory.createObjectLiteralExpression(
    [
      ts.factory.createPropertyAssignment(
        ts.factory.createIdentifier("comment"),
        ts.factory.createStringLiteral(comment),
      ),
    ],
    true,
  )

  return ts.factory.createCallExpression(ts.factory.createPropertyAccessExpression(zodObjectCall, "meta"), undefined, [
    metaObject,
  ])
}

function createSchemaStatement(
  zodObjectCall: ts.Expression,
  schemaInterface: SchemaInterface,
  schemaName: string,
): ts.Statement[] {
  if (schemaInterface.genericParameters.length > 0) {
    const typeParameters = schemaInterface.genericParameters.map(p =>
      ts.factory.createParameterDeclaration(
        undefined,
        undefined,
        p + "Schema",
        undefined,
        ts.factory.createTypeReferenceNode("z.ZodTypeAny"),
        undefined,
      ),
    )

    const arrowFunction = ts.factory.createArrowFunction(
      undefined,
      undefined,
      typeParameters,
      undefined,
      ts.factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
      zodObjectCall,
    )

    return [
      ts.factory.createVariableStatement(
        [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        ts.factory.createVariableDeclarationList(
          [ts.factory.createVariableDeclaration(schemaName, undefined, undefined, arrowFunction)],
          ts.NodeFlags.Const,
        ),
      ),
    ]
  }

  return [
    ts.factory.createVariableStatement(
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      ts.factory.createVariableDeclarationList(
        [ts.factory.createVariableDeclaration(schemaName, undefined, undefined, zodObjectCall)],
        ts.NodeFlags.Const,
      ),
    ),
  ]
}
