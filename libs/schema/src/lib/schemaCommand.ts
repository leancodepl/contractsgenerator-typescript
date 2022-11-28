import { assertNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { leancode } from "./protocol";
import { SchemaErrorCodes } from "./schemaErrorCodes";
import { SchemaInterface } from "./schemaInterface";
import { createType } from "./types";

export class SchemaCommand extends SchemaInterface {
    kind = schemaCommandKind;

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

const schemaCommandKind = "command";

export function isSchemaCommand(schemaCommand: SchemaInterface): schemaCommand is SchemaCommand {
    return schemaCommand.kind === schemaCommandKind;
}
