import { SchemaInterface } from "@leancodepl/contractsgenerator-typescript-schema";
import ts from "typescript";
import { ContractsContext } from "../ContractsContext";
import { withExtends } from "../utils/withExtends";
import { withJsDoc } from "../utils/withJsDoc";
import { generateAttribute } from "./generateAttribute";
import { generateProperty } from "./generateProperty";
import { generateType } from "./generateType";

export function generateInterface(schemaInterface: SchemaInterface, context: ContractsContext) {
    const typeParameters = schemaInterface.genericParameters.map(p =>
        ts.factory.createTypeParameterDeclaration(/* modifiers */ undefined, p),
    );

    const extendTypes = schemaInterface.extendTypes.map(type => withExtends(generateType(type, context)));

    const interfaceStatement = ts.factory.createInterfaceDeclaration(
        [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        schemaInterface.name,
        typeParameters,
        extendTypes.length > 0
            ? [ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, extendTypes)]
            : undefined,
        schemaInterface.properties.map(property => generateProperty(property, context)),
    );

    const jsDoc =
        schemaInterface.comment || schemaInterface.attributes.length > 0
            ? ts.factory.createJSDocComment(
                  schemaInterface.comment,
                  schemaInterface.attributes.map(attribute => generateAttribute(attribute, context)),
              )
            : undefined;

    return withJsDoc(interfaceStatement, jsDoc, context);
}
