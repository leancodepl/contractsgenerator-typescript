import ts from "typescript"
import { SchemaBooleanValue } from "@leancodepl/contractsgenerator-typescript-schema"

export function generateBooleanValue(booleanValue: SchemaBooleanValue) {
  return booleanValue.value
    ? ts.factory.createToken(ts.SyntaxKind.TrueKeyword)
    : ts.factory.createToken(ts.SyntaxKind.FalseKeyword)
}
