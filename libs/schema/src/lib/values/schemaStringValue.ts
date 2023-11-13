import { ensureNotEmpty } from "@leancodepl/utils";
import { leancode } from "../protocol";
import { SchemaValue } from "./schemaValue";

export class SchemaStringValue implements SchemaValue<string> {
    kind = schemaStringValueKind;

    value;

    constructor({ stringValue }: { stringValue: leancode.contracts.ValueRef.IString }) {
        this.value = ensureNotEmpty(stringValue.value);
    }
}

const schemaStringValueKind = "string";

export function isSchemaStringValue(value: SchemaValue): value is SchemaStringValue {
    return value.kind === schemaStringValueKind;
}
