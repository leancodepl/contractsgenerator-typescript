import protobuf from "protobufjs";
import { leancode } from "./protocol";
import { SchemaCommand } from "./schemaCommand";
import { SchemaEnum } from "./schemaEnum";
import { SchemaInterface } from "./schemaInterface";
import { SchemaOperation } from "./schemaOperation";
import { SchemaQuery } from "./schemaQuery";

export interface GeneratorSchema {
    interfaces: SchemaInterface[];
    enums: SchemaEnum[];
}

export function parseSchema(schemaBytes: Buffer): GeneratorSchema {
    const reader = protobuf.Reader.create(schemaBytes);

    const schema = leancode.contracts.Export.decode(reader);

    const interfaces: SchemaInterface[] = [];
    const enums: SchemaEnum[] = [];

    schema.statements.forEach(statement => {
        if (statement.query) return interfaces.push(new SchemaQuery({ statement }));
        if (statement.command) return interfaces.push(new SchemaCommand({ statement }));
        if (statement.operation) return interfaces.push(new SchemaOperation({ statement }));
        if (statement.dto) return interfaces.push(new SchemaInterface({ statement }));
        if (statement.enum) return enums.push(new SchemaEnum({ statement }));

        throw new Error("Unknown statement type");
    });

    return {
        interfaces,
        enums,
    };
}
