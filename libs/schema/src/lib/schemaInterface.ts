import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { SchemaEntity } from "./parseSchema";
import { leancode } from "./protocol";
import { SchemaAttribute } from "./schemaAttribute";
import { SchemaConstant } from "./schemaConstant";
import { isSchemaEnum } from "./schemaEnum";
import { SchemaProperty } from "./schemaProperty";
import { createType } from "./types";
import { getNameFromFullName } from "./utils/getNameFromFullName";

export class SchemaInterface {
    kind = schemaInterfaceKind;

    id;
    genericParameters;
    properties;
    comment;
    attributes;
    extendTypes;
    constants;

    get isAttribute() {
        return this.extendTypes.some(t => t.isAttribute);
    }

    constructor({ statement }: { statement: leancode.contracts.IStatement }) {
        const typeDescriptor = {
            ...statement.dto?.typeDescriptor,
            ...statement.query?.typeDescriptor,
            ...statement.command?.typeDescriptor,
            ...statement.operation?.typeDescriptor,
        };

        this.id = ensureNotEmpty(statement.name);
        this.genericParameters = typeDescriptor?.genericParameters?.map(p => ensureNotEmpty(p.name)) ?? [];
        this.properties = typeDescriptor?.properties?.map(property => new SchemaProperty({ property })) ?? [];
        this.attributes = statement.attributes?.map(attribute => new SchemaAttribute({ attribute })) ?? [];
        this.extendTypes = typeDescriptor?.extends?.map(extendType => createType({ type: extendType })) ?? [];
        this.constants = typeDescriptor?.constants?.map(constant => new SchemaConstant(constant)) ?? [];
        this.comment = statement.comment ?? undefined;
    }

    getFullName(nameTransform: (id: string) => string) {
        return nameTransform(this.id);
    }

    getName(nameTransform: (id: string) => string) {
        return getNameFromFullName(this.getFullName(nameTransform));
    }
}

const schemaInterfaceKind = "interface";

export function isSchemaInterface(schemaEntity: SchemaEntity): schemaEntity is SchemaInterface {
    return !isSchemaEnum(schemaEntity);
}
