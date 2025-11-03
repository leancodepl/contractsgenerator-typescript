import ts from "typescript"
import { SchemaProperty } from "@leancodepl/contractsgenerator-typescript-schema"
import { generateTypeWithNullability } from "@leancodepl/contractsgenerator-typescript-types"
import { ContractsContext } from "../contractsContext"
import { withJsDoc } from "../utils/withJsDoc"
import { generateAttribute } from "./generateAttribute"

export function generateProperty(
  property: SchemaProperty,
  context: ContractsContext,
  parentInterfaceFullName: string,
): ts.TypeElement {
  const type = generateTypeWithNullability(property.type, context, { omitUndefined: true })
  if (type === undefined) {
    throw new Error(
      `Cannot exclude ${property.type.getName()}, because because it is nested in interface ${parentInterfaceFullName}`,
    )
  }

  const propertySignature = ts.factory.createPropertySignature(
    /* modifiers */ [],
    /* name */ property.name,
    /* questionToken */ property.isNullable ? ts.factory.createToken(ts.SyntaxKind.QuestionToken) : undefined,
    /* type */ generateTypeWithNullability(property.type, context, { omitUndefined: true }),
  )

  const jsDocComment =
    property.comment || property.attributes.length > 0
      ? ts.factory.createJSDocComment(
          property.comment,
          property.attributes.map(attribute => generateAttribute(attribute, context)),
        )
      : undefined

  return withJsDoc(propertySignature, jsDocComment, context)
}
