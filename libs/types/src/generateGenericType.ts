import ts from "typescript"
import { SchemaGenericType } from "@leancodepl/contractsgenerator-typescript-schema"
import { GenerateContext } from "./generateContext"

export function generateGenericType(genericType: SchemaGenericType, _context: GenerateContext) {
    return ts.factory.createTypeReferenceNode(genericType.name)
}
