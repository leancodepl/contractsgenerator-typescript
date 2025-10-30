import ts from "typescript"
import { SchemaStringValue } from "@leancodepl/contractsgenerator-typescript-schema"

export function generateStringValue(stringValue: SchemaStringValue) {
  return ts.factory.createStringLiteral(stringValue.value)
}
