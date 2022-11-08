import { assertNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { leancode } from "./protocol";
import { SchemaErrorCodes } from "./schemaErrorCodes";
import { SchemaInterface } from "./schemaInterface";
import { createType } from "./types";

export class SchemaCommand extends SchemaInterface {
    errorCodes;
    commandType;

    constructor({
        statement,
        nameTransform,
    }: {
        statement: leancode.contracts.IStatement;
        nameTransform?: (name: string) => string;
    }) {
        super({ statement, nameTransform });

        assertNotEmpty(statement.command);

        this.errorCodes = new SchemaErrorCodes({ errorCodes: statement.command.errorCodes ?? [] });
        this.commandType = createType({
            type: {
                internal: {
                    name: this.id,
                },
            },
        });
    }
}
