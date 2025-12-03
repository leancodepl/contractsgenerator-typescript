import ts from "typescript"
import { SchemaInterface } from "@leancodepl/contractsgenerator-typescript-schema"
import { ZodContext } from "../zodContext"
import { toCamelCase } from "../utils/toCamelCase"
import { isDTOInterface } from "../utils/isDTOInterface"
import { generatePropertySchema } from "./generatePropertySchema"

export function generateInterfaceSchema(schemaInterface: SchemaInterface, context: ZodContext): ts.Statement[] {
  if (!isDTOInterface(schemaInterface)) return []
  if (schemaInterface.getIsAttribute(context.schemaEntities)) return []

  const name = schemaInterface.getName(context.nameTransform)
  if (name === undefined) return []

  const fullName = schemaInterface.getFullName(context.nameTransform)
  if (fullName === undefined) return []

  const parts = name.split(".")
  const interfaceName = parts[parts.length - 1]
  const schemaName = toCamelCase(interfaceName) + "Schema"

  const properties = schemaInterface.properties.map(property => generatePropertySchema(property, context))

  let zodObjectCall: ts.Expression = ts.factory.createCallExpression(
    ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier("z"), "object"),
    undefined,
    [ts.factory.createObjectLiteralExpression(properties, true)],
  )

  if (schemaInterface.extendTypes.length > 0) {
    for (const extendType of schemaInterface.extendTypes) {
      const extendedName = extendType.getName()
      const transformedExtendedName = context.nameTransform(extendedName)
      
      if (transformedExtendedName === undefined) {
        throw new Error(`Cannot exclude interface ${extendedName}, because interface ${fullName} extends it`)
      }

      const extendedParts = transformedExtendedName.split(".")
      const extendedSchemaName = toCamelCase(extendedParts[extendedParts.length - 1]) + "Schema"

      let extendedSchemaRef: ts.Expression
      if (extendedParts.length === 1) {
        extendedSchemaRef = ts.factory.createIdentifier(extendedSchemaName)
      } else {
        extendedSchemaRef = ts.factory.createIdentifier(extendedParts[0])
        for (let i = 1; i < extendedParts.length; i++) {
          extendedSchemaRef = ts.factory.createPropertyAccessExpression(extendedSchemaRef, extendedParts[i])
        }
        extendedSchemaRef = ts.factory.createPropertyAccessExpression(extendedSchemaRef, extendedSchemaName)
      }

      zodObjectCall = ts.factory.createCallExpression(
        ts.factory.createPropertyAccessExpression(zodObjectCall, "merge"),
        undefined,
        [extendedSchemaRef],
      )
    }
  }

  if (schemaInterface.genericParameters.length > 0) {
    const typeParameters = schemaInterface.genericParameters.map(p =>
      ts.factory.createParameterDeclaration(
        undefined,
        undefined,
        toCamelCase(p) + "Schema",
        undefined,
        undefined,
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


