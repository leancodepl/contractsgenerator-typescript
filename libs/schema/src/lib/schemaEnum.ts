import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { leancode } from "./protocol";
import { SchemaEnumMember } from "./schemaEnumMember";
import { getNameFromFullName } from "./utils/getNameFromFullName";

export class SchemaEnum {
    id;
    fullName;
    name;
    members;
    comment;

    constructor({
        statement,
        nameTransform,
    }: {
        statement: leancode.contracts.IStatement;
        nameTransform?: (name: string) => string;
    }) {
        this.id = ensureNotEmpty(statement.name);
        this.fullName = nameTransform?.(this.id) ?? this.id;
        this.name = getNameFromFullName(this.fullName);
        this.members = statement.enum?.members?.map(member => new SchemaEnumMember(member)) ?? [];
        this.comment = statement.comment ?? undefined;
    }
}
