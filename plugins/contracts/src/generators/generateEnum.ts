import { SchemaEnum } from "@leancodepl/contractsgenerator-typescript-schema";
import ts from "typescript";
import { ContractsContext } from "../contractsContext";
import { withJsDoc } from "../utils/withJsDoc";
import { generateEnumMember } from "./generateEnumMember";

export function generateEnum(schemaEnum: SchemaEnum, context: ContractsContext) {
    const enumStatement = ts.factory.createEnumDeclaration(
        /* modifiers */ [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        /* name */ schemaEnum.name,
        /* members */ schemaEnum.members.map(enumMember => generateEnumMember(enumMember, context)),
    );

    const jsDoc = schemaEnum.comment ? ts.factory.createJSDocComment(schemaEnum.comment) : undefined;

    return withJsDoc(enumStatement, jsDoc, context);
}
