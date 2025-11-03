import { resolve } from "path"
import { generate } from "@leancodepl/contractsgenerator-typescript"
import "@leancodepl/contractsgenerator-typescript-plugin-client"
import "@leancodepl/contractsgenerator-typescript-plugin-contracts"

describe("contractsExclusion", () => {
  it("can remove query", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["contracts", "client"] } },
      config: {
        input: { raw: resolve(__dirname, "../samples/contracts-exclusion.pb") },
        nameTransform: (id: string) => {
          const parts = id.split(".")

          if (parts.includes("RemoveQuery")) {
            return undefined
          }

          return id
        },
      },
    })

    expect(result).toMatchSnapshot()
  })

  it("can remove command", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["contracts", "client"] } },
      config: {
        input: { raw: resolve(__dirname, "../samples/contracts-exclusion.pb") },
        nameTransform: (id: string) => {
          const parts = id.split(".")

          if (parts.includes("RemoveCommand")) {
            return undefined
          }

          return id
        },
      },
    })

    expect(result).toMatchSnapshot()
  })

  it("can remove operation", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["contracts", "client"] } },
      config: {
        input: { raw: resolve(__dirname, "../samples/contracts-exclusion.pb") },
        nameTransform: (id: string) => {
          const parts = id.split(".")

          if (parts.includes("RemoveOperation")) {
            return undefined
          }

          return id
        },
      },
    })

    expect(result).toMatchSnapshot()
  })

  it("can remove topic", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["contracts", "client"] } },
      config: {
        input: { raw: resolve(__dirname, "../samples/contracts-exclusion.pb") },
        nameTransform: (id: string) => {
          const parts = id.split(".")

          if (parts.includes("RemoveTopic")) {
            return undefined
          }

          return id
        },
      },
    })

    expect(result).toMatchSnapshot()
  })

  it("can remove enum", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["contracts", "client"] } },
      config: {
        input: { raw: resolve(__dirname, "../samples/contracts-exclusion.pb") },
        nameTransform: (id: string) => {
          const parts = id.split(".")

          if (parts.includes("RemoveEnum")) {
            return undefined
          }

          return id
        },
      },
    })

    expect(result).toMatchSnapshot()
  })

  it("can remove interface", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["contracts", "client"] } },
      config: {
        input: { raw: resolve(__dirname, "../samples/contracts-exclusion.pb") },
        nameTransform: (id: string) => {
          const parts = id.split(".")

          if (parts.includes("RemoveInterface")) {
            return undefined
          }

          return id
        },
      },
    })

    expect(result).toMatchSnapshot()
  })

  it("can remove namespace", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["contracts", "client"] } },
      config: {
        input: { raw: resolve(__dirname, "../samples/contracts-exclusion.pb") },
        nameTransform: (id: string) => {
          const parts = id.split(".")

          if (parts.includes("RemoveNamespace")) {
            return undefined
          }

          return id
        },
      },
    })

    expect(result).toMatchSnapshot()
  })
})
