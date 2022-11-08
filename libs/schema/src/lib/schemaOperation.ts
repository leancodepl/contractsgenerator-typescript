import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { leancode } from "./protocol";
import { SchemaInterface } from "./schemaInterface";
import { createType } from "./types";

export class SchemaOperation extends SchemaInterface {
    returnType;
    operationType;

    constructor({
        statement,
        nameTransform,
    }: {
        statement: leancode.contracts.IStatement;
        nameTransform?: (name: string) => string;
    }) {
        super({ statement, nameTransform });

        this.returnType = createType({ type: ensureNotEmpty(statement.operation?.returnType) });
        this.operationType = createType({
            type: {
                internal: {
                    name: this.id,
                },
            },
        });
    }
}
