import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import Long from "long";
import { leancode } from "../protocol";
import { SchemaValue } from "./schemaValue";

export class SchemaNumberValue implements SchemaValue<number> {
    value;

    constructor({
        numberOrFloat,
    }: {
        numberOrFloat:
            | leancode.contracts.ValueRef.INumber
            | leancode.contracts.ValueRef.IFloatingPointNumber
            | leancode.contracts.IEnumValue;
    }) {
        const value = ensureNotEmpty(numberOrFloat.value);

        this.value = Long.isLong(value) ? value.toNumber() : value;
    }
}
