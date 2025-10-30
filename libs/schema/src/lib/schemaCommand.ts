import { assertNotEmpty } from "@leancodepl/utils"
import { leancode } from "./protocol"
import { SchemaErrorCodes } from "./schemaErrorCodes"
import { SchemaInterface } from "./schemaInterface"
import { createType } from "./types"

export class SchemaCommand extends SchemaInterface {
  kind = schemaCommandKind

  errorCodes
  commandType

  constructor({ statement }: { statement: leancode.contracts.IStatement }) {
    super({ statement })

    assertNotEmpty(statement.command)

    this.errorCodes = new SchemaErrorCodes({ errorCodes: statement.command.errorCodes ?? [] })
    this.commandType = createType({
      type: {
        internal: {
          name: this.id,
        },
      },
    })
  }
}

const schemaCommandKind = "command"

export function isSchemaCommand(schemaInterface: SchemaInterface): schemaInterface is SchemaCommand {
  return schemaInterface.kind === schemaCommandKind
}
