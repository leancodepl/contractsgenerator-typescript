import { ensureNotEmpty } from "@leancodepl/utils"
import { SchemaEntity } from "./parseSchema"
import { leancode } from "./protocol"
import { SchemaAttribute } from "./schemaAttribute"
import { SchemaConstant } from "./schemaConstant"
import { isSchemaEnum } from "./schemaEnum"
import { SchemaProperty } from "./schemaProperty"
import { createType } from "./types"
import { isSchemaInternalType } from "./types/schemaInternalType"
import { isSchemaKnownType } from "./types/schemaKnownType"
import { SchemaType } from "./types/schemaType"
import { getNameFromFullName } from "./utils/getNameFromFullName"
import { NameTransform } from "./types/nameTransform"

export class SchemaInterface {
  kind = schemaInterfaceKind

  id
  genericParameters
  properties
  comment
  attributes
  extendTypes
  constants

  constructor({ statement }: { statement: leancode.contracts.IStatement }) {
    const typeDescriptor = {
      ...statement.dto?.typeDescriptor,
      ...statement.query?.typeDescriptor,
      ...statement.command?.typeDescriptor,
      ...statement.operation?.typeDescriptor,
      ...statement.topic?.typeDescriptor,
    }

    this.id = ensureNotEmpty(statement.name)
    this.genericParameters = typeDescriptor?.genericParameters?.map(p => ensureNotEmpty(p.name)) ?? []
    this.properties = typeDescriptor?.properties?.map(property => new SchemaProperty({ property })) ?? []
    this.attributes = statement.attributes?.map(attribute => new SchemaAttribute({ attribute })) ?? []
    this.extendTypes = typeDescriptor?.extends?.map(extendType => createType({ type: extendType })) ?? []
    this.constants = typeDescriptor?.constants?.map(constant => new SchemaConstant(constant)) ?? []
    this.comment = statement.comment ?? undefined
  }

  findInInheritanceTree<T>(
    predicate: (t: SchemaType, relatedInterface: SchemaInterface | undefined) => T | undefined,
    schemaEntities: SchemaEntity[],
  ): T | undefined {
    for (const t of this.extendTypes) {
      const relatedInterface = (() => {
        if (!isSchemaInternalType(t)) return undefined

        const relatedEntity = schemaEntities.find(e => e.id === t.id)

        if (relatedEntity && isSchemaInterface(relatedEntity)) return relatedEntity

        return undefined
      })()

      let result = predicate(t, relatedInterface)

      if (result !== undefined) return result

      if (relatedInterface) {
        result = relatedInterface.findInInheritanceTree(predicate, schemaEntities)

        if (result !== undefined) return result
      }
    }

    return undefined
  }

  extends(id: string, schemaEntities: SchemaEntity[]) {
    return (
      this.findInInheritanceTree(t => (isSchemaInternalType(t) && t.id === id) || undefined, schemaEntities) ?? false
    )
  }

  getIsAttribute(schemaEntities: SchemaEntity[]): boolean {
    return (
      this.findInInheritanceTree(t => {
        if (isSchemaKnownType(t) && t.isAttribute) return true

        return undefined
      }, schemaEntities) ?? false
    )
  }

  getFullName(nameTransform: NameTransform) {
    return nameTransform(this.id)
  }

  getName(nameTransform: NameTransform) {
    const fullName = this.getFullName(nameTransform)

    if (fullName === undefined) return undefined

    return getNameFromFullName(fullName)
  }
}

const schemaInterfaceKind = "interface"

export function isSchemaInterface(schemaEntity: SchemaEntity): schemaEntity is SchemaInterface {
  return !isSchemaEnum(schemaEntity)
}
