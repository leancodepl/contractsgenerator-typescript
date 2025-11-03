import ts from "typescript"
import { SchemaQuery } from "@leancodepl/contractsgenerator-typescript-schema"
import {
  GenerateContext,
  generateType,
  generateTypeWithNullability,
} from "@leancodepl/contractsgenerator-typescript-types"

export function generateQuery(query: SchemaQuery, context: GenerateContext) {
  const name = query.getName(context.nameTransform)
  if (name === undefined) return undefined

  const queryType = generateType(query.queryType, context)
  if (queryType === undefined) return undefined

  const returnType = generateTypeWithNullability(query.returnType, context)
  if (returnType === undefined) return undefined

  return ts.factory.createPropertyAssignment(
    /* name */ name,
    /* initializer */ ts.factory.createCallExpression(
      /* expression */ ts.factory.createPropertyAccessExpression(
        /* expression */ ts.factory.createIdentifier("cqrsClient"),
        /* name */ "createQuery",
      ),
      /* typeArguments */ [queryType, returnType],
      /* argumentsArray */ [ts.factory.createStringLiteral(query.id)],
    ),
  )
}
