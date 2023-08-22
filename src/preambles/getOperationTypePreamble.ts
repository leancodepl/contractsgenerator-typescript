import ts from "typescript";

export default function getOperationTypePreamble() {
    return ts.factory.createTypeAliasDeclaration(
        /* modifiers */ [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        /* name */ "Operation",
        /* typeParameters */ [
            ts.factory.createTypeParameterDeclaration(
                /* modifiers */ undefined,
                /* name */ "TResult",
                /* constraint */ undefined,
                /* defaultType */ undefined,
            ),
        ],
        /* type */ ts.factory.createTypeLiteralNode(/* members */ undefined),
    );
}
