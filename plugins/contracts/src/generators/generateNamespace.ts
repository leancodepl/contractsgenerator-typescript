import { groupBy, toPairs } from "lodash"
import ts from "typescript"
import {
    SchemaEntity,
    SchemaEnum,
    SchemaInterface,
    isSchemaEnum,
    isSchemaInterface,
} from "@leancodepl/contractsgenerator-typescript-schema"
import { ContractsContext } from "../contractsContext"
import { generateEnum } from "./generateEnum"
import { generateInterface } from "./generateInterface"

export function generateNamespaces(schemaEntities: SchemaEntity[], context: ContractsContext) {
    const generatorNamespaces = extractNamespaces(schemaEntities, 0, undefined, context)

    return generateNamespace(generatorNamespaces, context)
}

function generateNamespace(generatorNamespace: GeneratorNamespace, context: ContractsContext): ts.Statement[] {
    const childContext = {
        ...context,
        currentNamespace: generatorNamespace.name
            ? [...context.currentNamespace, generatorNamespace.name]
            : context.currentNamespace,
    }

    const interfaceStatements = generatorNamespace.interfaces.flatMap(schemaInterface =>
        generateInterface(schemaInterface, childContext),
    )

    const enumStatements = generatorNamespace.enums.map(schemaEnum => generateEnum(schemaEnum, childContext))

    const namespaceStatements = generatorNamespace.namespaces.flatMap(generatorNamespace =>
        generateNamespace(generatorNamespace, childContext),
    )

    const statements = [...interfaceStatements, ...enumStatements, ...namespaceStatements]

    if (!generatorNamespace.name) {
        return statements
    }

    return [
        ts.factory.createModuleDeclaration(
            /* modifiers */ [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
            /* name */ ts.factory.createIdentifier(generatorNamespace.name),
            /* body */ ts.factory.createModuleBlock(statements),
            /* flags */ ts.NodeFlags.Namespace,
        ),
    ]
}

type GeneratorNamespace = {
    name?: string
    interfaces: SchemaInterface[]
    enums: SchemaEnum[]
    namespaces: GeneratorNamespace[]
}

const rootNamespace = "0 root namespace 0"

function extractNamespaces(
    schemaEntities: SchemaEntity[],
    depth = 0,
    name: string | undefined = undefined,
    context: ContractsContext,
): GeneratorNamespace {
    const { [rootNamespace]: rootNamespaceEntities, ...namespaces } = groupBy(schemaEntities, schemaEntity => {
        const parts = schemaEntity.getFullName(context.nameTransform).split(".").slice(0, -1)

        return parts[depth] ?? rootNamespace
    })

    return {
        name,
        interfaces: rootNamespaceEntities?.filter(isSchemaInterface) ?? [],
        enums: rootNamespaceEntities?.filter(isSchemaEnum) ?? [],
        namespaces: toPairs(namespaces).map(([name, schemaInterfaces]) =>
            extractNamespaces(schemaInterfaces, depth + 1, name, context),
        ),
    }
}
