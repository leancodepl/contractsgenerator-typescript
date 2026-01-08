import hash from "object-hash"
import { GeneratorInput } from "@leancodepl/contractsgenerator-typescript-plugin"
import { GeneratorSchema } from "@leancodepl/contractsgenerator-typescript-schema"
import { getSchema } from "./getSchema"

export function getSchemaCached() {
  const promises = new Map<string, Promise<GeneratorSchema>>()

  return (input: GeneratorInput) => {
    const inputHash = hash(input)

    const existingPromise = promises.get(inputHash)

    if (existingPromise) return existingPromise

    const promise = getSchema(input).catch(error => {
      promises.delete(inputHash)
      throw error
    })

    promises.set(inputHash, promise)

    return promise
  }
}
