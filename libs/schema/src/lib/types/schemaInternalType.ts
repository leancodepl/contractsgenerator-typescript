import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { createType } from ".";
import { leancode } from "../protocol";
import { SchemaType } from "./schemaType";

export class SchemaInternalType implements SchemaType {
    kind = schemaInternalTypeKind;

    id;
    isNullable;
    typeArguments;

    get isAttribute(): boolean {
        // TODO: implement
        throw new Error("Method not implemented");
    }

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
