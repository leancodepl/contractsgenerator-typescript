import { SchemaStringValue } from "@leancodepl/contractsgenerator-typescript-schema";
import ts from "typescript";

export function generateStringValue(stringValue: SchemaStringValue) {
    return ts.factory.createStringLiteral(stringValue.value);
}
