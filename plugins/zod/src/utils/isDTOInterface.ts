import {
  isSchemaCommand,
  isSchemaOperation,
  isSchemaQuery,
  isSchemaTopic,
  SchemaInterface,
} from "@leancodepl/contractsgenerator-typescript-schema"

export function isDTOInterface(schemaInterface: SchemaInterface): boolean {
  return (
    !isSchemaCommand(schemaInterface) &&
    !isSchemaQuery(schemaInterface) &&
    !isSchemaOperation(schemaInterface) &&
    !isSchemaTopic(schemaInterface)
  )
}
