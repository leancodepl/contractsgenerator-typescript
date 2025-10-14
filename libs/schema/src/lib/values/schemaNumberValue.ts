import Long from "long"
import { ensureNotEmpty } from "@leancodepl/utils"
import { leancode } from "../protocol"
import { SchemaValue } from "./schemaValue"

export class SchemaNumberValue implements SchemaValue<number> {
  kind = schemaNumberValueKind

  value

  constructor({
    numberOrFloat,
  }: {
    numberOrFloat:
      | leancode.contracts.IEnumValue
      | leancode.contracts.ValueRef.IFloatingPointNumber
      | leancode.contracts.ValueRef.INumber
  }) {
    const value = ensureNotEmpty(numberOrFloat.value)

    this.value = Long.isLong(value) ? value.toNumber() : value
  }
}

const schemaNumberValueKind = "number"

export function isSchemaNumberValue(value: SchemaValue): value is SchemaNumberValue {
  return value.kind === schemaNumberValueKind
}
