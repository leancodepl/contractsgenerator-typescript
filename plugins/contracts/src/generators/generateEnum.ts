import ts from "typescript"
import { SchemaEnum } from "@leancodepl/contractsgenerator-typescript-schema"
import { ContractsContext } from "../contractsContext"
import { withJsDoc } from "../utils/withJsDoc"
import { generateAttribute } from "./generateAttribute"
import { generateEnumMember } from "./generateEnumMember"

export function generateEnum(schemaEnum: SchemaEnum, context: ContractsContext) {
  const name = schemaEnum.getName(context.nameTransform)
  if (name === undefined) return []

  const enumStatement = ts.factory.createEnumDeclaration(
    /* modifiers */ [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    /* name */ name,
    /* members */ schemaEnum.members.map(enumMember => generateEnumMember(enumMember, context)),
  )

  const jsDoc =
    schemaEnum.comment || schemaEnum.attributes.length > 0
      ? ts.factory.createJSDocComment(
          schemaEnum.comment,
          schemaEnum.attributes.map(attribute => generateAttribute(attribute, context)),
        )
      : undefined

  return [withJsDoc(enumStatement, jsDoc, context)]
}
