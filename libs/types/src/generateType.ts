import ts from "typescript"
import {
    SchemaType,
    isSchemaGenericType,
    isSchemaInternalType,
    isSchemaKnownType,
} from "@leancodepl/contractsgenerator-typescript-schema"
import { GenerateContext } from "./generateContext"
import { generateGenericType } from "./generateGenericType"
import { generateInternalType } from "./generateInternalType"
import { generateKnownType } from "./generateKnownType"

export function generateType(type: SchemaType, context: GenerateContext): ts.TypeNode {
    if (isSchemaGenericType(type)) return generateGenericType(type, context)
    if (isSchemaInternalType(type)) return generateInternalType(type, context)
    if (isSchemaKnownType(type)) return generateKnownType(type, context)

    throw new Error(`Unknown type received: ${JSON.stringify(type)}`)
}
