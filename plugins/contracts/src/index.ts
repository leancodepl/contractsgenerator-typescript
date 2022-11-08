import {
    GeneratorPlugin,
    GeneratorPluginInstance,
    GeneratorSessionContext,
} from "@leancodepl/contractsgenerator-typescript-plugin";
import { SchemaInterface } from "@leancodepl/contractsgenerator-typescript-schema";
import ts from "typescript";
import { contractsGeneratorPluginConfigurationSchema } from "./configuration.validator";

class ContractsGeneratorPlugin implements GeneratorPluginInstance {
    configuration;

    constructor(unsafeConfig: unknown, private context: GeneratorSessionContext) {
        this.configuration = contractsGeneratorPluginConfigurationSchema.parse(unsafeConfig);
    }

    async generate(): Promise<string> {
        const schema = await this.context.getSchema(this.configuration.input);

        return "hello world";
    }
}

const contractsGeneratorPlugin: GeneratorPlugin = {
    instance(unsafeConfig, context) {
        return new ContractsGeneratorPlugin(unsafeConfig, context.session);
    },
};

export default contractsGeneratorPlugin;

function generateInterface(schemaInterface: SchemaInterface, context: GeneratorContext): ts.Statement[] {
    if (schemaInterface.isAttribute) {
        return [];
    }

    const typeParameters = schemaInterface.genericParameters.map(p =>
        ts.factory.createTypeParameterDeclaration(/* modifiers */ undefined, p),
    );

    const extendTypes =
        this.extendTypes.map(extendType => GeneratorTypeFactory.convertToExtendType(extendType, context)) ?? [];

    // createInterfaceDeclaration(
    //     modifiers: readonly Modifier[] | undefined,
    //     name: string | Identifier,
    //     typeParameters: readonly TypeParameterDeclaration[] | undefined,
    //     heritageClauses: readonly HeritageClause[] | undefined,
    //     members: readonly TypeElement[]): InterfaceDeclaration;

    const interfaceStatement = ts.factory.createInterfaceDeclaration(
        [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        schemaInterface.name,
        typeParameters,
        extendTypes.length > 0
            ? [ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, extendTypes)]
            : undefined,
        schemaInterface.properties.map(property => property.generateTypeElement(context)),
    );

    const constants = this.generateConstants(context);

    if (this.comment || this.attributes.length > 0) {
        const jsDocComment = ts.factory.createJSDocComment(
            this.comment,
            this.attributes.map(attribute => attribute.generateAttribute()),
        );

        return [
            prependJsDoc({
                context,
                jsDocComment,
                node: interfaceStatement,
            }),
            ...constants,
        ];
    }

    return [interfaceStatement, ...constants];
}
