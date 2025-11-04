import ts from "typescript"
import { SchemaCommand } from "@leancodepl/contractsgenerator-typescript-schema"
import {
  extractMinimalReferenceTypeName,
  GenerateContext,
  generateType,
} from "@leancodepl/contractsgenerator-typescript-types"

export function generateCommand(command: SchemaCommand, context: GenerateContext) {
  const name = command.getName(context.nameTransform)
  if (name === undefined) return undefined

  const fullName = command.getFullName(context.nameTransform)
  if (fullName === undefined) return undefined

  const commandType = generateType(command.commandType, context)
  if (commandType === undefined) return undefined

  const errorCodesType = command.errorCodes.hasErrors
    ? ts.factory.createTypeReferenceNode(
        /* typeName */ extractMinimalReferenceTypeName(`${fullName}.ErrorCodes`, context.currentNamespace),
        /* typeArguments */ undefined,
      )
    : ts.factory.createTypeLiteralNode(/* members */ undefined)

  const errorCodesArgument = command.errorCodes.hasErrors
    ? ts.factory.createPropertyAccessExpression(
        /* expression */ ts.factory.createIdentifier(
          extractMinimalReferenceTypeName(fullName, context.currentNamespace),
        ),
        /* name */ "ErrorCodes",
      )
    : ts.factory.createObjectLiteralExpression(/* properties */ undefined, /* multiline */ false)

  return ts.factory.createPropertyAssignment(
    /* name */ name,
    ts.factory.createCallExpression(
      /* expression */ ts.factory.createPropertyAccessExpression(
        /* expression */ ts.factory.createIdentifier("cqrsClient"),
        /* name */ "createCommand",
      ),
      /* typeArguments */ [commandType, errorCodesType],
      /* argumentsArray */ [ts.factory.createStringLiteral(command.id), errorCodesArgument],
    ),
  )
}
