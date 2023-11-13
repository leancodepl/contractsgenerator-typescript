import { SchemaNumberValue } from "@leancodepl/contractsgenerator-typescript-schema";
import ts from "typescript";

export function generateNumberValue(numberValue: SchemaNumberValue) {
    return ts.factory.createNumericLiteral(numberValue.value);
}
