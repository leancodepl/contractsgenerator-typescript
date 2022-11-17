import { SchemaProperty } from "@leancodepl/contractsgenerator-typescript-schema";
import ts from "typescript";
import { ContractsContext } from "../ContractsContext";
import { withJsDoc } from "../utils/withJsDoc";
import { generateAttribute } from "./generateAttribute";
import { generateType } from "./generateType";

export function generateProperty(property: SchemaProperty, context: ContractsContext): ts.TypeElement {
    const propertySignature = ts.factory.createPropertySignature(
        [],
        property.name,
        property.isNullable ? ts.factory.createToken(ts.SyntaxKind.QuestionToken) : undefined,
        generateType(property.type, context),
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
