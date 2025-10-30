import { resolve } from "path"
import { generate } from "@leancodepl/contractsgenerator-typescript"
import "@leancodepl/contractsgenerator-typescript-plugin-client"
import "@leancodepl/contractsgenerator-typescript-plugin-contracts"

describe("exampleApp", () => {
  it("generates contracts with defaults", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["contracts"] } },
      config: { input: { raw: resolve(__dirname, "../samples/ExampleApp-1.0.pb") } },
    })

    expect(result).toMatchSnapshot()
  })

  it("generates contracts with defaults with protocolless version", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["contracts"] } },
      config: { input: { raw: resolve(__dirname, "../samples/ExampleApp-0.0.pb") } },
    })

    expect(result).toMatchSnapshot()
  })

  it("generates contracts with custom types map", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["contracts"] } },
      config: {
        input: { raw: resolve(__dirname, "../samples/ExampleApp-1.0.pb") },
        customTypes: { DateTimeOffset: "ApiDateTimeOffset", DateOnly: "ApiDate", TimeOnly: "ApiTime" },
      },
    })

    expect(result).toMatchSnapshot()
  })

  it("generates contracts with name transforms", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["contracts"] } },
      config: {
        input: { raw: resolve(__dirname, "../samples/ExampleApp-1.0.pb") },
        nameTransform: (id: string) => {
          const parts = id.split(".")

          if (parts.includes("AppRating") && parts.at(-1) === "PlatformDTO") {
            return `AppRating${parts.at(-1)}`
          }

          return parts.at(-1)
        },
      },
    })

    expect(result).toMatchSnapshot()
  })

  it("generates client with defaults", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["client"] } },
      config: { input: { raw: resolve(__dirname, "../samples/ExampleApp-1.0.pb") } },
    })

    expect(result).toMatchSnapshot()
  })

  it("generates client with custom types map", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["client"] } },
      config: {
        input: { raw: resolve(__dirname, "../samples/ExampleApp-1.0.pb") },
        customTypes: { String: "CustomStringImpl" },
      },
    })

    expect(result).toMatchSnapshot()
  })

  it("generates client with name transforms", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["client"] } },
      config: {
        input: { raw: resolve(__dirname, "../samples/ExampleApp-1.0.pb") },
        nameTransform: (id: string) => id.split(".").at(-1),
      },
    })

    expect(result).toMatchSnapshot()
  })

  it("generates contracts with datetime extension", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["contracts"] } },
      config: {
        input: { raw: resolve(__dirname, "../samples/ExampleApp-1.0-datetime.pb") },
        customTypes: { DateTime: "ApiDateTime" },
      },
    })

    expect(result).toMatchSnapshot()
  })
})
