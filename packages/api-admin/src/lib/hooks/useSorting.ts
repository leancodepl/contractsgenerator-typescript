/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key, useMemo, useState } from "react"
import type { SortOrder, SorterResult } from "antd/lib/table/interface"

export type SortData<TRecord> = {
    sortData?: SorterResult<TRecord>
    onSortDataChange: (sortData: SorterResult<TRecord>) => void
}

export default function useSorting<TKey extends Key>({
    defaultSortKey,
    defaultSortDirection,
}: {
    defaultSortKey: TKey
    defaultSortDirection: SortOrder
}): {
    sortData: SortData<any>
    sortKey: TKey
    sortDirection: SortOrder
    isDescending: boolean
}
export default function useSorting<TKey extends Key>({
    defaultSortKey,
    defaultSortDirection,
}: {
    defaultSortKey: TKey
    defaultSortDirection?: SortOrder
}): {
    sortData: SortData<any>
    sortKey: TKey
    sortDirection?: SortOrder
    isDescending?: boolean
}
export default function useSorting<TKey extends Key>({
    defaultSortKey,
    defaultSortDirection,
}: {
    defaultSortKey?: TKey
    defaultSortDirection: SortOrder
}): {
    sortData: SortData<any>
    sortKey?: TKey
    sortDirection: SortOrder
    isDescending: boolean
}
export default function useSorting<TKey extends Key>({
    defaultSortKey,
    defaultSortDirection,
}: {
    defaultSortKey?: TKey
    defaultSortDirection?: SortOrder
}): {
    sortData: SortData<any>
    sortKey?: TKey
    sortDirection?: SortOrder
    isDescending?: boolean
}
export default function useSorting<TKey extends Key>({
    defaultSortKey,
    defaultSortDirection,
}: { defaultSortKey?: TKey; defaultSortDirection?: SortOrder } = {}) {
    const [sortKey, setSortKey] = useState(defaultSortKey)
    const [sortDirection, setSortDirection] = useState(defaultSortDirection)

    const sortData = useMemo<SortData<any>>(
        () => ({
            onSortDataChange: sortData => {
                setSortDirection(sortData.order)
                setSortKey(sortData.columnKey as any)
            },
            sortData: {
                order: sortDirection,
                columnKey: sortKey,
            },
        }),
        [sortDirection, sortKey],
    )

    return {
        sortData,
        sortKey,
        sortDirection,
        isDescending: sortDirection === "descend",
    } as any
}
