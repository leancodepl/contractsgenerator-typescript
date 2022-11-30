import { leancode } from "../src/protocol";
import { GeneratorQuery } from "../src/typesGeneration";
import { mkTypesDictionary, printStatement } from "./testUtils";

const typesDictionary = mkTypesDictionary([]);

const KnownType = leancode.contracts.KnownType;

describe("GeneratorQuery", () => {
    it("prints query", () => {
        const generator = new GeneratorQuery({
            statement: {
                name: "Query",
                query: {
                    typeDescriptor: {
                        extends: [
                            {
                                known: {
                                    arguments: [{ known: { arguments: [], type: KnownType.String }, nullable: true }],
                                    type: KnownType.Query,
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
            "export interface Query extends Query<string | null | undefined> {
                Arg: string;
            }
            "
        `);
    });
});
