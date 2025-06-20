 
import { TableColumnType } from "antd"
import { FilterValue } from "antd/lib/table/interface"
import dayjs from "dayjs"
import { toApiDate, toApiDateTimeOffset, toApiTime } from "@leancodepl/api-date-dayjs"
import type { AdminFilterConfig, EnumsMap } from "@leancodepl/contractsgenerator-typescript-plugin-admin"
import { KnownType } from "../../../types/knownType"
import { DateRangePickerFilter } from "./rangeFilters/DateRangePickerFilter"
import { NumberRangePickerFilter } from "./rangeFilters/NumberRangePickerFilter"
import { TimeRangePickerFilter } from "./rangeFilters/TimeRangePickerFilter"
import { DatePickerFilter } from "./singleValueFilters/DatePickerFilter"
import { NumberPickerFilter } from "./singleValueFilters/NumberPickerFilter"
import { TextSearchFilter } from "./singleValueFilters/TextSearchFilter"
import { TimePickerFilter } from "./singleValueFilters/TimePickerFilter"

export type FilterConfig<TRecordType> = Pick<TableColumnType<TRecordType>, "filterDropdown" | "filterMultiple" | "filters"> & {
    onChange?: (value: FilterValue | null) => void
    formatForRequest?: (value: FilterValue | null) => any
}

export function mkFilterConfig<T>(filter: AdminFilterConfig, enumsMap: EnumsMap): FilterConfig<T> {
    switch (filter.variant) {
        case "single": {
            switch (filter.type) {
                case KnownType.String:
                case KnownType.Guid:
                case KnownType.Uri:
                    return {
                        filterDropdown: props => <TextSearchFilter {...props} placeholder="Search" />,
                        formatForRequest: value => formatApiFilter(value),
                    }
                case KnownType.UInt8:
                case KnownType.Int8:
                case KnownType.Int16:
                case KnownType.UInt16:
                case KnownType.Int32:
                case KnownType.UInt32:
                case KnownType.Int64:
                case KnownType.UInt64:
                case KnownType.Float32:
                case KnownType.Float64:
                    return {
                        filterDropdown: props => <NumberPickerFilter {...props} />,
                        formatForRequest: value => formatApiFilter(value),
                    }
                case KnownType.DateOnly:
                    return {
                        filterDropdown: props => <DatePickerFilter type="dateOnly" {...props} />,
                        formatForRequest: value => toApiDate(dayjs(value?.[0] as string)),
                    }
                case KnownType.TimeOnly:
                    return {
                        filterDropdown: props => <TimePickerFilter {...props} />,
                        formatForRequest: value => toApiTime(dayjs(value?.[0] as string)),
                    }
                case KnownType.DateTimeOffset:
                    return {
                        filterDropdown: props => <DatePickerFilter type="dateTimeOffset" {...props} />,
                        formatForRequest: value =>
                            value ? toApiDateTimeOffset(dayjs(value?.[0] as string)) : undefined,
                    }
                case KnownType.Boolean:
                    return {
                        filters: [
                            { text: "Yes", value: true },
                            { text: "No", value: false },
                        ],
                        filterMultiple: false,
                    }
            }
            break
        }
        case "range": {
            switch (filter.type) {
                case KnownType.UInt8:
                case KnownType.Int8:
                case KnownType.Int16:
                case KnownType.UInt16:
                case KnownType.Int32:
                case KnownType.UInt32:
                case KnownType.Int64:
                case KnownType.UInt64:
                case KnownType.Float32:
                case KnownType.Float64:
                    return {
                        filterDropdown: props => <NumberRangePickerFilter {...props} />,
                        formatForRequest: value => ({
                            From: value?.[0],
                            To: value?.[1],
                        }),
                    }
                case KnownType.DateOnly:
                    return {
                        filterDropdown: props => <DateRangePickerFilter type="dateOnly" {...props} />,
                        formatForRequest: value => ({
                            From: toApiDate(dayjs(value?.[0] as string)),
                            To: toApiDate(dayjs(value?.[1] as string)),
                        }),
                    }
                case KnownType.TimeOnly:
                    return {
                        filterDropdown: props => <TimeRangePickerFilter {...props} />,
                        formatForRequest: value => ({
                            From: toApiTime(dayjs(value?.[0] as string)),
                            To: toApiTime(dayjs(value?.[1] as string)),
                        }),
                    }
                case KnownType.DateTimeOffset:
                    return {
                        filterDropdown: props => <DateRangePickerFilter type="dateTimeOffset" {...props} />,
                        formatForRequest: value =>
                            value
                                ? {
                                      From: toApiDateTimeOffset(dayjs(value[0] as string)),
                                      To: toApiDateTimeOffset(dayjs(value[1] as string)),
                                  }
                                : undefined,
                    }
            }

            break
        }

        case "enum": {
            const matchingEnumMap = enumsMap[filter.enum]

            return {
                filters: matchingEnumMap?.map(entry => ({
                    text: entry[1],
                    value: entry[0],
                })),
                filterMultiple: false,
                formatForRequest: value => formatApiFilter(value),
            }
        }
    }

    console.error(filter)
    throw new Error("Unsupported filter type received")
}

export function formatApiFilter(filters: FilterValue | null) {
    return filters?.at(0)
}
