import ts from "typescript"
import { SchemaInterface } from "@leancodepl/contractsgenerator-typescript-schema"
import { generateValue } from "@leancodepl/contractsgenerator-typescript-values"
import { ContractsContext } from "../contractsContext"
import { withJsDoc } from "../utils/withJsDoc"

export function generateConsts(schemaInterface: SchemaInterface, context: ContractsContext) {
  if (schemaInterface.constants.length < 1) {
    return []
  }

  const constants = schemaInterface.constants.map(constant => {
    const constStatement = ts.factory.createVariableStatement(
      /* modifiers */ [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      /* declarationList */ ts.factory.createVariableDeclarationList(
        /* declarations */ [
          ts.factory.createVariableDeclaration(
            /* name */ constant.name,
            /* exclamationToken */ undefined,
            /* type */ undefined,
            /* intializer */ generateValue(constant.value),
          ),
        ],
        /* flags */ ts.NodeFlags.Const,
      ),
    )

    const jsDoc = constant.comment ? ts.factory.createJSDocComment(constant.comment) : undefined

    return withJsDoc(constStatement, jsDoc, context)
  })

  return [
    ts.factory.createModuleDeclaration(
      /* modifiers */ [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      /* name */ ts.factory.createIdentifier(schemaInterface.getName(context.nameTransform)),
      /* body */ ts.factory.createModuleBlock(constants),
      /* flags */ ts.NodeFlags.Namespace,
    ),
  ]
}
