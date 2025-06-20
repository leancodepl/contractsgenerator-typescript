import ts from "typescript"
import { leancode, SchemaType } from "@leancodepl/contractsgenerator-typescript-schema"

export interface GenerateContext {
    currentNamespace: string[]
    typesMap: TypesMap
    nameTransform: (id: string) => string
}

export type TypesMap = Record<
    leancode.contracts.KnownType,
    ((config: { typeArguments: SchemaType[]; context: GenerateContext }) => ts.TypeNode | undefined) | undefined
>
