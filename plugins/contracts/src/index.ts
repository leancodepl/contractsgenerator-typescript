import { transform } from "lodash"
import ts from "typescript"
import {
    GeneratorPlugin,
    GeneratorPluginInstance,
    GeneratorSessionContext,
} from "@leancodepl/contractsgenerator-typescript-plugin"
import { leancode } from "@leancodepl/contractsgenerator-typescript-schema"
import { TypesMap, createCustomTypeMapper, defaultTypesMap } from "@leancodepl/contractsgenerator-typescript-types"
import { ContractsGeneratorPluginConfiguration, CustomTypesMap } from "./configuration"
import { contractsGeneratorPluginConfigurationSchema } from "./configuration.validator"
import { ContractsContext } from "./contractsContext"
import { generateNamespaces } from "./generators/generateNamespace"

class ContractsGeneratorPlugin implements GeneratorPluginInstance {
    configuration

    constructor(
        unsafeConfig: unknown,
        private context: GeneratorSessionContext,
    ) {
        this.configuration = contractsGeneratorPluginConfigurationSchema.parse(unsafeConfig)
    }

    async generate(): Promise<string> {
        const schema = await this.context.getSchema(this.configuration.input)

        const printer = ts.createPrinter({
            newLine: ts.NewLineKind.LineFeed,
        })

        const printNode = (node: ts.Node) =>
            printer.printNode(
                ts.EmitHint.Unspecified,
                node,
                ts.factory.createSourceFile(
                    [],
                    ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
                    ts.NodeFlags.Synthesized,
                ),
            )

        const context: ContractsContext = {
            currentNamespace: [],
            nameTransform: this.configuration.nameTransform ?? (id => id),
            typesMap: getTypesMap(this.configuration.customTypes),
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

function getTypesMap(customTypes: ContractsGeneratorPluginConfiguration["customTypes"]): TypesMap {
    if (!customTypes) return defaultTypesMap

    return transform(
        customTypes,
        (typesMap, value, key) => {
            const knownType = leancode.contracts.KnownType[key as keyof CustomTypesMap]
            typesMap[knownType] = createCustomTypeMapper(value)
        },
        defaultTypesMap,
    )
}

const contractsGeneratorPlugin: GeneratorPlugin = {
    instance(unsafeConfig, context) {
        return new ContractsGeneratorPlugin(unsafeConfig, context.session)
    },
}

export default contractsGeneratorPlugin
