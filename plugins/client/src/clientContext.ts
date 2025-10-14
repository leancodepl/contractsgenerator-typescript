import ts from "typescript"
import { GenerateContext } from "@leancodepl/contractsgenerator-typescript-types"
import { ClientGeneratorPluginConfiguration } from "./configuration"

export interface ClientContext extends GenerateContext {
  printNode: (node: ts.Node) => string
  configuration: ClientGeneratorPluginConfiguration
}
