import ts from "typescript"

export function withExtends(typeNode: ts.TypeNode) {
  if (ts.isTypeReferenceNode(typeNode) && ts.isIdentifier(typeNode.typeName)) {
    return ts.factory.createExpressionWithTypeArguments(
      ts.isIdentifier(typeNode.typeName) ? typeNode.typeName : ts.factory.createIdentifier("unknown"),
      typeNode.typeArguments,
    )
  }

  // TODO: hmm?
  return ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier("hmm"), [typeNode])
}
