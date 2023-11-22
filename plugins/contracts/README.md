# @leancodepl/contractsgenerator-typescript-plugin-contracts

Plugin for generating TypeScript types of contracts.

## Config

- `input` - configuration passed to [Contracts Generator Server](https://github.com/leancodepl/contractsgenerator). All
  paths are relative to directory from your current CWD. Unless you are using JavaScript files - in that case you can
  use `__dirname` and `path.join`/`path.resolve` for paths relative to configuration file.

  - `base` - base path for your backend code source. If you provide that then all the other properties are relative to
    this directory.

  Then you can provide one of:

  - `file`  
    or
  - `include` and `exclude` - single globs or arrays of globs to match specific .cs files  
    or
  - `project` - can be multiple

  For details on these options please refer to
  [Contracts Generator Server](https://github.com/leancodepl/contractsgenerator).

- `customTypes` - dictionary of custom types configuration where keys are the name of Known Type and value is custom
  type name. Valid custom types include: String, Guid, Uri, Boolean, UInt8, Int8, Int16, UInt16, Int32, UInt32, Int64,
  UInt64, Float32, Float64, DateOnly, TimeOnly, DateTimeOffset, TimeSpan.

- `nameTransform` - function `(fullName: string) => string` which allows you to transform full name of the DTO (like
  `LeanCode.Core.Contracts.User.UserDetailsDTO`). This is especially useful when you want to map namespaces, for e.g.
  when you have conflicts, want to remove parts of the namespace (`LeanCode.Core.User.UserDetailsDTO` instead of
  `LeanCode.Core.`**`Contracts`**`.User.UserDetailsDTO`).

## Example

### Config

```js
module.exports = {
  generates: {
    "output.ts": {
      plugins: ["contracts"],
    },
  },
  config: {
    input: {
      base: "../../../backend/src",
      project: ["Core/Project.Core.Contracts/Project.Core.Contracts.csproj"],
      nameTransform: nameWithNamespace => nameWithNamespace.split(".").at(-1),
    },
  },
};
```

### Output

```js
/**
 * @attribute LeanCode.Contracts.Security.AuthorizeWhenHasAnyOfAttribute
 */
export interface Clients {
}
export namespace Clients {
    export const AdminApp = "admin_app";
    export const ClientApp = "client_app";
}
export interface KnownClaims {
}
export namespace KnownClaims {
    export const UserId = "sub";
    export const Role = "role";
}
export interface Roles {
}
export namespace Roles {
    export const User = "user";
    export const Admin = "admin";
}
export interface AddLeagueManager extends Command {
    TenantId: string;
    TenantName?: string | null;
    TenantLogoUri?: string | null;
    UserName: string;
    Password: string;
}
export namespace AddLeagueManager {
    export const ErrorCodes = {
        TenantNotFoundOrAlreadyExists: 1,
        TenantNameTooLong: 2,
        TenantLogoUriTooLong: 3,
        InvalidUserName: 4,
        InvalidPassword: 5,
        UserAlreadyExists: 6
    } as const;
    export type ErrorCodes = typeof ErrorCodes;
}
```
