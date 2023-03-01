import { ApiDateOnly, ApiDateTimeOffset, ApiTimeOnly, ApiTimeSpan } from "@leancode/api-date";
import { fromApiDate, fromApiDateTimeOffset, fromApiTime, fromApiTimeSpan } from "@leancode/api-date-dayjs";
import { leancode } from "@leancodepl/contractsgenerator-typescript-schema";
import { formatDate } from "../../../utils/formatDate";

export const dateFormatters = {
    [leancode.contracts.KnownType.DateOnly]: (value: ApiDateOnly) => formatDate(fromApiDate(value)),
    [leancode.contracts.KnownType.TimeOnly]: (value: ApiTimeOnly) =>
        formatDate(fromApiTime(value), { options: { timeStyle: "medium" } }),
    [leancode.contracts.KnownType.DateTimeOffset]: (value: ApiDateTimeOffset) =>
        formatDate(fromApiDateTimeOffset(value), { options: { dateStyle: "short", timeStyle: "short" } }),
    [leancode.contracts.KnownType.TimeSpan]: (value: ApiTimeSpan) => fromApiTimeSpan(value).humanize(),
} as const;
