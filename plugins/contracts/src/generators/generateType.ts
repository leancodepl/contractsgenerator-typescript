import {
    isSchemaGenericType,
    isSchemaInternalType,
    isSchemaKnownType,
    SchemaType,
} from "@leancodepl/contractsgenerator-typescript-schema";
import ts from "typescript";
import { ContractsContext } from "../ContractsContext";
import { generateGenericType } from "./generateGenericType";
import { generateInternalType } from "./generateInternalType";
import { generateKnownType } from "./generateKnownType";

export function generateType(type: SchemaType, context: ContractsContext): ts.TypeNode {
    if (isSchemaGenericType(type)) return generateGenericType(type, context);
    if (isSchemaInternalType(type)) return generateInternalType(type, context);
    if (isSchemaKnownType(type)) return generateKnownType(type, context);

    throw new Error(`Unknown type received: ${JSON.stringify(type)}`);
}
