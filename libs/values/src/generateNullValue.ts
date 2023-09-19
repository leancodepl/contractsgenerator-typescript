import { SchemaNullValue } from "@leancodepl/contractsgenerator-typescript-schema";
import ts from "typescript";

export function generateNullValue(_nullValue: SchemaNullValue) {
    return ts.factory.createToken(ts.SyntaxKind.NullKeyword);
}
