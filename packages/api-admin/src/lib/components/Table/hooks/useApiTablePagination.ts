import { UncapitalizeDeep } from "@leancodepl/utils";
import { TablePaginationConfig } from "antd";
import { useCallback, useMemo } from "react";
import usePagination from "../../../hooks/usePagination";
import { AdminQuery, AdminQueryResult } from "../../../types/admin";

export const defaultPaginationConfig = {
  showQuickJumper: true,
  showSizeChanger: true,
  pageSize: 10,
  current: 1,
};

export function useApiTablePagination<T>({ defaultPageSize }: { defaultPageSize?: number } = {}) {
  const { pagination: paginationHandler, useSetTotal } = usePagination({ initialPageSize: defaultPageSize });

  const paginationQueryParams = useMemo<Pick<AdminQuery<T>, "PageSize" | "Page">>(
    () => ({
      PageSize: paginationHandler.pageSize ?? defaultPaginationConfig.pageSize,
      Page: (paginationHandler.currentPage ?? defaultPaginationConfig.current) - 1,
    }),
    [paginationHandler.currentPage, paginationHandler.pageSize],
  );

  const getPaginationConfig = useCallback(
    (data: UncapitalizeDeep<AdminQueryResult<T>> | undefined | null, pagination?: ApiTablePaginationConfig) => ({
      ...defaultPaginationConfig,
      ...pagination,
      onChange: (page: number, pageSize: number) => {
        paginationHandler.onPageChange(page);
        paginationHandler.onPageSizeChange(pageSize);
      },
      pageSize: paginationHandler.pageSize,
      current: paginationHandler.currentPage,
      total: data?.total,
    }),
    [paginationHandler],
  );

  return {
    useSetTotal,
    getPaginationConfig,
    paginationHandler,
    paginationQueryParams,
  };
}

export type ApiTablePaginationConfig = Omit<TablePaginationConfig, "onChange" | "pageSize" | "current" | "total">;
