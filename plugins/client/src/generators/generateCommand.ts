import { SchemaCommand } from "@leancodepl/contractsgenerator-typescript-schema";
import {
    extractMinimalReferenceTypeName,
    GenerateContext,
    generateType,
} from "@leancodepl/contractsgenerator-typescript-types";
import ts from "typescript";

export function generateCommand(command: SchemaCommand, context: GenerateContext) {
    const errorCodesType = command.errorCodes.hasErrors
        ? ts.factory.createTypeReferenceNode(
              /* typeName */ extractMinimalReferenceTypeName(
                  command.fullName + ".ErrorCodes",
                  context.currentNamespace,
              ),
              /* typeArguments */ undefined,
          )
        : ts.factory.createTypeLiteralNode(/* members */ undefined);

    const errorCodesArgument = command.errorCodes.hasErrors
        ? ts.factory.createPropertyAccessExpression(
              /* expression */ ts.factory.createIdentifier(
                  extractMinimalReferenceTypeName(command.fullName, context.currentNamespace),
              ),
              /* name */ "ErrorCodes",
          )
        : ts.factory.createObjectLiteralExpression(/* properties */ undefined, /* multiline */ false);

    return ts.factory.createPropertyAssignment(
        /* name */ command.name,
        ts.factory.createCallExpression(
            /* expression */ ts.factory.createPropertyAccessExpression(
                /* expression */ ts.factory.createIdentifier("cqrsClient"),
                /* name */ "createCommand",
            ),
            /* typeArguments */ [generateType(command.commandType, context), errorCodesType],
            /* argumentsArray */ [ts.factory.createStringLiteral(command.id), errorCodesArgument],
        ),
    );
}
