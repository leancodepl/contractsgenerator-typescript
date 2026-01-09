import ts from "typescript"
import { isSchemaCommand, isSchemaTopic, SchemaInterface } from "@leancodepl/contractsgenerator-typescript-schema"
import { generateType } from "@leancodepl/contractsgenerator-typescript-types"
import { ContractsContext } from "../contractsContext"
import { withExtends } from "../utils/withExtends"
import { withJsDoc } from "../utils/withJsDoc"
import { generateAttribute } from "./generateAttribute"
import { generateConsts } from "./generateConsts"
import { generateErrorCodes } from "./generateErrorCodes"
import { generateProperty } from "./generateProperty"
import { generateTopicConsts } from "./generateTopicConsts"

export function generateInterface(schemaInterface: SchemaInterface, context: ContractsContext) {
  if (schemaInterface.getIsAttribute(context.schemaEntities)) return []

  const name = schemaInterface.getName(context.nameTransform)
  if (name === undefined) return []

  const fullName = schemaInterface.getFullName(context.nameTransform)
  if (fullName === undefined) return []

  const typeParameters = schemaInterface.genericParameters.map(p =>
    ts.factory.createTypeParameterDeclaration(/* modifiers */ undefined, p),
  )

  const extendTypes = schemaInterface.extendTypes.map(type => {
    const extendedType = generateType(type, context)

    if (extendedType === undefined) {
      throw new Error(`Cannot exclude interface ${type.getName()}, because interface ${fullName} extends it`)
    }

    return withExtends(extendedType)
  })

  const interfaceStatement = ts.factory.createInterfaceDeclaration(
    /* modifiers */ [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    /* name */ name,
    /* typeParameters */ typeParameters,
    /* heritageClauses */ extendTypes.length > 0
      ? [ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, extendTypes)]
      : undefined,
    /* members */ schemaInterface.properties.map(property => generateProperty(property, context, fullName)),
  )

  const jsDoc =
    schemaInterface.comment || schemaInterface.attributes.length > 0
      ? ts.factory.createJSDocComment(
          schemaInterface.comment,
          schemaInterface.attributes.map(attribute => generateAttribute(attribute, context)),
        )
      : undefined

  const constStatement = generateConsts(schemaInterface, context)
  const errorCodesStatement = isSchemaCommand(schemaInterface) ? generateErrorCodes(schemaInterface, context) : []
  const topicNotificationTypesStatement = isSchemaTopic(schemaInterface)
    ? generateTopicConsts(schemaInterface, context)
    : []

  return [
    withJsDoc(interfaceStatement, jsDoc, context),
    ...constStatement,
    ...errorCodesStatement,
    ...topicNotificationTypesStatement,
  ]
}
