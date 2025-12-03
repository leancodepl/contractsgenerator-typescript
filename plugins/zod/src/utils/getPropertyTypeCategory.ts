import {
  isSchemaEnum,
  isSchemaGenericType,
  isSchemaInternalType,
  isSchemaKnownType,
  leancode,
  SchemaEntity,
  SchemaType,
} from "@leancodepl/contractsgenerator-typescript-schema"
import { GenerateContext } from "@leancodepl/contractsgenerator-typescript-types"

export type PropertyTypeCategory = "array" | "boolean" | "enum" | "number" | "object" | "string" | "unknown"

export const knownTypeToCategory: Record<number, PropertyTypeCategory> = {
  [leancode.contracts.KnownType.String]: "string",
  [leancode.contracts.KnownType.Guid]: "string",
  [leancode.contracts.KnownType.Uri]: "string",
  [leancode.contracts.KnownType.DateOnly]: "string",
  [leancode.contracts.KnownType.TimeOnly]: "string",
  [leancode.contracts.KnownType.DateTimeOffset]: "string",
  [leancode.contracts.KnownType.DateTime]: "string",
  [leancode.contracts.KnownType.TimeSpan]: "string",
  [leancode.contracts.KnownType.Boolean]: "boolean",
  [leancode.contracts.KnownType.Int8]: "number",
  [leancode.contracts.KnownType.UInt8]: "number",
  [leancode.contracts.KnownType.Int16]: "number",
  [leancode.contracts.KnownType.UInt16]: "number",
  [leancode.contracts.KnownType.Int32]: "number",
  [leancode.contracts.KnownType.UInt32]: "number",
  [leancode.contracts.KnownType.Int64]: "number",
  [leancode.contracts.KnownType.UInt64]: "number",
  [leancode.contracts.KnownType.Float32]: "number",
  [leancode.contracts.KnownType.Float64]: "number",
  [leancode.contracts.KnownType.Array]: "array",
  [leancode.contracts.KnownType.Map]: "object",
  [leancode.contracts.KnownType.Object]: "object",
}

export function getPropertyTypeCategory(
  type: SchemaType,
  context: GenerateContext & { schemaEntities?: SchemaEntity[] },
): PropertyTypeCategory {
  if (isSchemaKnownType(type)) {
    return knownTypeToCategory[type.type] ?? "unknown"
  }

  if (isSchemaInternalType(type)) {
    const entity = context.schemaEntities?.find((e: SchemaEntity) => e.id === type.id)
    if (entity && isSchemaEnum(entity)) {
      return "enum"
    }
    return "object"
  }

  if (isSchemaGenericType(type)) {
    return "unknown"
  }

  return "unknown"
}
