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
            nameTransform: (id: string) => {
              const parts = id.split(".")

              if (parts.includes("Class1") || parts.includes("Class2")) {
                return parts.at(-1)
              }

              return id
            },
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
            nameTransform: (id: string) => {
              const parts = id.split(".")

              if (parts.includes("Class1") || parts.includes("Class2")) {
                return `Test.Test2.${parts.at(-1)}`
              }

              return id
            },
          },
        }),
      ).rejects.toThrow("Error: namespace Test.Test2 has duplicate names: LocationDTO")
    })

    it("throws an error when enum names are duplicated", async () => {
      await expect(
        generate({
          generates: { "test.ts": { plugins: ["contracts"] } },
          config: {
            input: {
              raw: resolve(__dirname, "../samples/duplicate-types.pb"),
            },
            nameTransform: (id: string) => {
              const parts = id.split(".")

              if ((parts.includes("Enum1") || parts.includes("Enum2")) && parts.includes("EnumTest")) {
                return parts.at(-1)
              }

              return id
            },
          },
        }),
      ).rejects.toThrow("Error: duplicate names: EnumTest")
    })

    it("throws an error when enum name duplicates interface name", async () => {
      await expect(
        generate({
          generates: { "test.ts": { plugins: ["contracts"] } },
          config: {
            input: { raw: resolve(__dirname, "../samples/duplicate-types.pb") },

            nameTransform: (id: string) => {
              const parts = id.split(".")

              if (parts.includes("Enum1") || parts.includes("ClassConflictingWithEnum")) {
                return parts.at(-1)
              }

              return id
            },
          },
        }),
      ).rejects.toThrow("Error: duplicate names: EnumTest")
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
