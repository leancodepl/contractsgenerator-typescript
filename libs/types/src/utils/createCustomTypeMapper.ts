import ts from "typescript"

export function createCustomTypeMapper(customTypeName: string): () => ts.TypeNode {
  const node = ts.factory.createTypeReferenceNode(ts.factory.createIdentifier(customTypeName))

  return () => node
}
