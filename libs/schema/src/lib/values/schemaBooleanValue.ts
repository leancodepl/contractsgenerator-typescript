import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { leancode } from "../protocol";
import { SchemaValue } from "./schemaValue";

export class SchemaBooleanValue implements SchemaValue<boolean> {
    value;

    constructor({ boolValue }: { boolValue: leancode.contracts.ValueRef.IBoolean }) {
        this.value = ensureNotEmpty(boolValue.value);
    }
}
