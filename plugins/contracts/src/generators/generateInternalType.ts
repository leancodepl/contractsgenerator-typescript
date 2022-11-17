import { SchemaInternalType } from "@leancodepl/contractsgenerator-typescript-schema";
import ts from "typescript";
import { ContractsContext } from "../ContractsContext";
import { extractMinimalReferenceTypeName } from "../utils/extractMinimalReferenceTypeName";
import { generateType } from "./generateType";

export function generateInternalType(internalType: SchemaInternalType, context: ContractsContext) {
    const name = extractMinimalReferenceTypeName(internalType.id, context.currentNamespace);

    return ts.factory.createTypeReferenceNode(
        name,
        internalType.typeArguments.map(type => generateType(type, context)),
    );
}
