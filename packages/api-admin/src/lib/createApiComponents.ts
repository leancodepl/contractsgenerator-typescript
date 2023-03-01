import {
    AdminComponentsConfig,
    AdminTableApiComponent,
    ApiComponent,
} from "@leancodepl/contractsgenerator-typescript-plugin-admin";
import { QueryClient } from "@tanstack/react-query";
import { FunctionComponent } from "react";
import { apiTableFactory } from "./components/Table";
import mkReactQueryClient from "./mkReactQueryClient";
import { ClientFactoryContracts, PoorMansClientFactory } from "./types/api";
import type { ApiTableProps, TableComponentsConfig, TableQueries } from "./types/tables";
import addPrefix from "./utils/addPrefix";

export type ApiComponents<
    TComponents extends ApiComponent[],
    TClientFactoryContracts extends ClientFactoryContracts,
> = {
    [P in `${TableQueries<TableComponentsConfig<TComponents>>}ApiTable`]: FunctionComponent<
        ApiTableProps<P extends `${infer QueryName}ApiTable` ? QueryName : never, TComponents, TClientFactoryContracts>
    >;
};

export type CreateApiComponentsParams<TCodegenConfig extends AdminComponentsConfig> = {
    config: TCodegenConfig;
    clientFactory: PoorMansClientFactory;
    queryClient: QueryClient;
    apiUrl: string;
    runtimeConfig?: {
        table?: {
            filters?: {
                filtersQueryPrefix?: string;
            };
        };
    };
};

export const createApiComponents = <
    TCodegenConfig extends AdminComponentsConfig,
    TClientFactoryContracts extends ClientFactoryContracts,
>({
    config,
    clientFactory,
    queryClient,
    apiUrl,
    runtimeConfig,
}: CreateApiComponentsParams<TCodegenConfig>): ApiComponents<TCodegenConfig["components"], TClientFactoryContracts> => {
    const rawApi = clientFactory(
        mkReactQueryClient({
            cqrsEndpoint: apiUrl,
            queryClient,
        }),
    );

    const api = addPrefix(rawApi, "use");

    return {
        ...apiTableFactory<TClientFactoryContracts>({
            tableConfigs: config.components.filter(
                (component): component is AdminTableApiComponent => component.type === "table",
            ),
            api,
            tableRuntimeConfig: runtimeConfig?.table,
        }),
    };
};
