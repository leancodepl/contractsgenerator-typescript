import ts from "typescript"
import {
    SchemaAttribute,
    SchemaAttributeArgument,
    SchemaAttributeNamedArgument,
} from "@leancodepl/contractsgenerator-typescript-schema"
import { ContractsContext } from "../contractsContext"

export function generateAttribute(attribute: SchemaAttribute, _context: ContractsContext) {
    const formattedArguments = [...attribute.positionalArguments, ...attribute.namedArguments]
        .map(formatArgument)
        .join(", ")

    if (attribute.name === "System.ObsoleteAttribute") {
        return ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier("deprecated"), formattedArguments)
    }

    let comment = attribute.name

    if (formattedArguments) {
        comment += `(${formattedArguments})`
    }

    return ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier("attribute"), comment)
}

function formatArgument(argument: SchemaAttributeArgument) {
    let formattedValue: string

    if (typeof argument.value.value === "string") {
        formattedValue = `'${argument.value.value}'`
    } else {
        formattedValue = argument.value.value?.toString() ?? "null"
    }

    if (argument instanceof SchemaAttributeNamedArgument) {
        return `${argument.name}: ${formattedValue}`
    }

    return formattedValue
}
