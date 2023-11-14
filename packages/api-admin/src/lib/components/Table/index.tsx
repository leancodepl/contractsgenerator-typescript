/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import type {
  AdminComponentsConfig,
  AdminTableColumn,
  AdminTableConfig,
  EnumsMap,
} from "@leancodepl/contractsgenerator-typescript-plugin-admin";
import { mkCqrsClient } from "@leancodepl/react-query-cqrs-client";
import { UncapitalizeDeep, assertNotEmpty, toLowerFirst } from "@leancodepl/utils";
import { keepPreviousData } from "@tanstack/react-query";
import { Table as AntTable, TableProps as AntTableProps, TableColumnType, TableProps } from "antd";
import { ReactNode, useCallback, useMemo, useState } from "react";
import { mkColumnRender } from "./filters/mkColumnRender";
import { FilterConfig, mkFilterConfig } from "./filters/mkFilterConfig";
import { ApiTablePaginationConfig, useApiTablePagination } from "./hooks/useApiTablePagination";
import { useApiTableSorting } from "./hooks/useApiTableSorting";
import { CqrsClientConfig } from "../../createApiComponents";
import { AdminQuery, AdminQueryResult } from "../../types/admin";
import { GetAllQueries, GetAllTables, GetTableByQuery } from "../../types/components";

const __createQueryType: ReturnType<typeof mkCqrsClient>["createQuery"] = null as any;

type CreateQueryResult<TQuery, TResult> = ReturnType<typeof __createQueryType<TQuery, TResult>>;
type CreateAdminQueryResult<TRecord> = CreateQueryResult<AdminQuery<TRecord>, AdminQueryResult<TRecord>>;

type PoorsManApiClient = Record<string, CreateAdminQueryResult<any>>;

function mkApiTable<TAdminTable extends AdminTableConfig, TQueryConfig extends AdminQuery<any>, TRecord>(
  { query, columns }: TAdminTable,
  apiClient: PoorsManApiClient,
  enumsMap: EnumsMap,
) {
  type TQueryParams = Omit<TQueryConfig, keyof AdminQuery<any>>;

  // eslint-disable-next-line @typescript-eslint/ban-types
  type TQueryParamsProps = {} extends TQueryParams ? { requestParams?: TQueryParams } : { requestParams: TQueryParams };

  type Columns = TAdminTable["columns"];

  type ColumnsProps = {
    [TKey in keyof Columns]: ColumnProps<Columns[TKey]>;
  }[number];

  type ColumnProps<TColumn> = TColumn extends AdminTableColumn
    ? {
        [TKey in `${TColumn["id"]}Render`]?: (value: unknown, record: TRecord) => ReactNode;
      } & {
        [TKey in `${TColumn["id"]}Filter`]?: TColumn["filter"] extends undefined ? never : FilterConfig<TRecord>;
      }
    : never;

  type ApiTableProps = Omit<AntTableProps<TRecord>, "columns" | "dataSource" | "loading" | "pagination" | "onChange"> &
    TQueryParamsProps &
    ColumnsProps & { pagination?: ApiTablePaginationConfig };

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
        filter?: FilterConfig<TRecord>;
      }
    >,
  );

  const useQuery = apiClient[query];

  function ApiTable({ requestParams, ...props }: ApiTableProps) {
    const { getPaginationConfig, paginationQueryParams, useSetTotal } = useApiTablePagination<TRecord>({
      defaultPageSize: props.pagination?.defaultPageSize,
    });

    const { sortData, sortQueryParams } = useApiTableSorting<TRecord>();

    const [filtersQueryParams, setFiltersQueryParams] = useState<Record<string, unknown>>({});

    const { data, isLoading } = useQuery(
      {
        ...requestParams,
        ...sortQueryParams,
        ...filtersQueryParams,
        ...paginationQueryParams,
      },
      {
        placeholderData: keepPreviousData,
      },
    );

    useSetTotal(data?.total);

    const paginationConfig = useMemo(
      () => getPaginationConfig(data, props.pagination),
      [data, getPaginationConfig, props.pagination],
    );

    const columns2 = useMemo(
      () =>
        columns.map<TableColumnType<any>>(column => {
          // Sorting
          const sortOrder = sortData.sortData?.columnKey === column.id ? sortData.sortData.order : undefined;

          const filter = props[`${column.id}Filter`] ?? columnsDefaults[column.id].filter;
          const render = props[`${column.id}Render`] ?? columnsDefaults[column.id].render;

          return {
            key: column.id,
            dataIndex: toLowerFirst(column.id),
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

    const onChange = useCallback<Exclude<TableProps<TRecord>["onChange"], undefined>>(
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
  TCqrs extends (cqrsClient: ReturnType<typeof mkCqrsClient>) => Record<string, (...param: any) => any>,
>(
  { components, enumsMaps }: TAdminComponentsConfig,
  { cqrsClientConfig, cqrs }: { cqrsClientConfig: CqrsClientConfig; cqrs: TCqrs },
): {
  [TQuery in GetAllQueries<GetAllTables<TAdminComponentsConfig>> as `${TQuery}ApiTable`]: ReturnType<
    typeof mkApiTable<
      GetTableByQuery<GetAllTables<TAdminComponentsConfig>, TQuery>,
      GetAdminQuery<ReturnType<TCqrs>, TQuery>,
      GetAdminQueryRecord<ReturnType<TCqrs>, TQuery>
    >
  >;
} {
  const apiTables = {} as any;

  const cqrsClient = mkCqrsClient(cqrsClientConfig);
  const apiClient = cqrs(cqrsClient) as PoorsManApiClient;

  components.forEach(adminTableApiComponent => {
    apiTables[`${adminTableApiComponent.table.query}ApiTable`] = mkApiTable(
      adminTableApiComponent.table,
      apiClient,
      enumsMaps,
    );
  });

  return apiTables;
}

type GetAdminQuery<
  TCqrs extends Record<string, unknown>,
  TQueryKey extends string,
> = TCqrs[TQueryKey] extends CreateQueryResult<infer TQuery, any>
  ? TQuery extends AdminQuery<any>
    ? TQuery
    : AdminQuery<any>
  : AdminQuery<any>;

type GetAdminQueryRecord<
  TCqrs extends Record<string, unknown>,
  TQueryKey extends string,
> = TCqrs[TQueryKey] extends CreateQueryResult<any, infer TResult>
  ? TResult extends UncapitalizeDeep<AdminQueryResult<infer TRecord>>
    ? TRecord
    : unknown
  : unknown;
