import { SchemaInternalType } from "@leancodepl/contractsgenerator-typescript-schema";
import ts from "typescript";
import { GenerateContext } from "./generateContext";
import { generateType } from "./generateType";
import { extractMinimalReferenceTypeName } from "./utils/extractMinimalReferenceTypeName";

export function generateInternalType(internalType: SchemaInternalType, context: GenerateContext) {
    const name = extractMinimalReferenceTypeName(internalType.id, context.currentNamespace);

    return ts.factory.createTypeReferenceNode(
        name,
        internalType.typeArguments.map(type => generateType(type, context)),
    );
}
