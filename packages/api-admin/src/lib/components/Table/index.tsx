/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import {
    AdminComponentsConfig,
    AdminTableColumn,
    AdminTableConfig,
    ApiComponent,
    EnumsMap,
} from "@leancodepl/contractsgenerator-typescript-plugin-admin";
import { Table as AntTable, TableProps as AntTableProps, TableColumnType } from "antd";
import { ColumnType, FilterValue } from "antd/lib/table/interface";
import { ReactNode, useMemo, useState } from "react";
import { AdminQuery } from "../../types/admin";
import { defaultFormatters } from "./formatters/defaultFormatters";
import { useApiTablePagination } from "./hooks/useApiTablePagination";
import { useApiTableSorting } from "./hooks/useApiTableSorting";

// type ApiTableFactoryProps = {
//     api: PoorMansAPI;
//     tableConfigs: AdminTableApiComponent[];
//     tableRuntimeConfig?: ExcludeUndefined<CreateApiComponentsParams<never>["runtimeConfig"]>["table"];
// };

type CustomFilters = Pick<TableColumnType<unknown>, "filters" | "filterDropdown" | "filterMultiple"> & {
    onChange?: (value: FilterValue | null) => void;
};

// type ApiTableProps<T extends { id: string }> = {
//     tableProps?: AntTableProps<T>;
//     requestParams: Record<string, unknown>;
//     [P: `${string}Render`]: (value: unknown, record: T) => ReactNode;
//     [P: `${string}Filters`]: CustomFilters;
// };

// type QueryConfig<TQuery extends AdminQuery<any>, TResult extends AdminQueryResult<any>> = [TQuery, TResult];
//     Omit<TQuery, keyof AdminQuery<any>>,
//     TResult extends AdminQueryResult<infer TBoxedResult> ? TBoxedResult : never,
// ];

function mkApiTable<TAdminTable extends AdminTableConfig, TQueryConfig extends AdminQuery<any>>(
    { query, columns }: TAdminTable,
    enumsMap: EnumsMap,
) {
    type TQueryParams = Omit<TQueryConfig, keyof AdminQuery<any>>;
    type TQueryResponse = TQueryConfig extends AdminQuery<infer TResult> ? TResult : never;

    // eslint-disable-next-line @typescript-eslint/ban-types
    type TQueryParamsProps = {} extends TQueryParams
        ? { requestParams?: TQueryParams }
        : { requestParams: TQueryParams };

    type Columns = TAdminTable["columns"];

    type ColumnsProps = {
        [TKey in keyof Columns]: ColumnProps<Columns[TKey]>;
    }[number];

    type ColumnProps<TColumn> = TColumn extends AdminTableColumn
        ? {
              [TKey in `${TColumn["id"]}Render`]?: (value: unknown, record: TQueryResponse) => ReactNode;
          }
        : never;

    type ApiTableProps = AntTableProps<unknown> & TQueryParamsProps & ColumnsProps;

    function ApiTable({ requestParams, ...renderersAndCustomFilters }: ApiTableProps) {
        const { getPaginationConfig, paginationQueryParams, useSetTotal } = useApiTablePagination<TQueryResponse>();

        const { sortData, sortQueryParams } = useApiTableSorting<TQueryResponse>();

        const [filtersQueryParams, setFiltersQueryParams] = useState<Record<string, unknown>>({});

        const { data, isLoading } = api[`use${tableConfig.table.query}`]({
            ...sortQueryParams,
            ...filtersQueryParams,
            ...paginationQueryParams,
            ...requestParams,
        });

        useSetTotal(data?.total);

        const paginationConfig = useMemo(() => getPaginationConfig(data), [data, getPaginationConfig]);

        const sourceData = useMemo(() => {
            if (tableConfig.table.pagination) {
                return data?.[tableConfig.table.pagination.responseFields.data];
            }

            return data;
        }, [data]);

        const columns2 = useMemo(
            () =>
                columns.map<ColumnType<any>>(column => {
                    // Sorting
                    const sortOrder = sortData.sortData?.columnKey === column.id ? sortData.sortData.order : undefined;

                    // // Filters
                    // const customFilters = omit(
                    //     renderersAndCustomFilters[
                    //         `${column.dataIndex}Filters` as keyof typeof renderersAndCustomFilters
                    //     ] as CustomFilters,
                    //     ["onChange"],
                    // );

                    // const filtersConfig = isEmpty(customFilters) ? mkFiltersConfig(tableConfig, column) : undefined;

                    // const filtersColumnConfig = filtersConfig?.columnConfig ?? customFilters;

                    const render: (value: any, record: any) => ReactNode = (() => {
                        const customRenderer = renderersAndCustomFilters[`${column.id}Render`];

                        if (customRenderer) return customRenderer;

                        if (typeof column.type === "string") {
                            const enumMap = enumsMap[column.type];

                            return value => enumMap.find(([key]) => key === value)?.[1];
                        }

                        return defaultFormatters[column.type];
                    })();

                    return {
                        key: column.id,
                        title: column.title,
                        dataIndex: column.id,
                        sorter: column.sortable,
                        sortOrder,
                        render,
                    };
                }),
            [renderersAndCustomFilters, sortData?.sortData?.columnKey, sortData?.sortData?.order],
        );

        // const onChange = useCallback<Exclude<TableProps<T>["onChange"], undefined>>(
        //     (_pagination, filters, sorter) => {
        //         // Sort
        //         sortData?.onSortDataChange(Array.isArray(sorter) ? sorter[0] : sorter);

        //         // Filters
        //         // Column key can be an enum value if the column is sortable so it needs to be mapped back to the data index
        //         const sortFieldColumnEnumMap =
        //             tableConfig.table.enumMaps[tableConfig.table.sort?.fieldToEnumMap as string];

        //         callCustomFiltersEventHandlers({
        //             customFilters: renderersAndCustomFilters,
        //             filters,
        //             sortFieldColumnEnumMap,
        //         });

        //         const filtersQueryParams = formatFiltersRequestParams({
        //             filters,
        //             customFilters: renderersAndCustomFilters,
        //             sortFieldColumnEnumMap,
        //             tableRuntimeConfig,
        //             tableConfig,
        //         });

        //         setFiltersQueryParams(filtersQueryParams);
        //     },
        //     [renderersAndCustomFilters, sortData],
        // );

        return (
            <AntTable
                columns={columns2}
                dataSource={sourceData}
                loading={isLoading}
                pagination={paginationConfig}
                // onChange={onChange}
                // {...tableProps}
            />
        );
    }

    ApiTable.name = `${query}ApiTable`;

    return ApiTable;
}

