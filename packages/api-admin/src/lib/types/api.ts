/* eslint-disable @typescript-eslint/no-explicit-any */

type ContractParams = Record<string, any> | undefined;
type ContractResponse = unknown;

export type PoorMansClientFactory = (cqrsClient: any) => any;

export type PoorMansAPI = {
    [key: `use${string}`]: (...args: any[]) => any;
};

export type ClientFactoryContracts = Record<string, [ContractParams, ContractResponse]>;
