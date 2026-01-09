import ts from "typescript"
import { SchemaTopic } from "@leancodepl/contractsgenerator-typescript-schema"
import { extractMinimalReferenceTypeName } from "@leancodepl/contractsgenerator-typescript-types"
import { ContractsContext } from "../contractsContext"

export function generateTopicConsts(topic: SchemaTopic, context: ContractsContext) {
  const { notifications } = topic

  const notificationTypeConstStatements = notifications.map(notification => {
    const transformedName = context.nameTransform(notification.name)
    const name = extractMinimalReferenceTypeName(transformedName ?? notification.name, context.currentNamespace)

    return ts.factory.createVariableStatement(
      /* modifiers */ [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      /* declarationList */ ts.factory.createVariableDeclarationList(
        /* declarations */ [
          ts.factory.createVariableDeclaration(
            /* name */ name,
            /* exclamationToken */ undefined,
            /* type */ undefined,
            /* intializer */ ts.factory.createStringLiteral(notification.name),
          ),
        ],
        /* flags */ ts.NodeFlags.Const,
      ),
    )
  })

  const name = topic.getName(context.nameTransform)

  if (name === undefined) return []

  return [
    ts.factory.createModuleDeclaration(
      /* modifiers */ [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      /* name */ ts.factory.createIdentifier(name),
      /* body */ ts.factory.createModuleBlock(notificationTypeConstStatements),
      /* flags */ ts.NodeFlags.Namespace,
    ),
  ]
}
