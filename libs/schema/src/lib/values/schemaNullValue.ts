import { SchemaValue } from "./schemaValue";

export class SchemaNullValue implements SchemaValue<null> {
    kind = schemaNullValueKind;

    value = null;
}

const schemaNullValueKind = "null";

export function isSchemaNullValue(value: SchemaValue): value is SchemaNullValue {
    return value.kind === schemaNullValueKind;
}
