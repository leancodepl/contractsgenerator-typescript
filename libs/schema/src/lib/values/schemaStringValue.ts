import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { leancode } from "../protocol";
import { SchemaValue } from "./schemaValue";

export class SchemaStringValue implements SchemaValue<string> {
    value;

    constructor({ stringValue }: { stringValue: leancode.contracts.ValueRef.IString }) {
        this.value = ensureNotEmpty(stringValue.value);
    }
}
