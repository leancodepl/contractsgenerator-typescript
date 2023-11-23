import { KnownType } from "../../../types/knownType";

export const otherTypeFormatters = {
  [KnownType.Uri]: (value: string) => (
    <a href={value} rel="noopener noreferrer">
      {value}
    </a>
  ),
  [KnownType.Object]: (value: unknown) => JSON.stringify(value),
  [KnownType.Guid]: (value: string) => value,
  [KnownType.Array]: (value: unknown[]) => value.join(", "),
  [KnownType.Map]: (_: unknown) => "Unknown",
  [KnownType.Query]: (_: unknown) => "Unknown",
  [KnownType.Command]: (_: unknown) => "Unknown",
  [KnownType.CommandResult]: (_: unknown) => "Unknown",
  [KnownType.Operation]: (_: unknown) => "Unknown",
  [KnownType.Binary]: (_: unknown) => "Unknown",
  [KnownType.Topic]: (_: unknown) => "Unknown",
  [KnownType.Attribute]: (_: unknown) => "Unknown",
  [KnownType.AuthorizeWhenAttribute]: (_: unknown) => "Unknown",
  [KnownType.AuthorizeWhenHasAnyOfAttribute]: (_: unknown) => "Unknown",
} as const;
