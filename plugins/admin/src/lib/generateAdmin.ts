import {
    GeneratorSchema,
    isSchemaEnum,
    isSchemaInterface,
    isSchemaInternalType,
    isSchemaKnownType,
    isSchemaStringValue,
    SchemaAttribute,
    SchemaEntity,
    SchemaInterface,
    SchemaProperty,
    SchemaType,
} from "@leancodepl/contractsgenerator-typescript-schema";
import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { AdminComponentsConfig, AdminTableApiComponent, AdminTableColumn } from "../contract";

export interface AdminContext {
    schema: GeneratorSchema;
    requireEnum: (enumId: string) => void;
}

export function admin(): string {
    return "admin";
}

export function generateAdmin(schema: GeneratorSchema): AdminComponentsConfig {
    const requiredEnums = new Set<string>();

    const context = {
        schema,
        requireEnum: enumId => requiredEnums.add(enumId),
    };

    const apiTables = generateApiTables(context);

    return {
        components: [...apiTables],
        enumMaps: Object.fromEntries([...requiredEnums].map(enumId => [enumId, getEnumMap(enumId, context)])),
    };
}

export function generateApiTables(context: AdminContext): AdminTableApiComponent[] {
    const adminQueries = context.schema.entities.filter((e): e is SchemaInterface =>
        isAdminQuery(e, context.schema.entities),
    );

    return adminQueries.map(adminQuery => generateApiTable(adminQuery, context));
}

export function generateApiTable(adminQuery: SchemaInterface, context: AdminContext): AdminTableApiComponent {
    const adminQueryResultType = resolveAdminQueryResultType(adminQuery, context);

    return {
        type: "table",
        table: {
            query: adminQuery.getName(id => id),
            columns: getColumns(adminQueryResultType, context),
        },
    };
}

export function isAdminQuery(entity: SchemaEntity, schemaEntities: SchemaEntity[]): entity is SchemaInterface {
    if (!isSchemaInterface(entity)) return false;

    return entity.extends(AdminQueryMarkerId, schemaEntities);
}

export function resolveAdminQueryResultType(adminQuery: SchemaInterface, { schema }: AdminContext) {
    const adminQueryMarker = adminQuery.findInInheritanceTree((t, relatedInterface) => {
        if (relatedInterface?.id === AdminQueryMarkerId) {
            return t;
        }

        return undefined;
    }, schema.entities);

    if (!adminQueryMarker || !isSchemaInternalType(adminQueryMarker))
        throw new Error(`Unsupported admin query type in ${adminQuery.id}`);

    const adminQueryResultType = adminQueryMarker.typeArguments.at(0);

    if (!adminQueryResultType || !isSchemaInternalType(adminQueryResultType))
        throw new Error(`Unsupported admin query result type for ${adminQuery.id}`);

    const adminQueryResultEntity = ensureNotEmpty(schema.entities.find(e => e.id === adminQueryResultType.id));

    if (!isSchemaInterface(adminQueryResultEntity))
        throw new Error(`Unsupported admin query result type for ${adminQuery.id}`);

    return adminQueryResultEntity;
}

export function getColumns(adminQueryResultType: SchemaInterface, context: AdminContext): AdminTableColumn[] {
    return adminQueryResultType.properties
        .map(schemaProperty => getColumn(schemaProperty, context))
        .filter((x): x is AdminTableColumn => !!x);
}

export function getColumn(schemaProperty: SchemaProperty, context: AdminContext): AdminTableColumn | undefined {
    const columnAttribute = getColumnAttribute(schemaProperty);

    if (!columnAttribute) return undefined;

    return {
        id: schemaProperty.name,
        title: getColumnTitle(columnAttribute, schemaProperty),
        sortable: isColumnSortable(schemaProperty),
        type: getColumnType(schemaProperty.type, context),
    };
}

export function getColumnAttribute(schemaProperty: SchemaProperty) {
    return schemaProperty.attributes.find(attribute => attribute.name === AdminColumnAttributeId);
}

export function getColumnTitle(columnAttribute: SchemaAttribute, schemaProperty: SchemaProperty) {
    const nameAttributeArgument = columnAttribute?.getArgument(0, "name")?.value;

    if (nameAttributeArgument && isSchemaStringValue(nameAttributeArgument)) return nameAttributeArgument.value;

    return schemaProperty.name;
}

export function isColumnSortable(schemaProperty: SchemaProperty) {
    return schemaProperty.attributes.some(attribtue => attribtue.name === AdminSortableAttributeId);
}

export function getColumnType(schemaType: SchemaType, { schema, requireEnum }: AdminContext) {
    if (isSchemaKnownType(schemaType)) return schemaType.type;

    if (isSchemaInternalType(schemaType)) {
        const relatedEntity = schema.entities.find(e => e.id === schemaType.id);

        if (relatedEntity && isSchemaEnum(relatedEntity)) {
            requireEnum(relatedEntity.id);

            return relatedEntity.id;
        }
    }

    throw new Error(`Unsupported column type received ${JSON.stringify(schemaType)}`);
}

export function getEnumMap(enumId: string, { schema }: AdminContext) {
    const schemaEnum = 
}

const AdminQueryMarkerId = "LeanCode.Contracts.Admin.AdminQuery";
const AdminColumnAttributeId = "LeanCode.Contracts.Admin.AdminColumn";
const AdminSortableAttributeId = "LeanCode.Contracts.Admin.AdminSortable";
