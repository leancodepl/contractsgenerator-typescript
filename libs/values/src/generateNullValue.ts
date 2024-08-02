import ts from "typescript"
import { SchemaNullValue } from "@leancodepl/contractsgenerator-typescript-schema"

export function generateNullValue(_nullValue: SchemaNullValue) {
    return ts.factory.createToken(ts.SyntaxKind.NullKeyword)
}
