import ts from "typescript"
import { SchemaType } from "@leancodepl/contractsgenerator-typescript-schema"
import { GenerateContext } from "./generateContext"
import { generateType } from "./generateType"
import { withNullability } from "./utils/withNullability"

export function generateTypeWithNullability(
  type: SchemaType,
  context: GenerateContext,
  params?: { omitUndefined?: boolean },
): ts.TypeNode | undefined {
  const typeNode = generateType(type, context)
  if (typeNode === undefined) return undefined

  return withNullability(typeNode, { isNullable: type.isNullable, ...(params ?? {}) })
}
