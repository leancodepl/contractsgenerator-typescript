import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { SchemaEntity } from "./parseSchema";
import { leancode } from "./protocol";
import { SchemaAttribute } from "./schemaAttribute";
import { SchemaEnumMember } from "./schemaEnumMember";
import { getNameFromFullName } from "./utils/getNameFromFullName";

export class SchemaEnum {
    kind = schemaEnumKind;

    id;
    members;
    comment;
    attributes;

    constructor({ statement }: { statement: leancode.contracts.IStatement }) {
        this.id = ensureNotEmpty(statement.name);
        this.members = statement.enum?.members?.map(member => new SchemaEnumMember(member)) ?? [];
        this.comment = statement.comment ?? undefined;
        this.attributes = statement.attributes?.map(attribute => new SchemaAttribute({ attribute })) ?? [];
    }

    getFullName(nameTransform: (id: string) => string) {
        return nameTransform(this.id);
    }

    getName(nameTransform: (id: string) => string) {
        return getNameFromFullName(this.getFullName(nameTransform));
    }
}

const schemaEnumKind = "enum";

export function isSchemaEnum(schemaEntity: SchemaEntity): schemaEntity is SchemaEnum {
    return schemaEntity.kind === schemaEnumKind;
}
