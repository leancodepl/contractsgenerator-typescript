import ts from "typescript"
import { SchemaNumberValue } from "@leancodepl/contractsgenerator-typescript-schema"

export function generateNumberValue(numberValue: SchemaNumberValue) {
    return ts.factory.createNumericLiteral(numberValue.value)
}
