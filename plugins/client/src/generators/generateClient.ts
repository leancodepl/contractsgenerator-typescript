import {
    isSchemaCommand,
    isSchemaOperation,
    isSchemaQuery,
    SchemaInterface,
} from "@leancodepl/contractsgenerator-typescript-schema";
import ts from "typescript";
import { ClientContext } from "../clientContext";
import { generateCommand } from "./generateCommand";
import { generateOperation } from "./generateOperation";
import { generateQuery } from "./generateQuery";

export function generateClient(interfaces: SchemaInterface[], context: ClientContext) {
    const clientProperties = interfaces.flatMap(schemaInterface => {
        if (isSchemaQuery(schemaInterface)) return [generateQuery(schemaInterface, context)];
        if (isSchemaCommand(schemaInterface)) return [generateCommand(schemaInterface, context)];
        if (isSchemaOperation(schemaInterface)) return [generateOperation(schemaInterface, context)];

        return [];
    });

    return ts.factory.createFunctionDeclaration(
        /* modifiers */ [
            ts.factory.createModifier(ts.SyntaxKind.ExportKeyword),
            ts.factory.createModifier(ts.SyntaxKind.DefaultKeyword),
        ],
        /* asteriskToken */ undefined,
        /* name */ undefined,
        /* typeParameters */ undefined,
        /* parameters */ [
            ts.factory.createParameterDeclaration(
                /* modifiers */ undefined,
                /* dotDotDotToken */ undefined,
                /* name */ ts.factory.createIdentifier("cqrsClient"),
                /* questionToken */ undefined,
                /* type */ ts.factory.createTypeReferenceNode("CQRS"),
                /* initializer */ undefined,
            ),
        ],
        /* type */ undefined,
        /* body */ ts.factory.createBlock(
            /* statements */ [
                ts.factory.createReturnStatement(
                    /* expression */ ts.factory.createObjectLiteralExpression(
                        /* properties */ ts.factory.createNodeArray(/* elements */ clientProperties),
                        /* multiline */ true,
                    ),
                ),
            ],
            /* multiline */ true,
        ),
    );
}
