import ts from "typescript"
import { leancode, SchemaType } from "@leancodepl/contractsgenerator-typescript-schema"

export type NameTransform = (id: string) => string | undefined

export interface GenerateContext {
  currentNamespace: string[]
  typesMap: TypesMap
  nameTransform: NameTransform
}

export type TypesMap = Record<
  leancode.contracts.KnownType,
  ((config: { typeArguments: SchemaType[]; context: GenerateContext }) => ts.TypeNode | undefined) | undefined
>
