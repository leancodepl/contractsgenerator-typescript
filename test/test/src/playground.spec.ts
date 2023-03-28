import { generate, saveOutputs } from "@leancodepl/contractsgenerator-typescript";
import { join } from "path";
import "@leancodepl/contractsgenerator-typescript-plugin-contracts";
import "@leancodepl/contractsgenerator-typescript-plugin-client";
import "@leancodepl/contractsgenerator-typescript-plugin-admin";
import "@leancodepl/contractsgenerator-typescript-plugin-raw";

describe("playground", () => {
    it("generates contracts for playground", async () => {
        const outputUrl = join(__dirname, "../../playground/src/kontomierz/");

        await generate({
            generates: {
                [outputUrl + "apiComponents.ts"]: { plugins: ["admin"] },
                [outputUrl + "cqrs.ts"]: {
                    plugins: [
                        {
                            raw: {
                                prepend: `/*eslint-disable prettier/prettier, unused-imports/no-unused-vars-ts, @typescript-eslint/no-unused-vars, @typescript-eslint/ban-types, @typescript-eslint/no-empty-interface, @typescript-eslint/no-namespace, @nrwl/nx/enforce-module-boundaries, import/no-anonymous-default-export */                        
import type { CqrsImplStub as CQRS } from "."

export type Query<TResult> = {}
export type Command = {}
export type Operation<TResult> = {} 

`,
                            },
                        },
                        "contracts",
                        "client",
                    ],
                },
            },
            config: {
                input: {
                    project:
                        "/home/sebastian/dev/kontomierz/backend/src/Finances/Kontomierz.Finances.Contracts/Kontomierz.Finances.Contracts.csproj",
                },
                nameTransform: (nameWithNamespace: string) => {
                    const parts = nameWithNamespace.split(".");

                    const name = parts[parts.length - 1];
                    const nameParts = [];

                    if (name === "Permissions") {
                        nameParts.push(parts[1]);
                    }

                    nameParts.push(name);

                    return nameParts.join(".");
                },
            },
        }).then(saveOutputs);
    });
});
