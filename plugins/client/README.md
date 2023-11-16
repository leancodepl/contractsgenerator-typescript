# @leancodepl/contractsgenerator-typescript-plugin-client

Plugin for generating api factory for generated contracts. The only parameter of the generated api factory is
[CQRS Client](https://github.com/leancodepl/js_corelibrary/tree/main/packages/cqrs-clients). This factory is exported
with `export default` so this plugin should not be used together with other plugins with default exported components.

## Config

- `input` - same as `input` in the [project README](../../README.md#common-options)
- `customTypes` - same as `customTypes` in the [project README](../../README.md#common-options)
- `nameTransform` - same as `nameTransform` in the [project README](../../README.md#common-options)

## Example usage

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
