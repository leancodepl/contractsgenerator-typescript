import NodeCache from "node-cache"
import hash from "object-hash"
import { GeneratorInput } from "@leancodepl/contractsgenerator-typescript-plugin"
import { GeneratorSchema } from "@leancodepl/contractsgenerator-typescript-schema"
import { getSchema } from "./getSchema"

export function getSchemaCached(cache: NodeCache) {
    return async (input: GeneratorInput) => {
        const inputHash = hash(input)

        const cachedSchema = cache.get<GeneratorSchema>(inputHash)

        if (cachedSchema) return cachedSchema

        const schema = await getSchema(input)

        cache.set(inputHash, schema)

        return schema
    }
}
