/* eslint-disable @typescript-eslint/no-explicit-any */
import { AdminComponentsConfig } from "@leancodepl/contractsgenerator-typescript-plugin-admin";
import { mkCqrsClient } from "@leancodepl/react-query-cqrs-client";
import { mkApiTables } from "./components/Table";
import { CQRS } from "./types/api";

export type CqrsClientConfig = Parameters<typeof mkCqrsClient>[0];

export function createApiComponents<TAdminComponentsConfig extends AdminComponentsConfig, TCqrs extends CQRS>(
  { components, enumsMaps }: TAdminComponentsConfig,
  { cqrsClientConfig, cqrs }: { cqrsClientConfig: CqrsClientConfig; cqrs: TCqrs },
): ReturnType<typeof mkApiTables<TAdminComponentsConfig, TCqrs>> {
  return mkApiTables<TAdminComponentsConfig, TCqrs>({ components, enumsMaps } as TAdminComponentsConfig, {
    cqrsClientConfig,
    cqrs,
  });
}
