import { SchemaProperty } from "@leancodepl/contractsgenerator-typescript-schema";
import { generateTypeWithNullability } from "@leancodepl/contractsgenerator-typescript-types";
import ts from "typescript";
import { generateAttribute } from "./generateAttribute";
import { ContractsContext } from "../contractsContext";
import { withJsDoc } from "../utils/withJsDoc";

export function generateProperty(property: SchemaProperty, context: ContractsContext): ts.TypeElement {
  const propertySignature = ts.factory.createPropertySignature(
    /* modifiers */ [],
    /* name */ property.name,
    /* questionToken */ property.isNullable ? ts.factory.createToken(ts.SyntaxKind.QuestionToken) : undefined,
    /* type */ generateTypeWithNullability(property.type, context, { omitUndefined: true }),
  );

  const jsDocComment =
    property.comment || property.attributes.length > 0
      ? ts.factory.createJSDocComment(
          property.comment,
          property.attributes.map(attribute => generateAttribute(attribute, context)),
        )
      : undefined;

  return withJsDoc(propertySignature, jsDocComment, context);
}
