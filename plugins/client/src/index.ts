import ts from "typescript"
import {
  GeneratorPlugin,
  GeneratorPluginInstance,
  GeneratorSessionContext,
} from "@leancodepl/contractsgenerator-typescript-plugin"
import { isSchemaInterface } from "@leancodepl/contractsgenerator-typescript-schema"
import { getTypesMap } from "@leancodepl/contractsgenerator-typescript-types"
import { ClientContext } from "./clientContext"
import { clientGeneratorPluginConfigurationSchema } from "./configuration"
import { generateClient } from "./generators/generateClient"

class ClientGeneratorPlugin implements GeneratorPluginInstance {
  configuration

  constructor(
    unsafeConfig: unknown,
    private context: GeneratorSessionContext,
  ) {
    this.configuration = clientGeneratorPluginConfigurationSchema.parse(unsafeConfig)
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

    const context: ClientContext = {
      currentNamespace: [],
      nameTransform: this.configuration.nameTransform ?? (id => id),
      typesMap: getTypesMap({
        customTypes: this.configuration.customTypes,
        extensions: schema.protocol.extensions,
      }),
      printNode,
      configuration: this.configuration,
    }

    const client = generateClient(schema.entities.filter(isSchemaInterface), context)

    const sourceFile = ts.factory.createSourceFile(
      [client],
      ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
      ts.NodeFlags.Synthesized,
    )

    return printNode(sourceFile)
  }
}

const clientGeneratorPlugin: GeneratorPlugin = {
  instance(unsafeConfig, context) {
    return new ClientGeneratorPlugin(unsafeConfig, context.session)
  },
}

export default clientGeneratorPlugin
