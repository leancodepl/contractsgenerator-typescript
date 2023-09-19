import ts from "typescript";

export function withNullability(typeNode: ts.TypeNode, isNullable: boolean) {
    if (isNullable) {
        return ts.factory.createUnionTypeNode([
            typeNode,
            ts.factory.createLiteralTypeNode(ts.factory.createNull()),
            ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword),
        ]);
    }

    return typeNode;
}