export function mkApiTables<
    TAdminComponentsConfig extends AdminComponentsConfig,
    TContracts extends Record<GetAllQueries<GetAllTables<TAdminComponentsConfig>>, AdminQuery<any>>,
>({
    components,
    enumMaps,
}: TAdminComponentsConfig): {
    [TQuery in GetAllQueries<GetAllTables<TAdminComponentsConfig>> as `${TQuery}ApiTable`]: ReturnType<
        typeof mkApiTable<GetTableByQuery<GetAllTables<TAdminComponentsConfig>, TQuery>, GetQuery<TContracts, TQuery>>
    >;
} {
    const apiTables = {} as any;

    components.forEach(adminTableApiComponent => {
        apiTables[`${adminTableApiComponent.table.query}ApiTable`] = mkApiTable(adminTableApiComponent.table, enumMaps);
    });

    return apiTables;
}

type Narrow<T, TNarrow> = T extends TNarrow ? T : never;

type GetAllTables<TAdminComponentsConfig extends AdminComponentsConfig> = GetAllTables2<
    TAdminComponentsConfig["components"]
>;
type GetAllTables2<TAdminApiComponents extends ApiComponent[]> = Narrow<
    {
        [TKey in keyof TAdminApiComponents]: TAdminApiComponents[TKey]["type"] extends "table"
            ? TAdminApiComponents[TKey]["table"]
            : never;
    },
    AdminTableConfig[]
>;

type GetAllQueries<TTables extends AdminTableConfig[]> = { [TKey in keyof TTables]: TTables[TKey]["query"] }[number];

type GetTableByQuery<TTables extends AdminTableConfig[], TQuery> = {
    [TKey in keyof TTables]: TTables[TKey]["query"] extends TQuery ? Narrow<TTables[TKey], AdminTableConfig> : never;
}[number];

type GetQuery<TContracts, TQuery extends string> = TContracts extends Record<TQuery, infer TQueryData>
    ? Narrow<TQueryData, AdminQuery<any>>
    : never;

// const { UsersApiTable } = mkApiTables<
//     {
//         // eslint-disable-next-line @typescript-eslint/ban-types
//         enumMaps: {};
//         components: [
//             {
//                 type: "table";
//                 table: {
//                     query: "Users";
//                     columns: [
//                         {
//                             id: "abc";
//                             title: "abc";
//                             sortable: false;
//                             type: leancode.contracts.KnownType.String;
//                         },
//                     ];
//                 };
//             },
//         ];
//     },
//     {
//         Users: Abc;
//     }
// >();
