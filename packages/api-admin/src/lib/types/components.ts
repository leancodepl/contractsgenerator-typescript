import {
    AdminComponentsConfig,
    AdminTableConfig,
    ApiComponent,
} from "@leancodepl/contractsgenerator-typescript-plugin-admin"
import { AdminQuery } from "./admin"

type Narrow<T, TNarrow> = T extends TNarrow ? T : never

export type GetAllTables<TAdminComponentsConfig extends AdminComponentsConfig> = GetAllTables2<
    TAdminComponentsConfig["components"]
>
type GetAllTables2<TAdminApiComponents extends ReadonlyArray<ApiComponent>> = Narrow<
    {
        [TKey in keyof TAdminApiComponents]: TAdminApiComponents[TKey]["type"] extends "table"
            ? TAdminApiComponents[TKey]["table"]
            : never
    },
    ReadonlyArray<AdminTableConfig>
>

export type GetAllQueries<TTables extends ReadonlyArray<AdminTableConfig>> = {
    [TKey in keyof TTables]: TTables[TKey]["query"]
}[number]

export type GetTableByQuery<TTables extends ReadonlyArray<AdminTableConfig>, TQuery> = {
    [TKey in keyof TTables]: TTables[TKey]["query"] extends TQuery ? Narrow<TTables[TKey], AdminTableConfig> : never
}[number]

export type GetQuery<TContracts, TQuery extends string> =
    TContracts extends Record<TQuery, infer TQueryData> ? Narrow<TQueryData, AdminQuery<any>> : never
