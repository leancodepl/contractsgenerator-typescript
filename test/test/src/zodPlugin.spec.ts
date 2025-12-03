import { resolve } from "path"
import { generate } from "@leancodepl/contractsgenerator-typescript"
import "@leancodepl/contractsgenerator-typescript-plugin-zod"

describe("zodPlugin", () => {
  it("generates schemas with defaults", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["zod"] } },
      config: { input: { raw: resolve(__dirname, "../samples/ExampleApp-1.0.pb") } },
    })

    expect(result).toMatchSnapshot()
  })

  it("generates schemas with custom types map", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["zod"] } },
      config: {
        input: { raw: resolve(__dirname, "../samples/ExampleApp-1.0.pb") },
        customTypes: { DateTimeOffset: "ApiDateTimeOffset", DateOnly: "ApiDate", TimeOnly: "ApiTime" },
      },
    })

    expect(result).toMatchSnapshot()
  })

  it("generates schemas with nameTransform", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["zod"] } },
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

  it("excludes CQRS types (Commands, Queries, Operations, Topics)", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["zod"] } },
      config: { input: { raw: resolve(__dirname, "../samples/ExampleApp-1.0.pb") } },
    })

    const output = result["test.ts"]
    
    expect(output).not.toContain("createCommandSchema")
    expect(output).not.toContain("allProjectsSchema")
    expect(output).not.toContain("addTimeslotSchema")
    expect(output).not.toContain("serviceProviderLogoUploadLinkSchema")
    expect(output).not.toContain("employeeAssignmentsTopicSchema")
  })

  it("includes only DTOs (plain interfaces and enums)", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["zod"] } },
      config: { input: { raw: resolve(__dirname, "../samples/ExampleApp-1.0.pb") } },
    })

    const output = result["test.ts"]
    
    expect(output).toContain("locationDTOSchema")
    expect(output).toContain("moneyDTOSchema")
    expect(output).toContain("serviceProviderTypeDTOSchema")
    expect(output).toContain("myReservationDTOSchema")
  })

  it("handles nested DTOs", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["zod"] } },
      config: { input: { raw: resolve(__dirname, "../samples/ExampleApp-1.0.pb") } },
    })

    const output = result["test.ts"]
    
    expect(output).toContain("myReservationDTOSchema")
    expect(output).toContain("Location:")
    expect(output).toContain("Price:")
  })

  it("handles enums with nativeEnum", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["zod"] } },
      config: { input: { raw: resolve(__dirname, "../samples/ExampleApp-1.0.pb") } },
    })

    const output = result["test.ts"]
    
    expect(output).toContain("z.nativeEnum")
    expect(output).toContain("serviceProviderTypeDTOSchema")
  })

  it("can exclude DTOs via nameTransform", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["zod"] } },
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

    const output = result["test.ts"]
    
    expect(output).not.toContain("removeInterfaceSchema")
  })

  it("handles interface extends with merge", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["zod"] } },
      config: { input: { raw: resolve(__dirname, "../samples/contracts-exclusion.pb") } },
    })

    const output = result["test.ts"]
    
    expect(output).toContain("extendedInterfaceSchema")
    expect(output).toContain("extendingInterfaceSchema")
    expect(output).toContain(".merge(")
  })
})


