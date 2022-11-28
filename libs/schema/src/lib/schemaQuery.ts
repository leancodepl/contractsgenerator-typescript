import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { leancode } from "./protocol";
import { SchemaInterface } from "./schemaInterface";
import { createType } from "./types";

export class SchemaQuery extends SchemaInterface {
    kind = schemaQueryKind;

    returnType;
    queryType;

    constructor({
        statement,
        nameTransform,
    }: {
        statement: leancode.contracts.IStatement;
        nameTransform?: (name: string) => string;
    }) {
        super({ statement, nameTransform });

        this.returnType = createType({ type: ensureNotEmpty(statement.query?.returnType) });
        this.queryType = createType({
            type: {
                internal: {
                    name: this.id,
                },
            },
        });
    }
}

const schemaQueryKind = "query";

export function isSchemaQuery(schemaInterface: SchemaInterface): schemaInterface is SchemaQuery {
    return schemaInterface.kind === schemaQueryKind;
}
