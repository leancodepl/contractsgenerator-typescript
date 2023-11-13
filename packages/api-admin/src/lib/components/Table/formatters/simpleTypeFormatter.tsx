import { KnownType } from "../../../types/knownType";
import { formatNumber } from "../../../utils/formatNumber";

export const simpleTypeFormatters = {
  [KnownType.String]: (value: string) => value,
  [KnownType.Boolean]: (value: boolean) => (value ? "Yes" : "No"),
  [KnownType.UInt8]: (value: number) => formatNumber(value),
  [KnownType.Int8]: (value: number) => formatNumber(value),
  [KnownType.Int16]: (value: number) => formatNumber(value),
  [KnownType.UInt16]: (value: number) => formatNumber(value),
  [KnownType.Int32]: (value: number) => formatNumber(value),
  [KnownType.UInt32]: (value: number) => formatNumber(value),
  [KnownType.Int64]: (value: number) => formatNumber(value),
  [KnownType.UInt64]: (value: number) => formatNumber(value),
  [KnownType.Float32]: (value: number) => formatNumber(value),
  [KnownType.Float64]: (value: number) => formatNumber(value),
} as const;
