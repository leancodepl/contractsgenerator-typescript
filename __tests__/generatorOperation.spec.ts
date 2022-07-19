import { leancode } from "../src/protocol";
import { GeneratorOperation } from "../src/typesGeneration";
import { mkTypesDictionary, printStatement } from "./testUtils";

const typesDictionary = mkTypesDictionary([]);

const KnownType = leancode.contracts.KnownType;

describe("GeneratorOperation", () => {
    it("prints operation", () => {
        const generator = new GeneratorOperation({
            statement: {
                name: "Operation",
                operation: {
                    typeDescriptor: {
                        extends: [
                            {
                                known: {
                                    arguments: [{ known: { arguments: [], type: KnownType.String } }],
                                    type: KnownType.Operation,
                                },
                            },
                        ],
                        genericParameters: [],
                        properties: [
                            { attributes: [], type: { known: { arguments: [], type: KnownType.String } }, name: "Arg" },
                        ],
                        constants: [],
                    },
                    returnType: {
                        known: { type: KnownType.Int32 },
                    },
                },
            },
            typesDictionary,
        });

        const output = printStatement(generator);

        expect(output).toMatchInlineSnapshot(`
            "export interface Operation extends Operation<string> {
                Arg: string;
            }
            "
        `);
    });
});
