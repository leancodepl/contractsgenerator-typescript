import ts from "typescript"
import { SchemaEnum } from "@leancodepl/contractsgenerator-typescript-schema"
import { ZodContext } from "../zodContext"
import { toCamelCase } from "../utils/toCamelCase"

export function generateEnumSchema(schemaEnum: SchemaEnum, context: ZodContext): ts.Statement[] {
  const name = schemaEnum.getName(context.nameTransform)
  if (name === undefined) return []

  const parts = name.split(".")
  const enumName = parts[parts.length - 1]
  const schemaName = toCamelCase(enumName) + "Schema"

  let enumReference: ts.Expression = ts.factory.createIdentifier(parts[0])
  for (let i = 1; i < parts.length; i++) {
    enumReference = ts.factory.createPropertyAccessExpression(enumReference, parts[i])
  }

  const zodNativeEnumCall = ts.factory.createCallExpression(
    ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier("z"), "nativeEnum"),
    undefined,
    [enumReference],
  )

  return [
    ts.factory.createVariableStatement(
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      ts.factory.createVariableDeclarationList(
        [ts.factory.createVariableDeclaration(schemaName, undefined, undefined, zodNativeEnumCall)],
        ts.NodeFlags.Const,
      ),
    ),
  ]
}


