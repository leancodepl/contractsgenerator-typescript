import { ensureNotEmpty } from "@leancodepl/utils";
import { leancode } from "./protocol";
import { SchemaInterface } from "./schemaInterface";
import { createType } from "./types";

export class SchemaOperation extends SchemaInterface {
  kind = schemaOperationKind;

  returnType;
  operationType;

  constructor({ statement }: { statement: leancode.contracts.IStatement }) {
    super({ statement });

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

const schemaOperationKind = "operation";

export function isSchemaOperation(schemaInterface: SchemaInterface): schemaInterface is SchemaOperation {
  return schemaInterface.kind === schemaOperationKind;
}
