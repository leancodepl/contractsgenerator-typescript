import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { leancode } from "./protocol";
import { SchemaNumberValue } from "./values/schemaNumberValue";

export class SchemaEnumMember {
    name;
    comment;
    value;

    constructor(member: leancode.contracts.IEnumValue) {
        this.name = ensureNotEmpty(member.name);
        this.value = new SchemaNumberValue({ numberOrFloat: member });
        this.comment = member.comment ?? undefined;
    }
}
