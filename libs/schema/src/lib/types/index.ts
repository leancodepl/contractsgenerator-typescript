import { leancode } from "../protocol"
import { SchemaGenericType } from "./schemaGenericType"
import { SchemaInternalType } from "./schemaInternalType"
import { SchemaKnownType } from "./schemaKnownType"
import { SchemaType } from "./schemaType"

export function createType({ type }: { type: leancode.contracts.ITypeRef }): SchemaType {
  const isNullable = !!type.nullable

  if (type.generic) {
    return new SchemaGenericType({ generic: type.generic, isNullable })
  }

  if (type.internal) {
    return new SchemaInternalType({ internal: type.internal, isNullable })
  }

  if (type.known) {
    return new SchemaKnownType({ known: type.known, isNullable })
  }

  throw new Error("Unknown type ref type")
}
