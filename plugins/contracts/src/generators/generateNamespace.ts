import { groupBy, toPairs } from "lodash"
import ts from "typescript"
import {
  isSchemaEnum,
  isSchemaInterface,
  SchemaEntity,
  SchemaEnum,
  SchemaInterface,
} from "@leancodepl/contractsgenerator-typescript-schema"
import { ContractsContext } from "../contractsContext"
import { generateEnum } from "./generateEnum"
import { generateInterface } from "./generateInterface"

export function generateNamespaces(schemaEntities: SchemaEntity[], context: ContractsContext) {
  const generatorNamespaces = extractNamespaces(schemaEntities, 0, undefined, context)

  return generateNamespace(generatorNamespaces, context)
}

function generateNamespace(generatorNamespace: GeneratorNamespace, context: ContractsContext): ts.Statement[] {
  throwErrorForDuplicateNames(generatorNamespace, context)

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

function throwErrorForDuplicateNames(generatorNamespace: GeneratorNamespace, context: ContractsContext) {
  const interfaceNames = generatorNamespace.interfaces.map(i => i.getName(context.nameTransform))
  const enumNames = generatorNamespace.enums.map(e => e.getName(context.nameTransform))

  const allNames = [...interfaceNames, ...enumNames]

  const namesOccurrencesCounts = allNames.reduce((acc, name) => {
    acc.set(name, (acc.get(name) ?? 0) + 1)
    return acc
  }, new Map<string, number>())

  const duplicateNames = Array.from(namesOccurrencesCounts.entries())
    .filter(([_, count]) => count > 1)
    .map(([name]) => name)

  if (duplicateNames.length > 0) {
    const names = duplicateNames.join(", ")

    if (context.currentNamespace.length > 0 || generatorNamespace.name) {
      const fullNamespaceName = generatorNamespace.name
        ? [...context.currentNamespace, generatorNamespace.name]
        : context.currentNamespace
      throw new Error(`Error: namespace ${fullNamespaceName.join(".")} has duplicate names: ${names}`)
    } else {
      throw new Error(`Error: duplicate names: ${names}`)
    }
  }
}
