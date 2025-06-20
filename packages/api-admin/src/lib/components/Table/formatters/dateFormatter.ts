import { ApiDateOnly, ApiDateTime, ApiDateTimeOffset, ApiTimeOnly, ApiTimeSpan } from "@leancodepl/api-date"
import { fromApiDate, fromApiDateTimeOffset, fromApiTime, fromApiTimeSpan } from "@leancodepl/api-date-dayjs"
import { KnownType } from "../../../types/knownType"
import { formatDate } from "../../../utils/formatDate"

export const dateFormatters = {
    [KnownType.DateOnly]: (value: ApiDateOnly) => formatDate(fromApiDate(value)),
    [KnownType.TimeOnly]: (value: ApiTimeOnly) => formatDate(fromApiTime(value), { options: { timeStyle: "medium" } }),
    [KnownType.DateTimeOffset]: (value: ApiDateTimeOffset) =>
        formatDate(fromApiDateTimeOffset(value), { options: { dateStyle: "short", timeStyle: "short" } }),
    [KnownType.TimeSpan]: (value: ApiTimeSpan) => fromApiTimeSpan(value).humanize(),
    [KnownType.DateTime]: (value: ApiDateTime) => value.toString(),
} as const
