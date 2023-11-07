/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import type {
  AdminComponentsConfig,
  AdminTableColumn,
  AdminTableConfig,
  EnumsMap,
} from "@leancodepl/contractsgenerator-typescript-plugin-admin";
import { assertNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { mkCqrsClient } from "@leancodepl/react-query-cqrs-client";
import { keepPreviousData } from "@tanstack/react-query";
import { Table as AntTable, TableProps as AntTableProps, TableColumnType, TableProps } from "antd";
import { ReactNode, useCallback, useMemo, useState } from "react";
import { mkColumnRender } from "./filters/mkColumnRender";
import { FilterConfig, mkFilterConfig } from "./filters/mkFilterConfig";
import { useApiTablePagination } from "./hooks/useApiTablePagination";
import { useApiTableSorting } from "./hooks/useApiTableSorting";
import { CqrsClientConfig } from "../../createApiComponents";
import { AdminQuery, AdminQueryResult } from "../../types/admin";
import { GetAllQueries, GetAllTables, GetTableByQuery, GetQuery } from "../../types/components";

const __createQueryType: ReturnType<typeof mkCqrsClient>["createQuery"] = null as any;
type CreateQueryResult = ReturnType<typeof __createQueryType<AdminQuery<any>, AdminQueryResult<any>>>;

type PoorsManApiClient = Record<string, CreateQueryResult>;

function mkApiTable<TAdminTable extends AdminTableConfig, TQueryConfig extends AdminQuery<any>>(
  { query, columns }: TAdminTable,
  apiClient: PoorsManApiClient,
  enumsMap: EnumsMap,
) {
  type TQueryParams = Omit<TQueryConfig, keyof AdminQuery<any>>;
  type TQueryResponse = TQueryConfig extends AdminQuery<infer TResult> ? TResult : never;

  // eslint-disable-next-line @typescript-eslint/ban-types
  type TQueryParamsProps = {} extends TQueryParams ? { requestParams?: TQueryParams } : { requestParams: TQueryParams };

  type Columns = TAdminTable["columns"];

  type ColumnsProps = {
    [TKey in keyof Columns]: ColumnProps<Columns[TKey]>;
  }[number];

  type ColumnProps<TColumn> = TColumn extends AdminTableColumn
    ? {
        [TKey in `${TColumn["id"]}Render`]?: (value: unknown, record: TQueryResponse) => ReactNode;
      } & {
        [TKey in `${TColumn["id"]}Filter`]?: TColumn["filter"] extends undefined ? never : FilterConfig<TQueryResponse>;
      }
    : never;

  type ApiTableProps = Omit<AntTableProps<unknown>, "columns" | "dataSource" | "loading" | "pagination" | "onChange"> &
    TQueryParamsProps &
    ColumnsProps;

  const columnsDefaults = columns.reduce(
    (defaults, column) => ({
      ...defaults,
      [column.id]: {
        render: mkColumnRender(column, enumsMap),
        filter: column.filter ? mkFilterConfig(column.filter, enumsMap) : undefined,
      },
    }),
    {} as Record<
      string,
      {
        render: (value: any, record: any) => ReactNode;
        filter?: FilterConfig<TQueryResponse>;
      }
    >,
  );

  const useQuery = apiClient[query];

  function ApiTable({ requestParams, ...props }: ApiTableProps) {
    const { getPaginationConfig, paginationQueryParams, useSetTotal } = useApiTablePagination<TQueryResponse>();

    const { sortData, sortQueryParams } = useApiTableSorting<TQueryResponse>();

    const [filtersQueryParams, setFiltersQueryParams] = useState<Record<string, unknown>>({});

    const { data, isLoading } = useQuery(
      {
        ...requestParams,
        ...sortQueryParams,
        ...filtersQueryParams,
        ...paginationQueryParams,
      } as any,
      {
        placeholderData: keepPreviousData,
      },
    );

    useSetTotal(data?.total);

    const paginationConfig = useMemo(() => getPaginationConfig(data), [data, getPaginationConfig]);

    const columns2 = useMemo(
      () =>
        columns.map<TableColumnType<any>>(column => {
          // Sorting
          const sortOrder = sortData.sortData?.columnKey === column.id ? sortData.sortData.order : undefined;

          const filter = props[`${column.id}Filter`] ?? columnsDefaults[column.id].filter;
          const render = props[`${column.id}Render`] ?? columnsDefaults[column.id].render;

          return {
            key: column.id,
            dataIndex: column.id,
            title: column.title,
            render,
            sorter: column.sortable,
            sortOrder,
            filters: filter?.filters,
            filterDropdown: filter?.filterDropdown,
            filterMultiple: filter?.filterMultiple,
          };
        }),
      [props, sortData?.sortData?.columnKey, sortData?.sortData?.order],
    );

    const onChange = useCallback<Exclude<TableProps<TQueryResponse>["onChange"], undefined>>(
      (_pagination, filters, sorter) => {
        // Sort
        sortData?.onSortDataChange(Array.isArray(sorter) ? sorter[0] : sorter);

        const filtersQueryParams: Record<string, any> = {};

        // Filters
        Object.entries(filters).forEach(([columnKey, value]) => {
          const filterField = columns.find(column => column.id === columnKey)?.filter?.field;

          if (!filterField) return;

          assertNotEmpty(filterField);

          const filter = props[`${columnKey}Filter`] ?? columnsDefaults[columnKey].filter;

          filter?.onChange?.(value);
          filtersQueryParams[filterField] = filter?.formatForRequest ? filter.formatForRequest(value) : value;
        });

        setFiltersQueryParams(filtersQueryParams);
      },
      [props, sortData],
    );

    return (
      <AntTable
        {...(props as any)}
        columns={columns2}
        dataSource={data?.items}
        loading={isLoading}
        pagination={paginationConfig}
        onChange={onChange}
      />
    );
  }

  ApiTable.displayName = `${query}ApiTable`;

  return ApiTable;
}

export function mkApiTables<
  TAdminComponentsConfig extends AdminComponentsConfig,
  TContracts extends Record<GetAllQueries<GetAllTables<TAdminComponentsConfig>>, AdminQuery<any>>,
>(
  { components, enumsMaps }: TAdminComponentsConfig,
  { cqrsClientConfig, cqrs }: { cqrsClientConfig: CqrsClientConfig; cqrs: any },
): {
  [TQuery in GetAllQueries<GetAllTables<TAdminComponentsConfig>> as `${TQuery}ApiTable`]: ReturnType<
    typeof mkApiTable<GetTableByQuery<GetAllTables<TAdminComponentsConfig>, TQuery>, GetQuery<TContracts, TQuery>>
  >;
} {
  const apiTables = {} as any;

  const cqrsClient = mkCqrsClient(cqrsClientConfig);
  const apiClient = cqrs(cqrsClient);

  components.forEach(adminTableApiComponent => {
    apiTables[`${adminTableApiComponent.table.query}ApiTable`] = mkApiTable(
      adminTableApiComponent.table,
      apiClient,
      enumsMaps,
    );
  });

  return apiTables;
}
