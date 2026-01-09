import ts from "typescript"
import { SchemaEnum } from "@leancodepl/contractsgenerator-typescript-schema"
import { zodIdentifier } from "../utils/consts"
import { getSchemaName } from "../utils/getSchemaName"
import { ZodContext } from "../zodContext"

export function generateEnumSchema(schemaEnum: SchemaEnum, context: ZodContext): ts.Statement[] {
  const name = schemaEnum.getName(context.nameTransform)
  if (name === undefined) return []

  const schemaName = getSchemaName(name)

  const valuesObject = createValuesObject(schemaEnum)
  const enumCall = createEnumSchema(valuesObject)
  const zodEnumCall = applyMeta(enumCall, valuesObject)

  return [
    ts.factory.createVariableStatement(
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      ts.factory.createVariableDeclarationList(
        [ts.factory.createVariableDeclaration(schemaName, undefined, undefined, zodEnumCall)],
        ts.NodeFlags.Const,
      ),
    ),
  ]
}

function createValuesObject(schemaEnum: SchemaEnum): ts.ObjectLiteralExpression {
  const valuesObjectProperties = schemaEnum.members.map(member => {
    const numericValue = member.value.value
    return ts.factory.createPropertyAssignment(
      ts.factory.createStringLiteral(member.name),
      ts.factory.createNumericLiteral(numericValue),
    )
  })

  return ts.factory.createObjectLiteralExpression(valuesObjectProperties, true)
}

function createEnumSchema(valuesObject: ts.ObjectLiteralExpression): ts.CallExpression {
  return ts.factory.createCallExpression(ts.factory.createPropertyAccessExpression(zodIdentifier, "enum"), undefined, [
    valuesObject,
  ])
}

function applyMeta(schema: ts.Expression, valuesObject: ts.ObjectLiteralExpression): ts.Expression {
  return ts.factory.createCallExpression(ts.factory.createPropertyAccessExpression(schema, "meta"), undefined, [
    ts.factory.createObjectLiteralExpression(
      [ts.factory.createPropertyAssignment(ts.factory.createStringLiteral("meta:enum"), valuesObject)],
      true,
    ),
  ])
}
