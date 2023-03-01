import { leancode } from "@leancodepl/contractsgenerator-typescript-schema";

export const otherTypeFormatters = {
    [leancode.contracts.KnownType.Uri]: (value: string) => (
        <a href={value} rel="noopener noreferrer">
            {value}
        </a>
    ),
    [leancode.contracts.KnownType.Object]: (value: unknown) => JSON.stringify(value),
    [leancode.contracts.KnownType.Guid]: (value: string) => value,
    [leancode.contracts.KnownType.Array]: (value: unknown[]) => value.join(", "),
    [leancode.contracts.KnownType.Map]: (_: unknown) => "Unknown",
    [leancode.contracts.KnownType.Query]: (_: unknown) => "Unknown",
    [leancode.contracts.KnownType.Command]: (_: unknown) => "Unknown",
    [leancode.contracts.KnownType.CommandResult]: (_: unknown) => "Unknown",
    [leancode.contracts.KnownType.Operation]: (_: unknown) => "Unknown",
    [leancode.contracts.KnownType.Binary]: (_: unknown) => "Unknown",
    [leancode.contracts.KnownType.Attribute]: (_: unknown) => "Unknown",
    [leancode.contracts.KnownType.AuthorizeWhenAttribute]: (_: unknown) => "Unknown",
    [leancode.contracts.KnownType.AuthorizeWhenHasAnyOfAttribute]: (_: unknown) => "Unknown",
    [leancode.contracts.KnownType.QueryCacheAttribute]: (_: unknown) => "Unknown",
} as const;
