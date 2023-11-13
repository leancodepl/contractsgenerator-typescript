import { useMemo } from "react";
import useSorting from "../../../hooks/useSorting";
import { AdminQuery } from "../../../types/admin";

export function useApiTableSorting<T>() {
  const { sortData, sortDirection, sortKey } = useSorting<string>({});

  const sortQueryParams = useMemo<Pick<AdminQuery<T>, "SortBy" | "SortDescending">>(
    () => ({
      SortBy: sortKey,
      SortDescending: sortDirection ? sortDirection === "descend" : undefined,
    }),
    [sortDirection, sortKey],
  );

  return {
    sortData,
    sortQueryParams,
  };
}
