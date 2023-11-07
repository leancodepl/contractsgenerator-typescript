/* eslint-disable @typescript-eslint/no-explicit-any */
import { AdminComponentsConfig } from "@leancodepl/contractsgenerator-typescript-plugin-admin";
import { mkCqrsClient } from "@leancodepl/react-query-cqrs-client";
import { mkApiTables } from "./components/Table";
import { AdminQuery } from "./types/admin";
import { GetAllQueries, GetAllTables } from "./types/components";

export type CqrsClientConfig = Parameters<typeof mkCqrsClient>[0];

export function createApiComponents<
  TAdminComponentsConfig extends AdminComponentsConfig,
  TContracts extends Record<GetAllQueries<GetAllTables<TAdminComponentsConfig>>, AdminQuery<any>>,
>(
  { components, enumsMaps }: TAdminComponentsConfig,
  { cqrsClientConfig, cqrs }: { cqrsClientConfig: CqrsClientConfig; cqrs: any },
) {
  return mkApiTables<TAdminComponentsConfig, TContracts>({ components, enumsMaps } as any, {
    cqrsClientConfig,
    cqrs,
  });
}
