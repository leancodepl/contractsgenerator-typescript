/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    GeneratorPlugin,
    GeneratorPluginInstance,
    GeneratorSessionContext,
} from "@leancodepl/contractsgenerator-typescript-plugin";
import {
    isSchemaGenericType,
    isSchemaInternalType,
    isSchemaKnownType,
    SchemaAttribute,
    SchemaGenericType,
    SchemaInterface,
    SchemaInternalType,
    SchemaProperty,
    SchemaType,
} from "@leancodepl/contractsgenerator-typescript-schema";
import ts from "typescript";
import { ContractsGeneratorPluginConfiguration } from "./configuration";
import { contractsGeneratorPluginConfigurationSchema } from "./configuration.validator";
import { generateKnownType } from "./generators/generateKnownType";

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

export type ContractsContext = {
    printNode: (node: ts.Node) => string;
    currentNamespace: string[];
    configuration: ContractsGeneratorPluginConfiguration;
};

export function extractMinimalReferenceTypeName(id: string, currentNamespace: string[]) {
    const idParts = id.split(".");

    let i = 0;

    while (idParts[i] === currentNamespace[i] && idParts[i] !== undefined) i++;

    return idParts.slice(i).join(".");
}

function generateGenericType(genericType: SchemaGenericType, _context: ContractsContext) {
    return ts.factory.createTypeReferenceNode(genericType.name);
}

function generateInternalType(internalType: SchemaInternalType, context: ContractsContext) {
    const name = extractMinimalReferenceTypeName(internalType.id, context.currentNamespace);

    return ts.factory.createTypeReferenceNode(
        name,
        internalType.typeArguments.map(type => generateType(type, context)),
    );
}

export function generateType(type: SchemaType, context: ContractsContext): ts.TypeNode {
    if (isSchemaGenericType(type)) return generateGenericType(type, context);
    if (isSchemaInternalType(type)) return generateInternalType(type, context);
    if (isSchemaKnownType(type)) return generateKnownType(type, context);

    throw new Error(`Unknown type received: ${JSON.stringify(type)}`);
}

function withExtends(typeNode: ts.TypeNode) {
    if (ts.isTypeReferenceNode(typeNode) && ts.isIdentifier(typeNode.typeName)) {
        return ts.factory.createExpressionWithTypeArguments(
            ts.isIdentifier(typeNode.typeName) ? typeNode.typeName : ts.factory.createIdentifier("unknown"),
            typeNode.typeArguments,
        );
    }

    // TODO: hmm?
    return ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier("hmm"), [typeNode]);
}

export function withNullability(typeNode: ts.TypeNode, isNullable: boolean) {
    if (isNullable) {
        return ts.factory.createUnionTypeNode([
            typeNode,
            ts.factory.createLiteralTypeNode(ts.factory.createNull()),
            ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword),
        ]);
    }

    return typeNode;
}

function withJsDoc<TNode extends ts.Node>(node: TNode, jsDocComment: ts.JSDoc | undefined, context: ContractsContext) {
    if (!jsDocComment) return node;

    const comment = context.printNode(jsDocComment);

    return ts.addSyntheticLeadingComment(
        /* node */ node,
        /* kind */ ts.SyntaxKind.MultiLineCommentTrivia,
        /* text */ comment.substr(2, comment.length - 4),
        /* hasTrailingNewLine */ true,
    );
}

function generateAttribute(attribute: SchemaAttribute, _context: ContractsContext) {
    if (attribute.name === "System.ObsoleteAttribute") {
        return ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier("deprecated"));
    }

    return ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier("attribute"), attribute.name);
}

function generateProperty(property: SchemaProperty, context: ContractsContext): ts.TypeElement {
    const propertySignature = ts.factory.createPropertySignature(
        [],
        property.name,
        property.isNullable ? ts.factory.createToken(ts.SyntaxKind.QuestionToken) : undefined,
        generateType(property.type, context),
    );

    const jsDocComment =
        property.comment || property.attributes.length > 0
            ? ts.factory.createJSDocComment(
                  property.comment,
                  property.attributes.map(attribute => generateAttribute(attribute, context)),
              )
            : undefined;

    return withJsDoc(propertySignature, jsDocComment, context);
}

function generateInterface(schemaInterface: SchemaInterface, context: ContractsContext) {
    const typeParameters = schemaInterface.genericParameters.map(p =>
        ts.factory.createTypeParameterDeclaration(/* modifiers */ undefined, p),
    );

    const extendTypes = schemaInterface.extendTypes.map(type => withExtends(generateType(type, context)));

    const interfaceStatement = ts.factory.createInterfaceDeclaration(
        [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        schemaInterface.name,
        typeParameters,
        extendTypes.length > 0
            ? [ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, extendTypes)]
            : undefined,
        schemaInterface.properties.map(property => generateProperty(property, context)),
    );

    const jsDoc =
        schemaInterface.comment || schemaInterface.attributes.length > 0
            ? ts.factory.createJSDocComment(
                  schemaInterface.comment,
                  schemaInterface.attributes.map(attribute => generateAttribute(attribute, context)),
              )
            : undefined;

    return withJsDoc(interfaceStatement, jsDoc, context);
}
