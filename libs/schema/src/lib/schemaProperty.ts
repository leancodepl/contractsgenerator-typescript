import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { leancode } from "./protocol";
import { SchemaAttribute } from "./schemaAttribute";
import { createType } from "./types";

export class SchemaProperty {
    isNullable;
    name;
    comment;
    attributes;
    type;

    constructor({ property }: { property: leancode.contracts.IPropertyRef }) {
        this.name = ensureNotEmpty(property.name);
        this.attributes = property.attributes?.map(attribute => new SchemaAttribute({ attribute })) ?? [];
        this.isNullable = !!property.type?.nullable;
        this.comment = property.comment ?? undefined;
        this.type = createType({ type: ensureNotEmpty(property.type) });
    }
}
