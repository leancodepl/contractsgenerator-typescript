import { leancode } from "../src/protocol";
import GeneratorErrorCodes from "../src/typesGeneration/GeneratorErrorCodes";
import { printFromContext } from "./testUtils";

describe("GeneratorKnownType", () => {
    let autoCodeCounter = 100000000;

    function code(name: string, code?: number): leancode.contracts.IErrorCode {
        return {
            single: {
                name,
                code: code ?? autoCodeCounter++,
            },
        };
    }

    function group(name: string, ...codes: leancode.contracts.IErrorCode[]): leancode.contracts.IErrorCode {
        return {
            group: {
                name,
                innerCodes: codes,
            },
        };
    }

    function printErrorCodes(errorCodes: GeneratorErrorCodes) {
        const generatedErrorCodes = errorCodes.generateErrorCodes();

        if (!generatedErrorCodes) {
            return "";
        }

        return printFromContext(() => generatedErrorCodes);
    }

    it("generates flat singles", () => {
        const errorCodes = new GeneratorErrorCodes({
            errorCodes: [code("A", 1), code("B", 2)],
        });

        const output = printErrorCodes(errorCodes);

        expect(output).toMatchInlineSnapshot(`
            "export const ErrorCodes = {
                A: 1,
                B: 2
            } as const;
            export type ErrorCodes = typeof ErrorCodes;
            "
        `);
    });

    it("generates groups", () => {
        const errorCodes = new GeneratorErrorCodes({
            errorCodes: [code("A", 1), group("G1", code("B", 2))],
        });

        const output = printErrorCodes(errorCodes);

        expect(output).toMatchInlineSnapshot(`
            "export const ErrorCodes = {
                A: 1,
                B: 2
            } as const;
            export type ErrorCodes = typeof ErrorCodes;
            "
        `);
    });

    it("generates nested groups", () => {
        const errorCodes = new GeneratorErrorCodes({
            errorCodes: [code("A", 1), group("G1", group("G2", code("B", 2)))],
        });

        const output = printErrorCodes(errorCodes);

        expect(output).toMatchInlineSnapshot(`
            "export const ErrorCodes = {
                A: 1,
                B: 2
            } as const;
            export type ErrorCodes = typeof ErrorCodes;
            "
        `);
    });

    it("resolves simple conflicing names", () => {
        const errorCodes = new GeneratorErrorCodes({
            errorCodes: [code("A", 1), group("G1", code("A", 2))],
        });

        const output = printErrorCodes(errorCodes);

        expect(output).toMatchInlineSnapshot(`
            "export const ErrorCodes = {
                A: 1,
                G1_A: 2
            } as const;
            export type ErrorCodes = typeof ErrorCodes;
            "
        `);
    });

    it("resolves convoluted conflicing names", () => {
        const errorCodes = new GeneratorErrorCodes({
            errorCodes: [code("A", 1), code("G1_A", 3), group("G2", group("G1", code("A", 2)))],
        });

        const output = printErrorCodes(errorCodes);

        expect(output).toMatchInlineSnapshot(`
            "export const ErrorCodes = {
                A: 1,
                G2_G1_A: 2,
                G1_A: 3
            } as const;
            export type ErrorCodes = typeof ErrorCodes;
            "
        `);
    });

    it("throws when cant fix", () => {
        expect(() => {
            const errorCodes = new GeneratorErrorCodes({
                errorCodes: [code("A", 1), code("G1_A", 3), group("G1", code("A", 2))],
            });

            errorCodes.generateErrorCodes();
        }).toThrowErrorMatchingInlineSnapshot(`"Error codes not fixable"`);
    });
});
