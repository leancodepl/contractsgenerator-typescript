import type { SortOrder } from "antd/lib/table/interface";
import { useMemo } from "react";
import useSorting from "../../../hooks/useSorting";
import { AdminQuery, SortOrderDTO } from "../../../types/admin";

export function useApiTableSorting<T>() {
  const { sortData, sortDirection, sortKey } = useSorting<string>({});

  const sortQueryParams = useMemo<Pick<AdminQuery<T>, "sortBy" | "sortOrder">>(
    () => ({
      sortBy: sortKey,
      sortOrder: sortDirection ? sortOrderEnumMap[sortDirection] : undefined,
    }),
    [sortDirection, sortKey],
  );

  return {
    sortData,
    sortQueryParams,
  };
}

const sortOrderEnumMap: Record<Exclude<SortOrder, null>, SortOrderDTO> = {
  ascend: SortOrderDTO.Ascending,
  descend: SortOrderDTO.Descending,
};
