import {
  SchemaAttribute,
  SchemaAttributeArgument,
  SchemaAttributeNamedArgument,
} from "@leancodepl/contractsgenerator-typescript-schema"

export function formatComment(comment: string | undefined, attributes: SchemaAttribute[]): string | undefined {
  if (!comment && attributes.length === 0) {
    return undefined
  }

  const parts: string[] = []

  if (comment) {
    parts.push(comment)
  }

  if (attributes.length > 0) {
    const attributeComments = attributes.map(attr => formatAttribute(attr))
    parts.push(...attributeComments)
  }

  return parts.length > 0 ? parts.join("\n") : undefined
}

function formatAttribute(attribute: SchemaAttribute): string {
  const formattedArguments = [...attribute.positionalArguments, ...attribute.namedArguments]
    .map(formatArgument)
    .join(", ")

  if (attribute.name === "System.ObsoleteAttribute") {
    return `@deprecated ${formattedArguments}`
  }

  let comment = attribute.name

  if (formattedArguments) {
    comment += `(${formattedArguments})`
  }

  return `@attribute ${comment}`
}

function formatArgument(argument: SchemaAttributeArgument): string {
  let formattedValue: string

  if (typeof argument.value.value === "string") {
    formattedValue = `"${argument.value.value}"`
  } else {
    formattedValue = argument.value.value?.toString() ?? "null"
  }

  if (argument instanceof SchemaAttributeNamedArgument) {
    return `${argument.name}: ${formattedValue}`
  }

  return formattedValue
}
