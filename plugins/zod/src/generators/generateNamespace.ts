import { AssertionError } from "assert"
import { groupBy, toPairs } from "lodash"
import { TopologicalSort } from "topological-sort"
import ts from "typescript"
import {
  isSchemaEnum,
  isSchemaInterface,
  isSchemaInternalType,
  isSchemaKnownType,
  SchemaEntity,
  SchemaEnum,
  SchemaInterface,
  SchemaType,
} from "@leancodepl/contractsgenerator-typescript-schema"
import { ZodContext } from "../zodContext"
import { generateEnumSchema } from "./generateEnumSchema"
import { generateInterfaceSchema } from "./generateInterfaceSchema"

export function generateNamespaces(schemaEntities: SchemaEntity[], context: ZodContext) {
  const generatorNamespaces = extractNamespaces(schemaEntities, 0, undefined, context)

  return generateNamespace(generatorNamespaces, context)
}

function generateNamespace(generatorNamespace: GeneratorNamespace, context: ZodContext): ts.Statement[] {
  throwErrorForDuplicateNames(generatorNamespace, context)

  const childContext = {
    ...context,
    currentNamespace: [...context.currentNamespace, ...(generatorNamespace.name ? [generatorNamespace.name] : [])],
  }

  const allEntities: SchemaEntity[] = [...generatorNamespace.interfaces, ...generatorNamespace.enums]
  const sortedEntities = topologicalSortEntities(allEntities)

  const entityStatements = sortedEntities.flatMap(entity =>
    isSchemaInterface(entity)
      ? generateInterfaceSchema(entity, childContext)
      : generateEnumSchema(entity, childContext),
  )

  const sortedNamespaces = topologicalSortNamespaces(generatorNamespace.namespaces)
  const namespaceStatements = sortedNamespaces.flatMap(ns => generateNamespace(ns, childContext))

  const statements = [...entityStatements, ...namespaceStatements]

  if (!generatorNamespace.name) {
    return statements
  }

  return [
    ts.factory.createModuleDeclaration(
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      ts.factory.createIdentifier(generatorNamespace.name),
      ts.factory.createModuleBlock(statements),
      ts.NodeFlags.Namespace,
    ),
  ]
}

function trySortNodes<T>(sortOp: TopologicalSort<string, T>): T[] {
  try {
    return [...sortOp.sort().values()].map(node => node.node)
  } catch (error) {
    if (error instanceof AssertionError && /Node .+ forms circular dependency: .+/.test(error.message)) {
      throw new Error(`Error: circular references detected in contracts: ${error.message}`)
    }
    throw error
  }
}

function collectInternalTypeIds(type: SchemaType): string[] {
  const ids: string[] = []

  if (isSchemaInternalType(type)) {
    ids.push(type.id)
    for (const arg of type.typeArguments) {
      ids.push(...collectInternalTypeIds(arg))
    }
  } else if (isSchemaKnownType(type)) {
    for (const arg of type.typeArguments) {
      ids.push(...collectInternalTypeIds(arg))
    }
  }

  return ids
}

function getEntityDependencies(entity: SchemaEntity): string[] {
  if (isSchemaEnum(entity)) {
    return []
  }

  const deps: string[] = []

  for (const property of entity.properties) {
    deps.push(...collectInternalTypeIds(property.type))
  }

  for (const extendType of entity.extendTypes) {
    deps.push(...collectInternalTypeIds(extendType))
  }

  return [...new Set(deps)]
}

function topologicalSortEntities(entities: SchemaEntity[]): SchemaEntity[] {
  const entityMap = new Map(entities.map(e => [e.id, e]))
  const sortOp = new TopologicalSort<string, SchemaEntity>(new Map(entities.map(e => [e.id, e])))

  for (const entity of entities) {
    for (const depId of getEntityDependencies(entity)) {
      if (entityMap.has(depId)) {
        sortOp.addEdge(depId, entity.id)
      }
    }
  }

  return trySortNodes(sortOp)
}

function getNamespaceDependencyIds(namespace: GeneratorNamespace): Set<string> {
  const deps = new Set<string>()

  for (const iface of namespace.interfaces) {
    for (const depId of getEntityDependencies(iface)) {
      deps.add(depId)
    }
  }

  for (const childNs of namespace.namespaces) {
    for (const depId of getNamespaceDependencyIds(childNs)) {
      deps.add(depId)
    }
  }

  return deps
}

function getNamespaceEntityIds(namespace: GeneratorNamespace): Set<string> {
  const ids = new Set<string>()

  for (const iface of namespace.interfaces) {
    ids.add(iface.id)
  }

  for (const e of namespace.enums) {
    ids.add(e.id)
  }

  for (const childNs of namespace.namespaces) {
    for (const id of getNamespaceEntityIds(childNs)) {
      ids.add(id)
    }
  }

  return ids
}

function topologicalSortNamespaces(namespaces: GeneratorNamespace[]): GeneratorNamespace[] {
  if (namespaces.length <= 1) return namespaces

  const nsWithName = namespaces.filter((ns): ns is GeneratorNamespace & { name: string } => ns.name !== undefined)
  const nsEntityIds = new Map(nsWithName.map(ns => [ns.name, getNamespaceEntityIds(ns)]))

  const sortOp = new TopologicalSort<string, GeneratorNamespace & { name: string }>(
    new Map(nsWithName.map(ns => [ns.name, ns])),
  )

  for (const ns of nsWithName) {
    const dependencyIds = getNamespaceDependencyIds(ns)

    for (const otherNs of nsWithName) {
      if (otherNs.name === ns.name) continue
      const otherEntityIds = nsEntityIds.get(otherNs.name)

      if (otherEntityIds) {
        for (const depId of dependencyIds) {
          if (otherEntityIds.has(depId)) {
            sortOp.addEdge(otherNs.name, ns.name)
            break
          }
        }
      }
    }
  }

  return trySortNodes(sortOp)
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
  context: ZodContext,
): GeneratorNamespace {
  const { [rootNamespace]: rootNamespaceEntities, ...namespaces } = groupBy(schemaEntities, schemaEntity => {
    const parts = schemaEntity.getFullName(context.nameTransform)?.split(".").slice(0, -1)

    return parts?.[depth] ?? rootNamespace
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

function throwErrorForDuplicateNames(generatorNamespace: GeneratorNamespace, context: ZodContext) {
  const interfaceNames = generatorNamespace.interfaces.map(i => i.getName(context.nameTransform))
  const enumNames = generatorNamespace.enums.map(e => e.getName(context.nameTransform))

  const allNames = [...interfaceNames, ...enumNames].filter(name => name !== undefined)

  const namesOccurrencesCounts = allNames.reduce((acc, name) => {
    acc.set(name, (acc.get(name) ?? 0) + 1)
    return acc
  }, new Map<string, number>())

  const duplicateNames = Array.from(namesOccurrencesCounts.entries())
    .filter(([_, count]) => count > 1)
    .map(([name]) => name)

  if (duplicateNames.length === 0) {
    return
  }

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
