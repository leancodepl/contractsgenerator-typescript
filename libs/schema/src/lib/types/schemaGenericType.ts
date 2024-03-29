import { ensureNotEmpty } from "@leancodepl/utils";
import { leancode } from "../protocol";
import { SchemaType } from "./schemaType";

export class SchemaGenericType implements SchemaType {
    kind = schemaGenericTypeKind;

    name;
    isNullable;

    constructor({ generic, isNullable }: { generic: leancode.contracts.TypeRef.IGeneric; isNullable?: boolean }) {
        this.name = ensureNotEmpty(generic.name);
        this.isNullable = isNullable ?? false;
    }
}

const schemaGenericTypeKind = "generic";

export function isSchemaGenericType(type: SchemaType): type is SchemaGenericType {
    return type.kind === schemaGenericTypeKind;
}
