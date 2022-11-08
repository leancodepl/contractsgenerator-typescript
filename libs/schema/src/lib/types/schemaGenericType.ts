import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { leancode } from "../protocol";
import { SchemaType } from "./schemaType";

export class SchemaGenericType implements SchemaType {
    name;
    isNullable;
    isAttribute = false;

    constructor({ generic, isNullable }: { generic: leancode.contracts.TypeRef.IGeneric; isNullable?: boolean }) {
        this.name = ensureNotEmpty(generic.name);
        this.isNullable = isNullable ?? false;
    }
}
