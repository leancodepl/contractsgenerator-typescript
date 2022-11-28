import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { leancode } from "./protocol";
import { SchemaAttribute } from "./schemaAttribute";
import { SchemaConstant } from "./schemaConstant";
import { SchemaProperty } from "./schemaProperty";
import { createType } from "./types";
import { getNameFromFullName } from "./utils/getNameFromFullName";

export class SchemaInterface {
    kind = schemaInterfaceKind;

    id;
    name;
    fullName;
    genericParameters;
    properties;
    comment;
    attributes;
    extendTypes;
    constants;

    get isAttribute() {
        return this.extendTypes.some(t => t.isAttribute);
    }

    constructor({
        statement,
        nameTransform,
    }: {
        statement: leancode.contracts.IStatement;
        nameTransform?: (name: string) => string;
    }) {
        const typeDescriptor = {
            ...statement.dto?.typeDescriptor,
            ...statement.query?.typeDescriptor,
            ...statement.command?.typeDescriptor,
            ...statement.operation?.typeDescriptor,
        };

        this.id = ensureNotEmpty(statement.name);
        this.fullName = nameTransform?.(this.id) ?? this.id;
        this.name = getNameFromFullName(this.fullName);
        this.genericParameters = typeDescriptor?.genericParameters?.map(p => ensureNotEmpty(p.name)) ?? [];
        this.properties = typeDescriptor?.properties?.map(property => new SchemaProperty({ property })) ?? [];
        this.attributes = statement.attributes?.map(attribute => new SchemaAttribute({ attribute })) ?? [];
        this.extendTypes = typeDescriptor?.extends?.map(extendType => createType({ type: extendType })) ?? [];
        this.constants = typeDescriptor?.constants?.map(constant => new SchemaConstant(constant)) ?? [];
        this.comment = statement.comment ?? undefined;
    }
}

const schemaInterfaceKind = "interface";
