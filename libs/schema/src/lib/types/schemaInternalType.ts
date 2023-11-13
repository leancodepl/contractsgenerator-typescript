import { ensureNotEmpty } from "@leancodepl/utils";
import { createType } from ".";
import { leancode } from "../protocol";
import { SchemaType } from "./schemaType";

export class SchemaInternalType implements SchemaType {
    kind = schemaInternalTypeKind;

    id;
    isNullable;
    typeArguments;

    constructor({ internal, isNullable }: { internal: leancode.contracts.TypeRef.IInternal; isNullable?: boolean }) {
        this.id = ensureNotEmpty(internal.name);
        this.typeArguments = internal.arguments?.map(argument => createType({ type: argument })) ?? [];
        this.isNullable = isNullable ?? false;
    }
}

const schemaInternalTypeKind = "internal";

export function isSchemaInternalType(type: SchemaType): type is SchemaInternalType {
    return type.kind === schemaInternalTypeKind;
}
