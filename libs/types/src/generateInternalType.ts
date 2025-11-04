import ts from "typescript"
import { SchemaInternalType } from "@leancodepl/contractsgenerator-typescript-schema"
import { GenerateContext } from "./generateContext"
import { generateTypeWithNullability } from "./generateTypeWithNullability"
import { extractMinimalReferenceTypeName } from "./utils/extractMinimalReferenceTypeName"

export function generateInternalType(internalType: SchemaInternalType, context: GenerateContext) {
  const transformedName = context.nameTransform(internalType.id)

  if (transformedName === undefined) return undefined

  const name = extractMinimalReferenceTypeName(transformedName, context.currentNamespace)

  return ts.factory.createTypeReferenceNode(
    name,
    internalType.typeArguments
      .map(type => generateTypeWithNullability(type, context))
      .filter(type => type !== undefined),
  )
}
