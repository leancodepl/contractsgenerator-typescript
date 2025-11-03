import ts from "typescript"
import { leancode, SchemaType, NameTransform } from "@leancodepl/contractsgenerator-typescript-schema"

export interface GenerateContext {
  currentNamespace: string[]
  typesMap: TypesMap
  nameTransform: NameTransform
}

export type TypesMap = Record<
  leancode.contracts.KnownType,
  ((config: { typeArguments: SchemaType[]; context: GenerateContext }) => ts.TypeNode | undefined) | undefined
>
