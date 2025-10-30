import { resolve } from "path"
import { generate } from "@leancodepl/contractsgenerator-typescript"
import "@leancodepl/contractsgenerator-typescript-plugin-client"
import "@leancodepl/contractsgenerator-typescript-plugin-contracts"

describe("errorHandling", () => {
  describe("duplicates", () => {
    it("throws an error when interface names are duplicated", async () => {
      await expect(
        generate({
          generates: { "test.ts": { plugins: ["contracts"] } },
          config: {
            input: {
              raw: resolve(__dirname, "../samples/duplicate-types.pb"),
            },
            nameTransform: (nameWithNamespace: string) => nameWithNamespace.split(".").at(-1),
          },
        }),
      ).rejects.toThrow("Error: duplicate names: LocationDTO")
    })

    it("throws an error when interface names are duplicated and nested in a namespace", async () => {
      await expect(
        generate({
          generates: { "test.ts": { plugins: ["contracts"] } },
          config: {
            input: {
              raw: resolve(__dirname, "../samples/duplicate-types.pb"),
            },
            nameTransform: (nameWithNamespace: string) => `Test.Test2.${nameWithNamespace.split(".").at(-1)}`,
          },
        }),
      ).rejects.toThrow("Error: namespace Test.Test2 has duplicate names: LocationDTO")
    })

    it("does not throw an error when names are not duplicated", async () => {
      await expect(
        generate({
          generates: { "test.ts": { plugins: ["contracts"] } },
          config: { input: { raw: resolve(__dirname, "../samples/duplicate-types.pb") } },
        }),
      ).resolves.not.toThrow()
    })
  })
})
