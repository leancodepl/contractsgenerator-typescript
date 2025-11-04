import ts from "typescript"
import { SchemaTopic } from "@leancodepl/contractsgenerator-typescript-schema"
import { GenerateContext, generateType } from "@leancodepl/contractsgenerator-typescript-types"

export function generateTopic(topic: SchemaTopic, context: GenerateContext) {
  const name = topic.getName(context.nameTransform)
  if (name === undefined) return undefined

  const topicType = generateType(topic.topicType, context)
  if (topicType === undefined) return undefined

  return ts.factory.createPropertyAssignment(
    /* name */ name,
    /* initializer */ ts.factory.createCallExpression(
      /* expression */ ts.factory.createPropertyAccessExpression(
        /* expression */ ts.factory.createIdentifier("cqrsClient"),
        /* name */ "createTopic",
      ),
      /* typeArguments */ [
        topicType,
        ts.factory.createTypeLiteralNode(
          /* members */ topic.notifications.map(notification =>
            ts.factory.createPropertySignature(
              /* modifiers */ undefined,
              /* name */ ts.factory.createStringLiteral(notification.name),
              /* questionToken */ undefined,
              /* type */ generateType(notification.notificationType, context),
            ),
          ),
        ),
      ],
      /* argumentsArray */ [ts.factory.createStringLiteral(topic.id)],
    ),
  )
}
