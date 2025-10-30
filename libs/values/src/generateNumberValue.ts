import ts from "typescript"
import { SchemaNumberValue } from "@leancodepl/contractsgenerator-typescript-schema"

export function generateNumberValue(numberValue: SchemaNumberValue) {
  if (numberValue.value < 0) {
    return ts.factory.createPrefixUnaryExpression(
      ts.SyntaxKind.MinusToken,
      ts.factory.createNumericLiteral(-numberValue.value),
    )
  }

  return ts.factory.createNumericLiteral(numberValue.value)
}
