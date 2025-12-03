import ts from "typescript"
import { SchemaEnum } from "@leancodepl/contractsgenerator-typescript-schema"
import { zodIdentifier } from "../utils/consts"
import { formatComment } from "../utils/formatComment"
import { getSchemaName } from "../utils/getSchemaName"
import { ZodContext } from "../zodContext"

export function generateEnumSchema(schemaEnum: SchemaEnum, context: ZodContext): ts.Statement[] {
  const name = schemaEnum.getName(context.nameTransform)
  if (name === undefined) return []

  const schemaName = getSchemaName(name)

  const valuesObject = createValuesObject(schemaEnum)
  const enumArray = createEnumArray(schemaEnum)
  const validatedSchema = createValidatedSchema(schemaEnum)
  const zodEnumCall = applyMeta(validatedSchema, schemaEnum, valuesObject, enumArray)

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

function createEnumArray(schemaEnum: SchemaEnum): ts.ArrayLiteralExpression {
  const enumArrayElements = schemaEnum.members.map(member => ts.factory.createNumericLiteral(member.value.value))
  return ts.factory.createArrayLiteralExpression(enumArrayElements, true)
}

function createValidatedSchema(schemaEnum: SchemaEnum): ts.Expression {
  const numberSchema = ts.factory.createCallExpression(
    ts.factory.createPropertyAccessExpression(zodIdentifier, "number"),
    undefined,
    [],
  )

  const enumValues = schemaEnum.members.map(member => member.value.value)
  const enumValuesArray = ts.factory.createArrayLiteralExpression(
    enumValues.map(val => ts.factory.createNumericLiteral(val)),
    true,
  )

  const refineFunction = ts.factory.createArrowFunction(
    undefined,
    undefined,
    [ts.factory.createParameterDeclaration(undefined, undefined, "val", undefined, undefined, undefined)],
    undefined,
    ts.factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
    ts.factory.createCallExpression(ts.factory.createPropertyAccessExpression(enumValuesArray, "includes"), undefined, [
      ts.factory.createIdentifier("val"),
    ]),
  )

  return ts.factory.createCallExpression(ts.factory.createPropertyAccessExpression(numberSchema, "refine"), undefined, [
    refineFunction,
    ts.factory.createObjectLiteralExpression(
      [
        ts.factory.createPropertyAssignment(
          ts.factory.createIdentifier("message"),
          ts.factory.createStringLiteral("Invalid enum value"),
        ),
      ],
      true,
    ),
  ])
}

function applyMeta(
  validatedSchema: ts.Expression,
  schemaEnum: SchemaEnum,
  valuesObject: ts.ObjectLiteralExpression,
  enumArray: ts.ArrayLiteralExpression,
): ts.Expression {
  const metaProperties: ts.PropertyAssignment[] = [
    ts.factory.createPropertyAssignment(ts.factory.createIdentifier("values"), valuesObject),
    ts.factory.createPropertyAssignment(ts.factory.createIdentifier("enum"), enumArray),
  ]

  const comment = formatComment(schemaEnum.comment, schemaEnum.attributes)
  if (comment) {
    metaProperties.push(
      ts.factory.createPropertyAssignment(
        ts.factory.createIdentifier("comment"),
        ts.factory.createStringLiteral(comment),
      ),
    )
  }

  const metaObject = ts.factory.createObjectLiteralExpression(metaProperties, true)

  return ts.factory.createCallExpression(
    ts.factory.createPropertyAccessExpression(validatedSchema, "meta"),
    undefined,
    [metaObject],
  )
}
