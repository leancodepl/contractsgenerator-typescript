import { Key } from "react";

export const bigIntToString = (value: Key) => (typeof value === "bigint" ? value.toString() : value);