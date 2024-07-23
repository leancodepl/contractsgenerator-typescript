import ts from "typescript"
import { leancode } from "@leancodepl/contractsgenerator-typescript-schema"
import { ensureNotEmpty } from "@leancodepl/utils"
import { TypesMap } from "./generateContext"
import { generateType } from "./generateType"
import { generateTypeWithNullability } from "./generateTypeWithNullability"

export const defaultTypesMap: TypesMap = {
    [leancode.contracts.KnownType.Object]: () =>
        ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Partial"), [
            ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Record"), [
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
            ]),
        ]),
    [leancode.contracts.KnownType.String]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
    [leancode.contracts.KnownType.Guid]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
    [leancode.contracts.KnownType.Uri]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
    [leancode.contracts.KnownType.DateOnly]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
    [leancode.contracts.KnownType.TimeOnly]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
    [leancode.contracts.KnownType.DateTimeOffset]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
    [leancode.contracts.KnownType.TimeSpan]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
    [leancode.contracts.KnownType.Boolean]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
    [leancode.contracts.KnownType.UInt8]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
    [leancode.contracts.KnownType.Int8]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
    [leancode.contracts.KnownType.UInt16]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
    [leancode.contracts.KnownType.Int16]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
    [leancode.contracts.KnownType.UInt32]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
    [leancode.contracts.KnownType.Int32]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
    [leancode.contracts.KnownType.UInt64]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
    [leancode.contracts.KnownType.Int64]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
    [leancode.contracts.KnownType.Float32]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
    [leancode.contracts.KnownType.Float64]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
    [leancode.contracts.KnownType.Binary]: () => ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
    [leancode.contracts.KnownType.Array]: ({ typeArguments, context }) => {
        const valueType = ensureNotEmpty(typeArguments[0])

        return ts.factory.createArrayTypeNode(generateTypeWithNullability(valueType, context))
    },
    [leancode.contracts.KnownType.Map]: ({ typeArguments, context }) => {
        const keyType = ensureNotEmpty(typeArguments[0])
        const valueType = ensureNotEmpty(typeArguments[1])

        return ts.factory.createTypeReferenceNode(
            /* typeName */ "Record",
            /* typeArguments */ [generateType(keyType, context), generateTypeWithNullability(valueType, context)],
        )
    },
    [leancode.contracts.KnownType.Query]: ({ typeArguments, context }) =>
        ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Query"), [
            generateType(ensureNotEmpty(typeArguments[0]), context),
        ]),
    [leancode.contracts.KnownType.Operation]: ({ typeArguments, context }) =>
        ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Operation"), [
            generateType(ensureNotEmpty(typeArguments[0]), context),
        ]),
    [leancode.contracts.KnownType.Command]: () =>
        ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Command")),
    [leancode.contracts.KnownType.CommandResult]: () =>
        ts.factory.createTypeReferenceNode(
            /* typeName */ ts.factory.createIdentifier("CommandResult"),
            /* typeArguments */ [ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)],
        ),
    [leancode.contracts.KnownType.AuthorizeWhenAttribute]: () => undefined,
    [leancode.contracts.KnownType.AuthorizeWhenHasAnyOfAttribute]: () => undefined,
    [leancode.contracts.KnownType.Topic]: () =>
        ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Topic")),
    [leancode.contracts.KnownType.Attribute]: () => undefined,
}
