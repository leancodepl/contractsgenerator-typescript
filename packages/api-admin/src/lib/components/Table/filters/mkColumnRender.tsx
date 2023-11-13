/* eslint-disable @typescript-eslint/no-explicit-any */
import { AdminTableColumn, EnumsMap } from "@leancodepl/contractsgenerator-typescript-plugin-admin";
import { ReactNode } from "react";
import { defaultFormatters } from "../formatters/defaultFormatters";

export function mkColumnRender(column: AdminTableColumn, enumsMap: EnumsMap): (value: any, record: any) => ReactNode {
  if (typeof column.type === "string") {
    const enumMap = enumsMap[column.type];

    return value => enumMap.find(([key]) => key === value)?.[1];
  }

  return defaultFormatters[column.type];
}
