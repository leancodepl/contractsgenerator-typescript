import ts from "typescript"
import { SchemaEntity } from "@leancodepl/contractsgenerator-typescript-schema"
import { GenerateContext } from "@leancodepl/contractsgenerator-typescript-types"
import { ContractsGeneratorPluginConfiguration } from "./configuration"

export interface ContractsContext extends GenerateContext {
  printNode: (node: ts.Node) => string
  configuration: ContractsGeneratorPluginConfiguration
  schemaEntities: SchemaEntity[]
}
