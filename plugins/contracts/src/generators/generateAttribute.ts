import ts from "typescript"
import { SchemaAttribute } from "@leancodepl/contractsgenerator-typescript-schema"
import { ContractsContext } from "../contractsContext"

export function generateAttribute(attribute: SchemaAttribute, _context: ContractsContext) {
    if (attribute.name === "System.ObsoleteAttribute") {
        return ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier("deprecated"))
    }

    return ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier("attribute"), attribute.name)
}
