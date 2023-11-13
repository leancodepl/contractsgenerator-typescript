import {
    isSchemaBooleanValue,
    isSchemaNullValue,
    isSchemaNumberValue,
    isSchemaStringValue,
    SchemaValue,
} from "@leancodepl/contractsgenerator-typescript-schema";
import ts from "typescript";
import { generateBooleanValue } from "./generateBooleanValue";
import { generateNullValue } from "./generateNullValue";
import { generateNumberValue } from "./generateNumberValue";
import { generateStringValue } from "./generateStringValue";

export function generateValue(value: SchemaValue): ts.Expression {
    if (isSchemaBooleanValue(value)) return generateBooleanValue(value);
    if (isSchemaNullValue(value)) return generateNullValue(value);
    if (isSchemaNumberValue(value)) return generateNumberValue(value);
    if (isSchemaStringValue(value)) return generateStringValue(value);

    throw new Error(`Unknown value received: ${JSON.stringify(value)}`);
}
