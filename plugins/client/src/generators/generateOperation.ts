import ts from "typescript"
import { SchemaOperation } from "@leancodepl/contractsgenerator-typescript-schema"
import {
  GenerateContext,
  generateType,
  generateTypeWithNullability,
} from "@leancodepl/contractsgenerator-typescript-types"

export function generateOperation(operation: SchemaOperation, context: GenerateContext) {
  const name = operation.getName(context.nameTransform)
  if (name === undefined) return

  const operationType = generateType(operation.operationType, context)
  if (operationType === undefined) return

  const returnType = generateTypeWithNullability(operation.returnType, context)
  if (returnType === undefined) return

  return ts.factory.createPropertyAssignment(
    /* name */ name,
    /* initializer */ ts.factory.createCallExpression(
      /* expression */ ts.factory.createPropertyAccessExpression(
        /* expression */ ts.factory.createIdentifier("cqrsClient"),
        /* name */ "createOperation",
      ),
      /* typeArguments */ [operationType, returnType],
      /* argumentsArray */ [ts.factory.createStringLiteral(operation.id)],
    ),
  )
}
