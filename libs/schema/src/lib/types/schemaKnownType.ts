import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { createType } from ".";
import { leancode } from "../protocol";
import { SchemaType } from "./schemaType";

export class SchemaKnownType implements SchemaType {
    kind = schemaKnownTypeKind;

    type;
    typeArguments;
    isNullable;

    get isAttribute() {
        return [
            leancode.contracts.KnownType.Attribute,
            leancode.contracts.KnownType.AuthorizeWhenAttribute,
            leancode.contracts.KnownType.AuthorizeWhenHasAnyOfAttribute,
        ].includes(this.type);
    }

    constructor({ known, isNullable }: { known: leancode.contracts.TypeRef.IKnown; isNullable?: boolean }) {
        this.type = ensureNotEmpty(known.type);
        this.typeArguments = known.arguments?.map(argument => createType({ type: argument })) ?? [];
        this.isNullable = isNullable ?? false;
    }
}

const schemaKnownTypeKind = "known";

export function isSchemaKnownType(type: SchemaType): type is SchemaKnownType {
    return type.kind === schemaKnownTypeKind;
}
