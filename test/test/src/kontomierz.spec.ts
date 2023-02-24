import { generate } from "@leancodepl/contractsgenerator-typescript";
import { resolve } from "path";
import "@leancodepl/contractsgenerator-typescript-plugin-contracts";
import "@leancodepl/contractsgenerator-typescript-plugin-client";

describe("kontomierz", () => {
    it("generates contracts with defaults", async () => {
        const result = await generate({
            generates: {
                "test.ts": { plugins: ["contracts"] },
            },
            config: {
                input: {
                    raw: resolve(__dirname, "../samples/kontomierz.bin"),
                },
            },
        });

        expect(result).toMatchSnapshot();
    });

    it("generates contracts with custom types map", async () => {
        const result = await generate({
            generates: {
                "test.ts": { plugins: ["contracts"] },
            },
            config: {
                input: {
                    raw: resolve(__dirname, "../samples/kontomierz.bin"),
                },
                customTypes: {
                    DateTimeOffset: "ApiDateTimeOffset",
                    DateOnly: "ApiDate",
                    TimeOnly: "ApiTime",
                },
            },
        });

        expect(result).toMatchSnapshot();
    });

    it("generates contracts with name transforms", async () => {
        const result = await generate({
            generates: {
                "test.ts": { plugins: ["contracts"] },
            },
            config: {
                input: {
                    raw: resolve(__dirname, "../samples/kontomierz.bin"),
                },
                nameTransform: (id: string) => id.split(".").at(-1),
            },
        });

        expect(result).toMatchSnapshot();
    });

    it("generates client with defaults", async () => {
        const result = await generate({
            generates: {
                "test.ts": { plugins: ["client"] },
            },
            config: {
                input: {
                    raw: resolve(__dirname, "../samples/kontomierz.bin"),
                },
            },
        });

        expect(result).toMatchSnapshot();
    });

    it("generates client with custom types map", async () => {
        const result = await generate({
            generates: {
                "test.ts": { plugins: ["client"] },
            },
            config: {
                input: {
                    raw: resolve(__dirname, "../samples/kontomierz.bin"),
                },
                customTypes: {
                    String: "CustomStringImpl",
                },
            },
        });

        expect(result).toMatchSnapshot();
    });

    it("generates client with name transforms", async () => {
        const result = await generate({
            generates: {
                "test.ts": { plugins: ["client"] },
            },
            config: {
                input: {
                    raw: resolve(__dirname, "../samples/kontomierz.bin"),
                },
                nameTransform: (id: string) => id.split(".").at(-1),
            },
        });

        expect(result).toMatchSnapshot();
    });
});
