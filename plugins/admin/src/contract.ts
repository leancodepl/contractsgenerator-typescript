import { leancode } from "@leancodepl/contractsgenerator-typescript-schema";

export interface BaseApiComponent {
    type: string;
}

export type FilterableKnownType =
    | leancode.contracts.KnownType.String
    | leancode.contracts.KnownType.Guid
    | leancode.contracts.KnownType.Uri
    | leancode.contracts.KnownType.Boolean
    | leancode.contracts.KnownType.UInt8
    | leancode.contracts.KnownType.Int8
    | leancode.contracts.KnownType.Int16
    | leancode.contracts.KnownType.UInt16
    | leancode.contracts.KnownType.Int32
    | leancode.contracts.KnownType.UInt32
    | leancode.contracts.KnownType.Int64
    | leancode.contracts.KnownType.UInt64
    | leancode.contracts.KnownType.Float32
    | leancode.contracts.KnownType.Float64
    | leancode.contracts.KnownType.DateOnly
    | leancode.contracts.KnownType.TimeOnly
    | leancode.contracts.KnownType.DateTimeOffset;

export type FilterableRangeKnownType =
    | leancode.contracts.KnownType.UInt8
    | leancode.contracts.KnownType.Int8
    | leancode.contracts.KnownType.Int16
    | leancode.contracts.KnownType.UInt16
    | leancode.contracts.KnownType.Int32
    | leancode.contracts.KnownType.UInt32
    | leancode.contracts.KnownType.Int64
    | leancode.contracts.KnownType.UInt64
    | leancode.contracts.KnownType.Float32
    | leancode.contracts.KnownType.Float64
    | leancode.contracts.KnownType.DateOnly
    | leancode.contracts.KnownType.TimeOnly
    | leancode.contracts.KnownType.DateTimeOffset;

export interface AdminTableConfig {
    query: string;
    columns: AdminTableColumn[];
}

export interface AdminTableApiComponent extends BaseApiComponent {
    type: "table";
    table: AdminTableConfig;
}

export type AdminTableColumn = {
    id: string;
    title: string;
    sortable: boolean;
    type: leancode.contracts.KnownType | string;
    filter?:
        | {
              variant: "single";
              type: FilterableKnownType;
          }
        | {
              variant: "range";
              type: FilterableRangeKnownType;
          }
        | {
              variant: "enum";
              enum: string;
          };
};

export type ApiComponent = AdminTableApiComponent;

export type EnumsMap = Record<string, [number | string, string][]>;

export type AdminComponentsConfig = {
    components: ApiComponent[];
    enumMaps: EnumsMap;
};
