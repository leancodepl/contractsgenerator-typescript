import protobuf from "protobufjs";
import { leancode } from "./protocol";
import { SchemaCommand } from "./schemaCommand";
import { SchemaEnum } from "./schemaEnum";
import { SchemaInterface } from "./schemaInterface";
import { SchemaOperation } from "./schemaOperation";
import { SchemaQuery } from "./schemaQuery";

export interface GeneratorSchema {
    statements: (SchemaInterface | SchemaEnum)[];
}

export function parseSchema(schemaBytes: Buffer): GeneratorSchema {
    const reader = protobuf.Reader.create(schemaBytes);

    const schema = leancode.contracts.Export.decode(reader);

    const statements = schema.statements.map(statement => {
        if (statement.query) return new SchemaQuery({ statement });
        if (statement.command) return new SchemaCommand({ statement });
        if (statement.operation) return new SchemaOperation({ statement });
        if (statement.dto) return new SchemaInterface({ statement });
        if (statement.enum) return new SchemaEnum({ statement });

        throw new Error("Unknown statement type");
    });

    return {
        statements,
    };
}
