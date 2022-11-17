import {
    GeneratorPlugin,
    GeneratorPluginInstance,
    GeneratorSessionContext,
} from "@leancodepl/contractsgenerator-typescript-plugin";
import ts from "typescript";
import { contractsGeneratorPluginConfigurationSchema } from "./configuration.validator";
import { ContractsContext } from "./ContractsContext";
import { generateInterface } from "./generators/generateInterface";

class ContractsGeneratorPlugin implements GeneratorPluginInstance {
    configuration;

    constructor(unsafeConfig: unknown, private context: GeneratorSessionContext) {
        this.configuration = contractsGeneratorPluginConfigurationSchema.parse(unsafeConfig);
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
                ts.factory.createSourceFile(
                    [],
                    ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
                    ts.NodeFlags.Synthesized,
                ),
            );

        const context: ContractsContext = {
            currentNamespace: [],
            printNode,
            configuration: this.configuration,
        };

        const interfaces = schema.interfaces.map(schemaInterface => generateInterface(schemaInterface, context));

        const sourceFile = ts.factory.createSourceFile(
            interfaces,
            ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
            ts.NodeFlags.Synthesized,
        );

        return printNode(sourceFile);
    }
}

const contractsGeneratorPlugin: GeneratorPlugin = {
    instance(unsafeConfig, context) {
        return new ContractsGeneratorPlugin(unsafeConfig, context.session);
    },
};

export default contractsGeneratorPlugin;
