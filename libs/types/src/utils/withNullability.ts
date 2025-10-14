import ts from "typescript"

export function withNullability(typeNode: ts.TypeNode, params?: { isNullable: boolean; omitUndefined?: boolean }) {
  if (params?.isNullable) {
    return ts.factory.createUnionTypeNode([
      typeNode,
      ts.factory.createLiteralTypeNode(ts.factory.createNull()),
      ...(params?.omitUndefined ? [] : [ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword)]),
    ])
  }

  return typeNode
}
