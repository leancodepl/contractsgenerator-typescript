import { SchemaGenericType } from "@leancodepl/contractsgenerator-typescript-schema";
import ts from "typescript";
import { ContractsContext } from "../ContractsContext";

export function generateGenericType(genericType: SchemaGenericType, _context: ContractsContext) {
    return ts.factory.createTypeReferenceNode(genericType.name);
}
