import { SchemaCommand } from "@leancodepl/contractsgenerator-typescript-schema";
import ts from "typescript";
import { ContractsContext } from "../contractsContext";

export function generateErrorCodes(command: SchemaCommand, context: ContractsContext) {
    const errorCodes = command.errorCodes;

    if (!errorCodes.hasErrors) return [];

    const errorCodesStatements = [
        ts.factory.createVariableStatement(
            /* modifiers */ [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
            /* declarationList */ ts.factory.createVariableDeclarationList(
                /* declarations */ [
                    ts.factory.createVariableDeclaration(
                        /* name */ "ErrorCodes",
                        /* exclamationToken */ undefined,
                        /* type */ undefined,
                        /* intializer */ ts.factory.createAsExpression(
                            /* expression */ ts.factory.createObjectLiteralExpression(
                                /* properties */ errorCodes.errorCodes.map(errorCode =>
                                    ts.factory.createPropertyAssignment(
                                        /* name */ errorCode.name,
                                        /* initializer */ ts.factory.createNumericLiteral(errorCode.code),
                                    ),
                                ),
                                /* multiline */ true,
                            ),
                            /* type */ ts.factory.createTypeReferenceNode("const"),
                        ),
                    ),
                ],
                /* flags */ ts.NodeFlags.Const,
            ),
        ),
        ts.factory.createTypeAliasDeclaration(
            /* modifiers */ [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
            /* name */ "ErrorCodes",
            /* typeParameters */ undefined,
            /* type */ ts.factory.createTypeQueryNode(/* exprName */ ts.factory.createIdentifier("ErrorCodes")),
        ),
    ];

    return [
        ts.factory.createModuleDeclaration(
            /* modifiers */ [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
            /* name */ ts.factory.createIdentifier(command.getName(context.nameTransform)),
            /* body */ ts.factory.createModuleBlock(errorCodesStatements),
            /* flags */ ts.NodeFlags.Namespace,
        ),
    ];
}
