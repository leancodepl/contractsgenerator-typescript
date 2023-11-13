import { SchemaInternalType } from "@leancodepl/contractsgenerator-typescript-schema";
import ts from "typescript";
import { GenerateContext } from "./generateContext";
import { generateType } from "./generateType";
import { extractMinimalReferenceTypeName } from "./utils/extractMinimalReferenceTypeName";

export function generateInternalType(internalType: SchemaInternalType, context: GenerateContext) {
    const transformedName = context.nameTransform(internalType.id);
    const name = extractMinimalReferenceTypeName(transformedName, context.currentNamespace);

    return ts.factory.createTypeReferenceNode(
        name,
        internalType.typeArguments.map(type => generateType(type, context)),
    );
}
