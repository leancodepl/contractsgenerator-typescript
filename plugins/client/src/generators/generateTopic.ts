import { SchemaTopic } from "@leancodepl/contractsgenerator-typescript-schema";
import { GenerateContext, generateType } from "@leancodepl/contractsgenerator-typescript-types";
import ts from "typescript";

export function generateTopic(topic: SchemaTopic, context: GenerateContext) {
  return ts.factory.createPropertyAssignment(
    /* name */ topic.getName(context.nameTransform),
    /* initializer */ ts.factory.createCallExpression(
      /* expression */ ts.factory.createPropertyAccessExpression(
        /* expression */ ts.factory.createIdentifier("cqrsClient"),
        /* name */ "createTopic",
      ),
      /* typeArguments */ [
        generateType(topic.topicType, context),
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
  );
}
