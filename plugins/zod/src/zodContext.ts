import ts from "typescript"
import { SchemaEntity } from "@leancodepl/contractsgenerator-typescript-schema"
import { GenerateContext } from "@leancodepl/contractsgenerator-typescript-types"
import { ZodGeneratorPluginConfiguration } from "./configuration"

export interface ZodContext extends GenerateContext {
  printNode: (node: ts.Node) => string
  configuration: ZodGeneratorPluginConfiguration
  schemaEntities: SchemaEntity[]
}
