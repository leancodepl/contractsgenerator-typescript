import { groupBy, toPairs } from "lodash"
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
    currentNamespace: generatorNamespace.name
      ? [...context.currentNamespace, generatorNamespace.name]
      : context.currentNamespace,
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
  const dependencies = new Map<string, Set<string>>()

  for (const entity of entities) {
    const deps = new Set<string>()
    for (const depId of getEntityDependencies(entity)) {
      if (entityMap.has(depId)) {
        deps.add(depId)
      }
    }
    dependencies.set(entity.id, deps)
  }

  const visited = new Set<string>()
  const result: SchemaEntity[] = []

  function visit(id: string, visiting: Set<string>): void {
    if (visited.has(id)) return
    if (visiting.has(id)) return

    visiting.add(id)
    const deps = dependencies.get(id) ?? new Set()
    for (const depId of deps) {
      visit(depId, visiting)
    }
    visiting.delete(id)

    visited.add(id)
    const entity = entityMap.get(id)
    if (entity) result.push(entity)
  }

  for (const entity of entities) {
    visit(entity.id, new Set())
  }

  return result
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
  const nsMap = new Map(nsWithName.map(ns => [ns.name, ns]))
  const nsEntityIds = new Map(nsWithName.map(ns => [ns.name, getNamespaceEntityIds(ns)]))
  const nsDependencies = new Map<string, Set<string>>()

  for (const ns of nsWithName) {
    const deps = new Set<string>()
    const dependencyIds = getNamespaceDependencyIds(ns)

    for (const otherNs of nsWithName) {
      if (otherNs.name === ns.name) continue
      const otherEntityIds = nsEntityIds.get(otherNs.name)

      if (otherEntityIds) {
        for (const depId of dependencyIds) {
          if (otherEntityIds.has(depId)) {
            deps.add(otherNs.name)
            break
          }
        }
      }
    }

    nsDependencies.set(ns.name, deps)
  }

  const visited = new Set<string>()
  const result: GeneratorNamespace[] = []

  function visit(name: string, visiting: Set<string>): void {
    if (visited.has(name)) return
    if (visiting.has(name)) return

    visiting.add(name)
    const deps = nsDependencies.get(name) ?? new Set()
    for (const depName of deps) {
      visit(depName, visiting)
    }
    visiting.delete(name)

    visited.add(name)
    const ns = nsMap.get(name)
    if (ns) result.push(ns)
  }

  for (const ns of nsWithName) {
    visit(ns.name, new Set())
  }

  return result
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
