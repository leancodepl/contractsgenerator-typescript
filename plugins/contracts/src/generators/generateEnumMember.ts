import ts from "typescript"
import { SchemaEnumMember } from "@leancodepl/contractsgenerator-typescript-schema"
import { generateValue } from "@leancodepl/contractsgenerator-typescript-values"
import { ContractsContext } from "../contractsContext"
import { withJsDoc } from "../utils/withJsDoc"
import { generateAttribute } from "./generateAttribute"

export function generateEnumMember(enumMember: SchemaEnumMember, context: ContractsContext) {
    const constantStatement = ts.factory.createEnumMember(enumMember.name, generateValue(enumMember.value))

    const jsDoc = enumMember.comment
        ? ts.factory.createJSDocComment(
              enumMember.comment,

              enumMember.attributes.map(attribute => generateAttribute(attribute, context)),
          )
        : undefined

    return withJsDoc(constantStatement, jsDoc, context)
}
