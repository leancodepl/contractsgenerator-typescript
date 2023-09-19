import { SchemaBooleanValue } from "@leancodepl/contractsgenerator-typescript-schema";
import ts from "typescript";

export function generateBooleanValue(booleanValue: SchemaBooleanValue) {
    return booleanValue.value
        ? ts.factory.createToken(ts.SyntaxKind.TrueKeyword)
        : ts.factory.createToken(ts.SyntaxKind.FalseKeyword);
}
