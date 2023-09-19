import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { leancode } from "../protocol";
import { SchemaValue } from "./schemaValue";

export class SchemaBooleanValue implements SchemaValue<boolean> {
    kind = schemaBooleanValueKind;

    value;

    constructor({ boolValue }: { boolValue: leancode.contracts.ValueRef.IBoolean }) {
        this.value = ensureNotEmpty(boolValue.value);
    }
}

const schemaBooleanValueKind = "boolean";

export function isSchemaBooleanValue(value: SchemaValue): value is SchemaBooleanValue {
    return value.kind === schemaBooleanValueKind;
}
