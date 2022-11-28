import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { leancode } from "./protocol";
import { SchemaAttribute } from "./schemaAttribute";
import { SchemaNumberValue } from "./values/schemaNumberValue";

export class SchemaEnumMember {
    name;
    value;
    comment;
    attributes;

    constructor(member: leancode.contracts.IEnumValue) {
        this.name = ensureNotEmpty(member.name);
        this.value = new SchemaNumberValue({ numberOrFloat: member });
        this.comment = member.comment ?? undefined;
        this.attributes = member.attributes?.map(attribute => new SchemaAttribute({ attribute })) ?? [];
    }
}
