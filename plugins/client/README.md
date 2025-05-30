# @leancodepl/contractsgenerator-typescript-plugin-client

Plugin for generating api factory for generated contracts. The only parameter of the generated api factory is
[CQRS Client](https://github.com/leancodepl/js_corelibrary/tree/main/packages/cqrs-clients). This factory is exported
with `export default` so this plugin should not be used together with other plugins with default exported components.
This plugin must be used together with the
[contracts](https://github.com/leancodepl/contractsgenerator-typescript/tree/main/plugins/contracts) plugin.

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

- `customTypes`- dictionary of custom types configuration where keys are the name of Known Type and value is custom type
  name. Valid custom types include: String, Guid, Uri, Boolean, UInt8, Int8, Int16, UInt16, Int32, UInt32, Int64,
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
      plugins: ["client"],
    },
  },
  config: {
    input: {
      base: "../../../backend/src",
      project: ["Core/Project.Core.Contracts/Project.Core.Contracts.csproj"],
    },
  },
};
```

### Output

```js
export default function (cqrsClient: CQRS) {
    return {
        DeleteOwnAccount: cqrsClient.createCommand<Project.Core.Contracts.Users.DeleteOwnAccount, {}>("Project.Core.Contracts.Users.DeleteOwnAccount", {}),
        VersionSupport: cqrsClient.createQuery<LeanCode.ForceUpdate.Contracts.VersionSupport, LeanCode.ForceUpdate.Contracts.VersionSupportDTO>("LeanCode.ForceUpdate.Contracts.VersionSupport")
    };
}
```

### Example usage

```js
import { createApiComponents } from "@leancodepl/admin";
import { TokenProvider } from "@leancodepl/cqrs-client-base";
import { mkCqrsClient } from "@leancodepl/react-query-cqrs-client";
import { QueryClient } from "@tanstack/react-query";
import cqrs from "./cqrs";
import { loginManager } from "../services/loginManager";

export const tokenProvider: TokenProvider = {
  getToken: () => loginManager.getToken().then(t => (t ? `Bearer ${t}` : undefined)),
  invalidateToken: () => loginManager.tryRefreshToken().then(r => r ?? false),
};

export type ReactQueryCqrs = ReturnType<typeof mkCqrsClient>;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
  },
});

const cqrsClientConfig = {
  cqrsEndpoint: "api.local.lncd.pl",
  queryClient,
  tokenProvider,
};

const rawApi = cqrs(mkCqrsClient(cqrsClientConfig));
```
