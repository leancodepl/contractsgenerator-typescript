import { leancode, SchemaKnownType, SchemaType } from "@leancodepl/contractsgenerator-typescript-schema";
import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import ts from "typescript";
import { GenerateContext } from "./generateContext";
import { generateType } from "./generateType";
import { withNullability } from "./utils/withNullability";

const defaultTypesMap: Record<
    leancode.contracts.KnownType,
    (config: { typeArguments: SchemaType[]; context: GenerateContext }) => ts.TypeNode | undefined
> = {
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
        const valueType = ensureNotEmpty(typeArguments[0]);

        return ts.factory.createArrayTypeNode(withNullability(generateType(valueType, context), valueType.isNullable));
    },
    [leancode.contracts.KnownType.Map]: ({ typeArguments, context }) => {
        const keyType = ensureNotEmpty(typeArguments[0]);
        const valueType = ensureNotEmpty(typeArguments[1]);

        return ts.factory.createTypeReferenceNode(
            /* typeName */ "Record",
            /* typeArguments */ [
                generateType(keyType, context),
                withNullability(generateType(valueType, context), valueType.isNullable),
            ],
        );
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
    [leancode.contracts.KnownType.CommandResult]: ({ context }) =>
        // context.referencedImports.push({
        //     from: { lib: "@leancode/cqrs-client-base" },
        //     name: "CommandResult",
        // });
        ts.factory.createTypeReferenceNode(
            /* typeName */ ts.factory.createIdentifier("CommandResult"),
            /* typeArguments */ [ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)],
        ),
    [leancode.contracts.KnownType.AuthorizeWhenAttribute]: () => undefined,
    [leancode.contracts.KnownType.AuthorizeWhenHasAnyOfAttribute]: () => undefined,
    [leancode.contracts.KnownType.QueryCacheAttribute]: () => undefined,
    [leancode.contracts.KnownType.Attribute]: () => undefined,
};

export function generateKnownType(knownType: SchemaKnownType, context: GenerateContext) {
    const typesMap = { ...defaultTypesMap };

    const outputType = typesMap[knownType.type]({ typeArguments: knownType.typeArguments, context });

    if (!outputType) throw new Error("Type not supported");

    return outputType;
}
