import { resolve } from "path"
import { generate } from "@leancodepl/contractsgenerator-typescript"
import "@leancodepl/contractsgenerator-typescript-plugin-admin"
import "@leancodepl/contractsgenerator-typescript-plugin-client"
import "@leancodepl/contractsgenerator-typescript-plugin-contracts"

describe("exampleApp", () => {
    it("generates contracts with defaults", async () => {
        const result = await generate({
            generates: {
                "test.ts": { plugins: ["contracts"] },
            },
            config: {
                input: {
                    raw: resolve(__dirname, "../samples/ExampleApp.pb"),
                },
            },
        })

        expect(result).toMatchSnapshot()
    })

    it("generates contracts with custom types map", async () => {
        const result = await generate({
            generates: {
                "test.ts": { plugins: ["contracts"] },
            },
            config: {
                input: {
                    raw: resolve(__dirname, "../samples/ExampleApp.pb"),
                },
                customTypes: {
                    DateTimeOffset: "ApiDateTimeOffset",
                    DateOnly: "ApiDate",
                    TimeOnly: "ApiTime",
                },
            },
        })

        expect(result).toMatchSnapshot()
    })

    it("generates contracts with name transforms", async () => {
        const result = await generate({
            generates: {
                "test.ts": { plugins: ["contracts"] },
            },
            config: {
                input: {
                    raw: resolve(__dirname, "../samples/ExampleApp.pb"),
                },
                nameTransform: (id: string) => id.split(".").at(-1),
            },
        })

        expect(result).toMatchSnapshot()
    })

    it("generates client with defaults", async () => {
        const result = await generate({
            generates: {
                "test.ts": { plugins: ["client"] },
            },
            config: {
                input: {
                    raw: resolve(__dirname, "../samples/ExampleApp.pb"),
                },
            },
        })

        expect(result).toMatchSnapshot()
    })

    it("generates client with custom types map", async () => {
        const result = await generate({
            generates: {
                "test.ts": { plugins: ["client"] },
            },
            config: {
                input: {
                    raw: resolve(__dirname, "../samples/ExampleApp.pb"),
                },
                customTypes: {
                    String: "CustomStringImpl",
                },
            },
        })

        expect(result).toMatchSnapshot()
    })

    it("generates client with name transforms", async () => {
        const result = await generate({
            generates: {
                "test.ts": { plugins: ["client"] },
            },
            config: {
                input: {
                    raw: resolve(__dirname, "../samples/ExampleApp.pb"),
                },
                nameTransform: (id: string) => id.split(".").at(-1),
            },
        })

        expect(result).toMatchSnapshot()
    })

    it("generates admin", async () => {
        const result = await generate({
            generates: {
                "test.ts": { plugins: ["admin"] },
            },
            config: {
                input: {
                    raw: resolve(__dirname, "../samples/ExampleApp.pb"),
                },
            },
        })

        expect(result).toMatchSnapshot()
    })
})
