import { GenerateContext } from "libs/types/src";
import ts from "typescript";
import { ContractsGeneratorPluginConfiguration } from "./configuration";

export interface ContractsContext extends GenerateContext {
    printNode: (node: ts.Node) => string;
    configuration: ContractsGeneratorPluginConfiguration;
}
