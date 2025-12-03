import ts from "typescript"
import {
  GeneratorPlugin,
  GeneratorPluginInstance,
  GeneratorSessionContext,
} from "@leancodepl/contractsgenerator-typescript-plugin"
import { getTypesMap } from "@leancodepl/contractsgenerator-typescript-types"
import { zodGeneratorPluginConfigurationSchema } from "./configuration"
import { ZodContext } from "./zodContext"
import { generateNamespaces } from "./generators/generateNamespace"

class ZodGeneratorPlugin implements GeneratorPluginInstance {
  configuration

  constructor(
    unsafeConfig: unknown,
    private context: GeneratorSessionContext,
  ) {
    this.configuration = zodGeneratorPluginConfigurationSchema.parse(unsafeConfig)
  }

  async beforeAll(): Promise<string> {
    return 'import { z } from "zod";\n\n'
  }

  async generate(): Promise<string> {
    const schema = await this.context.getSchema(this.configuration.input)

    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })

    const printNode = (node: ts.Node) =>
      printer.printNode(
        ts.EmitHint.Unspecified,
        node,
        ts.factory.createSourceFile([], ts.factory.createToken(ts.SyntaxKind.EndOfFileToken), ts.NodeFlags.Synthesized),
      )

    const context: ZodContext = {
      currentNamespace: [],
      nameTransform: this.configuration.nameTransform ?? (id => id),
      typesMap: getTypesMap({
        customTypes: this.configuration.customTypes,
        extensions: schema.protocol.extensions,
      }),
      schemaEntities: schema.entities,
      printNode,
      configuration: this.configuration,
    }

    const namespaces = generateNamespaces(schema.entities, context)

    const sourceFile = ts.factory.createSourceFile(
      namespaces,
      ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
      ts.NodeFlags.Synthesized,
    )

    return printNode(sourceFile)
  }
}

const zodGeneratorPlugin: GeneratorPlugin = {
  instance(unsafeConfig, context) {
    return new ZodGeneratorPlugin(unsafeConfig, context.session)
  },
}

export default zodGeneratorPlugin
