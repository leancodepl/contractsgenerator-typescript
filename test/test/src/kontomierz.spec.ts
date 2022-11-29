import { generate } from "@leancodepl/contractsgenerator-typescript";
import { resolve } from "path";
import "@leancodepl/contractsgenerator-typescript-plugin-contracts";
import "@leancodepl/contractsgenerator-typescript-plugin-client";

describe("kontomierz", () => {
    it("should work", async () => {
        try {
            const result = await generate({
                generates: {
                    "abc.ts": { plugins: ["contracts", "client"] },
                },
                config: {
                    input: {
                        raw: resolve(__dirname, "../samples/kontomierz.bin"),
                    },
                },
            });

            expect(result).toMatchSnapshot();
        } catch (e) {
            console.error(e);
        }
    });
});
