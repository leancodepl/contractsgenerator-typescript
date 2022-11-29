import { GenerateContext } from "@leancodepl/contractsgenerator-typescript-types";
import ts from "typescript";
import { ContractsGeneratorPluginConfiguration } from "./configuration";

export interface ClientContext extends GenerateContext {
    printNode: (node: ts.Node) => string;
    configuration: ContractsGeneratorPluginConfiguration;
}
