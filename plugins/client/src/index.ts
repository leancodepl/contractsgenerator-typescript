import {
  GeneratorPlugin,
  GeneratorPluginInstance,
  GeneratorSessionContext,
} from "@leancodepl/contractsgenerator-typescript-plugin";
import { isSchemaInterface, leancode } from "@leancodepl/contractsgenerator-typescript-schema";
import { createCustomTypeMapper, defaultTypesMap, TypesMap } from "@leancodepl/contractsgenerator-typescript-types";
import { transform } from "lodash";
import ts from "typescript";
import { ClientContext } from "./clientContext";
import { ClientGeneratorPluginConfiguration, CustomTypesMap } from "./configuration";
import { clientGeneratorPluginConfigurationSchema } from "./configuration.validator";
import { generateClient } from "./generators/generateClient";

class ClientGeneratorPlugin implements GeneratorPluginInstance {
  configuration;

  constructor(unsafeConfig: unknown, private context: GeneratorSessionContext) {
    this.configuration = clientGeneratorPluginConfigurationSchema.parse(unsafeConfig);
  }

  async generate(): Promise<string> {
    const schema = await this.context.getSchema(this.configuration.input);

    const printer = ts.createPrinter({
      newLine: ts.NewLineKind.LineFeed,
    });

    const printNode = (node: ts.Node) =>
      printer.printNode(
        ts.EmitHint.Unspecified,
        node,
        ts.factory.createSourceFile([], ts.factory.createToken(ts.SyntaxKind.EndOfFileToken), ts.NodeFlags.Synthesized),
      );

    const context: ClientContext = {
      currentNamespace: [],
      nameTransform: this.configuration.nameTransform ?? (id => id),
      typesMap: getTypesMap(this.configuration.customTypes),
      printNode,
      configuration: this.configuration,
    };

    const client = generateClient(schema.entities.filter(isSchemaInterface), context);

    const sourceFile = ts.factory.createSourceFile(
      [client],
      ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
      ts.NodeFlags.Synthesized,
    );

    return printNode(sourceFile);
  }
}

function getTypesMap(customTypes: ClientGeneratorPluginConfiguration["customTypes"]): TypesMap {
  if (!customTypes) return defaultTypesMap;

  return transform(
    customTypes,
    (typesMap, value, key) => {
      const knownType = leancode.contracts.KnownType[key as keyof CustomTypesMap];
      typesMap[knownType] = createCustomTypeMapper(value);
    },
    defaultTypesMap,
  );
}

const clientGeneratorPlugin: GeneratorPlugin = {
  instance(unsafeConfig, context) {
    return new ClientGeneratorPlugin(unsafeConfig, context.session);
  },
};

export default clientGeneratorPlugin;
