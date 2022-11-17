import ts from "typescript";
import { ContractsGeneratorPluginConfiguration } from "./configuration";

export type ContractsContext = {
    printNode: (node: ts.Node) => string;
    currentNamespace: string[];
    configuration: ContractsGeneratorPluginConfiguration;
};
