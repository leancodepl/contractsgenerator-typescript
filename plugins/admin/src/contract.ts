import { leancode } from "@leancodepl/contractsgenerator-typescript-schema"

export interface BaseApiComponent {
    readonly type: string
}

export type FilterableKnownType =
    | leancode.contracts.KnownType.Boolean
    | leancode.contracts.KnownType.DateOnly
    | leancode.contracts.KnownType.DateTimeOffset
    | leancode.contracts.KnownType.Float32
    | leancode.contracts.KnownType.Float64
    | leancode.contracts.KnownType.Guid
    | leancode.contracts.KnownType.Int8
    | leancode.contracts.KnownType.Int16
    | leancode.contracts.KnownType.Int32
    | leancode.contracts.KnownType.Int64
    | leancode.contracts.KnownType.String
    | leancode.contracts.KnownType.TimeOnly
    | leancode.contracts.KnownType.UInt8
    | leancode.contracts.KnownType.UInt16
    | leancode.contracts.KnownType.UInt32
    | leancode.contracts.KnownType.UInt64
    | leancode.contracts.KnownType.Uri

export type FilterableRangeKnownType =
    | leancode.contracts.KnownType.DateOnly
    | leancode.contracts.KnownType.DateTimeOffset
    | leancode.contracts.KnownType.Float32
    | leancode.contracts.KnownType.Float64
    | leancode.contracts.KnownType.Int8
    | leancode.contracts.KnownType.Int16
    | leancode.contracts.KnownType.Int32
    | leancode.contracts.KnownType.Int64
    | leancode.contracts.KnownType.TimeOnly
    | leancode.contracts.KnownType.UInt8
    | leancode.contracts.KnownType.UInt16
    | leancode.contracts.KnownType.UInt32
    | leancode.contracts.KnownType.UInt64

export interface AdminTableConfig {
    readonly query: string
    readonly columns: ReadonlyArray<AdminTableColumn>
}

export interface AdminTableApiComponent extends BaseApiComponent {
    readonly type: "table"
    readonly table: AdminTableConfig
}

export type AdminFilterConfig =
    | {
          readonly variant: "enum"
          readonly field: string
          readonly enum: string
      }
    | {
          readonly variant: "range"
          readonly field: string
          readonly type: FilterableRangeKnownType
      }
    | {
          readonly variant: "single"
          readonly field: string
          readonly type: FilterableKnownType
      }

export type AdminTableColumn = {
    readonly id: string
    readonly title: string
    readonly sortable: boolean
    readonly type: leancode.contracts.KnownType | string
    readonly filter?: AdminFilterConfig
}

export type ApiComponent = AdminTableApiComponent

export type EnumsMap = Readonly<Record<string, ReadonlyArray<readonly [number, string]>>>

export type AdminComponentsConfig = {
    readonly components: ReadonlyArray<ApiComponent>
    readonly enumsMaps: EnumsMap
}
