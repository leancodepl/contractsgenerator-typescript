import ts from "typescript"
import { ContractsContext } from "../contractsContext"

export function withJsDoc<TNode extends ts.Node>(
  node: TNode,
  jsDocComment: ts.JSDoc | undefined,
  context: ContractsContext,
) {
  if (!jsDocComment) return node

  const comment = context.printNode(jsDocComment)

  return ts.addSyntheticLeadingComment(
    /* node */ node,
    /* kind */ ts.SyntaxKind.MultiLineCommentTrivia,
    /* text */ comment.slice(2, -2),
    /* hasTrailingNewLine */ true,
  )
}
