import { generate } from "@leancodepl/contractsgenerator-typescript";
import { resolve } from "path";
import "@leancodepl/contractsgenerator-typescript-plugin-contracts";

describe("kontomierz", () => {
    it("should work", async () => {
        const result = await generate({
            generates: {
                "abc.ts": { plugins: ["contracts"] },
            },
            config: {
                input: {
                    raw: resolve(__dirname, "../samples/kontomierz.bin"),
                },
            },
        });

        expect(result).toMatchSnapshot();
    });
});
