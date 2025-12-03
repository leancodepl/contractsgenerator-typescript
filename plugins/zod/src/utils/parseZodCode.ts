import ts from "typescript"

export function parseZodCode(code: string): ts.Expression {
  const sourceFile = ts.createSourceFile("temp.ts", code, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)

  if (sourceFile.statements.length === 0) {
    throw new Error(`Failed to parse Zod code: ${code}. No statements found.`)
  }

  const statement = sourceFile.statements[0]
  if (!ts.isExpressionStatement(statement)) {
    throw new Error(
      `Failed to parse Zod code: ${code}. Expected an expression statement, got ${ts.SyntaxKind[statement.kind]}.`,
    )
  }

  const result = ts.transform(sourceFile, [
    context => {
      const visitor: ts.Visitor = (node: ts.Node) => {
        if (ts.isNumericLiteral(node)) {
          const numValue = Number(node.text)
          return Number.isNaN(numValue)
            ? context.factory.createNumericLiteral(node.text)
            : context.factory.createNumericLiteral(numValue)
        }

        if (ts.isStringLiteral(node)) {
          return context.factory.createStringLiteral(node.text)
        }

        if (ts.isNoSubstitutionTemplateLiteral(node)) {
          return context.factory.createNoSubstitutionTemplateLiteral(node.text, node.rawText)
        }

        if (ts.isTemplateExpression(node)) {
          const visitedHead = ts.visitNode(node.head, visitor)
          if (!visitedHead || !ts.isTemplateHead(visitedHead)) {
            throw new Error(`Failed to transform template head: expected TemplateHead`)
          }

          const templateSpans = node.templateSpans.map(span => {
            const visitedExpression = ts.visitNode(span.expression, visitor)
            if (!visitedExpression || !ts.isExpression(visitedExpression)) {
              throw new Error(`Failed to transform template expression: expected Expression`)
            }

            const visitedLiteral = ts.visitNode(span.literal, visitor)
            if (!visitedLiteral || (!ts.isTemplateMiddle(visitedLiteral) && !ts.isTemplateTail(visitedLiteral))) {
              throw new Error(`Failed to transform template literal: expected TemplateMiddle or TemplateTail`)
            }

            return context.factory.createTemplateSpan(visitedExpression, visitedLiteral)
          })

          return context.factory.createTemplateExpression(visitedHead, templateSpans)
        }

        if (ts.isIdentifier(node)) {
          return context.factory.createIdentifier(node.text)
        }

        return ts.visitEachChild(node, visitor, context)
      }

      return (sourceFile: ts.SourceFile) => {
        const visited = ts.visitNode(sourceFile, visitor) ?? sourceFile
        if (!ts.isSourceFile(visited)) {
          throw new Error(`Failed to transform source file: expected SourceFile`)
        }
        return visited
      }
    },
  ])

  const transformedStatement = result.transformed[0].statements[0]
  if (!ts.isExpressionStatement(transformedStatement)) {
    throw new Error(`Failed to transform Zod code: ${code}`)
  }

  return transformedStatement.expression
}
