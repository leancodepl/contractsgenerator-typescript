import { leancode } from "../protocol"
import { SchemaBooleanValue } from "./schemaBooleanValue"
import { SchemaNullValue } from "./schemaNullValue"
import { SchemaNumberValue } from "./schemaNumberValue"
import { SchemaStringValue } from "./schemaStringValue"

export function createValue(value: leancode.contracts.IValueRef) {
  if (value.null) {
    return new SchemaNullValue()
  }

  if (value.bool) {
    return new SchemaBooleanValue({ boolValue: value.bool })
  }

  if (value.number) {
    return new SchemaNumberValue({ numberOrFloat: value.number })
  }

  if (value.floatingPoint) {
    return new SchemaNumberValue({ numberOrFloat: value.floatingPoint })
  }

  if (value.string) {
    return new SchemaStringValue({ stringValue: value.string })
  }

  throw new Error("Unknown value type")
}
