import { useState, useRef, useMemo, useCallback } from "react";

export type PaginationData = {
  currentPage: number;
  pageSize: number;
  initialPage?: number;
  total?: number;

  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
};

export default function usePagination({
  initialPage = 1,
  initialPageSize = 10,
}: { initialPage?: number; initialPageSize?: number } = {}) {
  const [displayPage, setDisplayPage] = useState(initialPage);
  const [pageSize, onPageSizeChange] = useState(initialPageSize);
  const paginationRef = useRef<PaginationData>();

  const pagination = useMemo<PaginationData>(
    () => ({
      currentPage: displayPage,
      pageSize,
      initialPage,
      onPageChange: setDisplayPage,
      onPageSizeChange: onPageSizeChange,
    }),
    [displayPage, initialPage, pageSize],
  );

  const resetPagination = useCallback(() => {
    setDisplayPage(initialPage);
  }, [initialPage]);

  paginationRef.current = pagination;

  const useSetTotal = useCallback(
    (total?: number) => {
      if (paginationRef.current) paginationRef.current.total = total;

      if (total !== undefined) {
        const totalPages = Math.ceil(total / pageSize);

        if (totalPages < displayPage) {
          setDisplayPage(totalPages);
        }
      }
    },
    [displayPage, pageSize],
  );

  const page = Math.max(0, displayPage - 1);

  return {
    useSetTotal,
    pagination,
    displayPage,
    page,
    pageSize,
    resetPagination,
  };
}
