import ts from "typescript"
import { SchemaCommand } from "@leancodepl/contractsgenerator-typescript-schema"
import {
    GenerateContext,
    extractMinimalReferenceTypeName,
    generateType,
} from "@leancodepl/contractsgenerator-typescript-types"

export function generateCommand(command: SchemaCommand, context: GenerateContext) {
    const errorCodesType = command.errorCodes.hasErrors
        ? ts.factory.createTypeReferenceNode(
              /* typeName */ extractMinimalReferenceTypeName(
                  command.getFullName(context.nameTransform) + ".ErrorCodes",
                  context.currentNamespace,
              ),
              /* typeArguments */ undefined,
          )
        : ts.factory.createTypeLiteralNode(/* members */ undefined)

    const errorCodesArgument = command.errorCodes.hasErrors
        ? ts.factory.createPropertyAccessExpression(
              /* expression */ ts.factory.createIdentifier(
                  extractMinimalReferenceTypeName(command.getFullName(context.nameTransform), context.currentNamespace),
              ),
              /* name */ "ErrorCodes",
          )
        : ts.factory.createObjectLiteralExpression(/* properties */ undefined, /* multiline */ false)

    return ts.factory.createPropertyAssignment(
        /* name */ command.getName(context.nameTransform),
        ts.factory.createCallExpression(
            /* expression */ ts.factory.createPropertyAccessExpression(
                /* expression */ ts.factory.createIdentifier("cqrsClient"),
                /* name */ "createCommand",
            ),
            /* typeArguments */ [generateType(command.commandType, context), errorCodesType],
            /* argumentsArray */ [ts.factory.createStringLiteral(command.id), errorCodesArgument],
        ),
    )
}
