import { sortBy } from "lodash"
import { Buffer } from "node:buffer"
import protobuf from "protobufjs"
import { leancode } from "./protocol"
import { SchemaCommand } from "./schemaCommand"
import { SchemaEnum } from "./schemaEnum"
import { SchemaExtensions } from "./schemaExtensions"
import { SchemaInterface } from "./schemaInterface"
import { SchemaOperation } from "./schemaOperation"
import { SchemaQuery } from "./schemaQuery"
import { SchemaTopic } from "./schemaTopic"

export type SchemaEntity = SchemaEnum | SchemaInterface
export type Protocol = { version: string; extensions: SchemaExtensions }

export interface GeneratorSchema {
    entities: SchemaEntity[]
    protocol: Protocol
}

export function parseSchema(schemaBytes: Buffer): GeneratorSchema {
    const reader = protobuf.Reader.create(schemaBytes)

    const schema = leancode.contracts.Export.decode(reader)

    let entities: SchemaEntity[] = []

    schema.statements.forEach(statement => {
        if (statement.query) return entities.push(new SchemaQuery({ statement }))
        if (statement.command) return entities.push(new SchemaCommand({ statement }))
        if (statement.operation) return entities.push(new SchemaOperation({ statement }))
        if (statement.dto) return entities.push(new SchemaInterface({ statement }))
        if (statement.enum) return entities.push(new SchemaEnum({ statement }))
        if (statement.topic) return entities.push(new SchemaTopic({ statement }))

        throw new Error("Unknown statement type")
    })

    entities = sortBy(entities, ({ id }) => id)

    return {
        entities,
        protocol: {
            version: schema.protocol?.version ?? "0.0",
            extensions: new SchemaExtensions(schema.protocol?.extensions ?? []),
        },
    }
}
