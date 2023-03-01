import { leancode } from "@leancodepl/contractsgenerator-typescript-schema";
import { formatNumber } from "../../../utils/formatNumber";

export const simpleTypeFormatters = {
    [leancode.contracts.KnownType.String]: (value: string) => value,
    [leancode.contracts.KnownType.Boolean]: (value: boolean) => (value ? "Yes" : "No"),
    [leancode.contracts.KnownType.UInt8]: (value: number) => formatNumber(value),
    [leancode.contracts.KnownType.Int8]: (value: number) => formatNumber(value),
    [leancode.contracts.KnownType.Int16]: (value: number) => formatNumber(value),
    [leancode.contracts.KnownType.UInt16]: (value: number) => formatNumber(value),
    [leancode.contracts.KnownType.Int32]: (value: number) => formatNumber(value),
    [leancode.contracts.KnownType.UInt32]: (value: number) => formatNumber(value),
    [leancode.contracts.KnownType.Int64]: (value: number) => formatNumber(value),
    [leancode.contracts.KnownType.UInt64]: (value: number) => formatNumber(value),
    [leancode.contracts.KnownType.Float32]: (value: number) => formatNumber(value),
    [leancode.contracts.KnownType.Float64]: (value: number) => formatNumber(value),
} as const;
