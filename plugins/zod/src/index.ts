import ts from "typescript"
import {
  GeneratorPlugin,
  GeneratorPluginInstance,
  GeneratorSessionContext,
} from "@leancodepl/contractsgenerator-typescript-plugin"
import { getTypesMap } from "@leancodepl/contractsgenerator-typescript-types"
import { zodGeneratorPluginConfigurationSchema } from "./configuration"
import { generateNamespaces } from "./generators/generateNamespace"
import { zodIdentifier } from "./utils/consts"
import { ZodContext } from "./zodContext"

export type { FieldValidationContext, FieldValidationFunction } from "./configuration"

class ZodGeneratorPlugin implements GeneratorPluginInstance {
  configuration

  constructor(
    unsafeConfig: unknown,
    private context: GeneratorSessionContext,
  ) {
    this.configuration = zodGeneratorPluginConfigurationSchema.parse(unsafeConfig)
  }

  async beforeAll() {
    const importStatement = ts.factory.createImportDeclaration(
      undefined,
      ts.factory.createImportClause(
        undefined,
        undefined,
        ts.factory.createNamedImports([ts.factory.createImportSpecifier(false, undefined, zodIdentifier)]),
      ),
      ts.factory.createStringLiteral("zod"),
      undefined,
    )

    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })
    const sourceFile = ts.factory.createSourceFile(
      [importStatement],
      ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
      ts.NodeFlags.Synthesized,
    )

    return printer.printNode(ts.EmitHint.Unspecified, importStatement, sourceFile) + "\n\n"
  }

  async generate() {
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
