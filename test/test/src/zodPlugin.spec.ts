import { resolve } from "path"
import ts from "typescript"
import vm from "vm"
import z from "zod"
import { generate } from "@leancodepl/contractsgenerator-typescript"
import type {
  FieldValidationContext,
  FieldValidationFunction,
} from "@leancodepl/contractsgenerator-typescript-plugin-zod"
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

    expect(result).toMatchSnapshot()
  })

  it("applies custom field validation when provided", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["zod"] } },
      config: {
        input: { raw: resolve(__dirname, "../samples/ExampleApp-1.0.pb") },
        customTypes: { DateTimeOffset: "ApiDateTimeOffset", DateOnly: "ApiDate", TimeOnly: "ApiTime" },
        nameTransform: (id: string) => {
          const parts = id.split(".")

          if (parts.includes("AppRating") && parts.at(-1) === "PlatformDTO") {
            return `AppRating${parts.at(-1)}`
          }

          return parts.at(-1)
        },
        fieldValidation: ((fieldPath: string, property: FieldValidationContext) => {
          if (property.name === "Name" && property.type === "string") {
            return ".min(1)"
          }

          if ((property.name === "Latitude" || property.name === "Longitude") && property.type === "number") {
            return ".positive().max(90)"
          }

          if (property.name === "ServiceProviderId" && property.type === "string") {
            return ".refine(val => val.length > 0)"
          }

          if (property.name === "Date" && property.type === "string") {
            return ".refine(val => (val ? val.length === 10 : false))"
          }

          if (property.name === "StartTime" && property.type === "string") {
            return ".refine(val => val.startsWith(`0`) || val.startsWith(`1`))"
          }

          if (property.name === "EndTime" && property.type === "string") {
            return ".refine(val => !isNaN(Number(val)))"
          }

          if (property.name === "Currency" && property.type === "string") {
            return ".refine(val => (val ? val.length === 3 : false))"
          }

          if (property.name === "Value" && property.type === "number") {
            return '.refine(val => val > 0, { message: "Must be positive" })'
          }

          if (property.name === "Description" && property.type === "string") {
            return ".refine(val => (val && val.length > 0 ? val.trim().length > 0 : false))"
          }

          if (property.name === "Thumbnail" && property.type === "string") {
            return ".min(1).max(500)"
          }

          if (property.name === "Address" && property.type === "string") {
            return ".refine(val => val !== undefined)"
          }

          if (property.name === "Ratings" && property.type === "number") {
            return ".refine(val => val >= 0 && val <= 5)"
          }

          if (property.name === "RequiredHeaders" && property.type === "record") {
            return '.refine(val => { const test = {test: { test: 5 }}; return typeof val === "object" && val !== null) }'
          }

          return undefined
        }) satisfies FieldValidationFunction,
      },
    })

    expect(result).toMatchSnapshot()
  })

  it("generates JSON schemas from zod schemas with defaults", async () => {
    const result = await generate({
      generates: { "test.ts": { plugins: ["zod"] } },
      config: {
        input: { raw: resolve(__dirname, "../samples/ExampleApp-1.0.pb") },
        customTypes: { DateTimeOffset: "ApiDateTimeOffset", DateOnly: "ApiDate", TimeOnly: "ApiTime" },
        nameTransform: (id: string) => {
          const parts = id.split(".")

          if (parts.includes("AppRating") && parts.at(-1) === "PlatformDTO") {
            return `AppRating${parts.at(-1)}`
          }

          return parts.at(-1)
        },
      },
    })

    const generatedCode = result["test.ts"]

    const schemas = evaluateZodSchemas(generatedCode)
    const jsonSchemas = schemasToJsonSchemas(schemas)

    expect(jsonSchemas).toMatchSnapshot()
  })
})

function evaluateZodSchemas(code: string): Record<string, z.ZodTypeAny> {
  const exports: Record<string, z.ZodTypeAny> = {}

  const codeWithoutImportsx = code.replace(/^import .+$/gm, "")
  const jsCode = ts.transpileModule(codeWithoutImportsx, {
    compilerOptions: { module: ts.ModuleKind.NodeNext },
  }).outputText

  vm.runInNewContext(jsCode, { z, exports })

  return exports
}

function schemasToJsonSchemas(schemas: Record<string, z.ZodTypeAny>): Record<string, unknown> {
  const result: Record<string, unknown> = {}

  for (const [name, schema] of Object.entries(schemas)) {
    try {
      if (typeof schema === "function") {
        const instantiated = (schema as (arg: z.ZodTypeAny) => z.ZodTypeAny)(z.any())
        if (instantiated) {
          result[name] = z.toJSONSchema(instantiated)
        }
      } else if (schema) {
        result[name] = z.toJSONSchema(schema)
      }
    } catch {
      // Skip schemas that can't be converted
    }
  }

  return result
}
