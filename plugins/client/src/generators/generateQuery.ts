import { SchemaQuery } from "@leancodepl/contractsgenerator-typescript-schema";
import {
  GenerateContext,
  generateType,
  generateTypeWithNullability,
} from "@leancodepl/contractsgenerator-typescript-types";
import ts from "typescript";

export function generateQuery(query: SchemaQuery, context: GenerateContext) {
  return ts.factory.createPropertyAssignment(
    /* name */ query.getName(context.nameTransform),
    /* initializer */ ts.factory.createCallExpression(
      /* expression */ ts.factory.createPropertyAccessExpression(
        /* expression */ ts.factory.createIdentifier("cqrsClient"),
        /* name */ "createQuery",
      ),
      /* typeArguments */ [
        generateType(query.queryType, context),
        generateTypeWithNullability(query.returnType, context),
      ],
      /* argumentsArray */ [ts.factory.createStringLiteral(query.id)],
    ),
  );
}
