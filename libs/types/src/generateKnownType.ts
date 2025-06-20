import { SchemaKnownType } from "@leancodepl/contractsgenerator-typescript-schema"
import { GenerateContext } from "./generateContext"

export function generateKnownType(knownType: SchemaKnownType, context: GenerateContext) {
    const typeGenerator = context.typesMap[knownType.type]

    const outputType = typeGenerator?.({ typeArguments: knownType.typeArguments, context })

    if (!outputType) {
        console.error(knownType, context.typesMap)

        throw new Error("Type not supported")
    }

    return outputType
}
