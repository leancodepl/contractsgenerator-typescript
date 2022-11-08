import { SchemaValue } from "./schemaValue";

export class SchemaNullValue implements SchemaValue<null> {
    value = null;
}
