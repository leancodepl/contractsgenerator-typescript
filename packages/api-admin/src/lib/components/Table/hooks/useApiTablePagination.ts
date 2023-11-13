import { useCallback, useMemo } from "react";
import usePagination from "../../../hooks/usePagination";
import { AdminQuery, AdminQueryResult } from "../../../types/admin";

export const defaultPaginationConfig = {
  showQuickJumper: true,
  showSizeChanger: true,
  pageSize: 10,
  current: 1,
};

export function useApiTablePagination<T>() {
  const { pagination: paginationHandler, useSetTotal } = usePagination();

  const paginationQueryParams = useMemo<Pick<AdminQuery<T>, "pageSize" | "page">>(
    () => ({
      pageSize: paginationHandler.pageSize ?? defaultPaginationConfig.pageSize,
      page: paginationHandler.currentPage ?? defaultPaginationConfig.current,
    }),
    [paginationHandler.currentPage, paginationHandler.pageSize],
  );

  const getPaginationConfig = useCallback(
    (data: AdminQueryResult<T> | undefined) => ({
      ...defaultPaginationConfig,
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
