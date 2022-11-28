import { SchemaOperation } from "@leancodepl/contractsgenerator-typescript-schema";
import { GenerateContext, generateType, withNullability } from "@leancodepl/contractsgenerator-typescript-types";
import ts from "typescript";

export function generateOperation(query: SchemaOperation, context: GenerateContext) {
    return ts.factory.createPropertyAssignment(
        /* name */ query.name,
        /* initializer */ ts.factory.createCallExpression(
            /* expression */ ts.factory.createPropertyAccessExpression(
                /* expression */ ts.factory.createIdentifier("cqrsClient"),
                /* name */ "createQuery",
            ),
            /* typeArguments */ [
                generateType(query.operationType, context),
                withNullability(generateType(query.returnType, context), query.returnType.isNullable),
            ],
            /* argumentsArray */ [ts.factory.createStringLiteral(query.id)],
        ),
    );
}
