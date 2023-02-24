import { leancode, SchemaType } from "@leancodepl/contractsgenerator-typescript-schema";
import ts from "typescript";

export interface GenerateContext {
    currentNamespace: string[];
    typesMap: TypesMap;
    nameTransform: (id: string) => string;
}

export type TypesMap = Record<
    leancode.contracts.KnownType,
    (config: { typeArguments: SchemaType[]; context: GenerateContext }) => ts.TypeNode | undefined
>;
