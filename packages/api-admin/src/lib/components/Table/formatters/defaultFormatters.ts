import { leancode } from "@leancodepl/contractsgenerator-typescript-schema";
import { ReactNode } from "react";
import { dateFormatters } from "./dateFormatter";
import { otherTypeFormatters } from "./otherTypeFormatter";
import { simpleTypeFormatters } from "./simpleTypeFormatter";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const defaultFormatters: Record<leancode.contracts.KnownType, (value: any) => ReactNode> = {
  ...simpleTypeFormatters,
  ...dateFormatters,
  ...otherTypeFormatters,
} as const;
