# LeanCode TypeScript Contracts Generator

## Available plugins

- [contracts](plugins/contracts/) - type generation
- [client](plugins/client/) - api factory generation; requires `contracts` to also be used
- [raw](plugins/raw) - prepend/append text to generated file;
- [admin](plugins/admin) - api components schema generation; used by [Admin App Generator](packages/api-admin/)

## Usage

```sh
# you also have to install all plugins used by your config e.g.
# @leancodepl/contractsgenerator-typescript-plugin-contracts @leancodepl/contractsgenerator-typescript-plugin-client @leancodepl/contractsgenerator-typescript-plugin-raw
npm i -D @leancodepl/contractsgenerator-typescript

npx @leancodepl/contractsgenerator-typescript
```

One thing to remember is that TypeScript Contracts Generator relies on
[Contracts Generator Server](https://github.com/leancodepl/contractsgenerator). Consequently Contracts Generator Server
needs `dotnet` as its runtime. That means in order for generator to work you need to have `dotnet` runtime installed.
Another thing which also needs to be noted - currently TypeScript Contracts Generator works in POSIX shells (due to
`generate.sh` script). This means **on Windows you need to be using Git Bash or alternative**.

### Configuration

Contracts generator is configured using [lilconfig](https://github.com/antonk52/lilconfig). Valid configuration sources
include:

- `contractsgenerator-typescript` property in `package.json`,
- `.contractsgenerator-typescriptrc.json` for raw JSON
- `contractsgenerator-typescript.config.js`, `contractsgenerator-typescript.config.cjs`,
  `.contractsgenerator-typescriptrc.js`, `.contractsgenerator-typescriptrc.cjs` for configuration using JavaScript.
  Those files need to export the configuration object.
- path to JavaScript/JSON/YAML config file passed via `--config/-c` parameter

### Config structure

- `generates`**\*** - dictionary of files to generate where key is path to generated file and value is file
  configuration. File configuration consists of `plugins` field and optional `config` field
  - `plugins`**\*** - list of plugins that will be used to generate this file. Plugin is specified either by it's name
    or dictionary with single field whose key is plugin name and value is it's config which replaces other already
    specified configs.
  - `config` - common config that will be used for all plugins specified for this files instead of global config
- `config` - global config for all generated files. The only required field is `input` which should contain config that
  covers all projects/files included in every plugin.

### Common options

- `input` (all plugins and generator) - configuration passed to
  [Contracts Generator Server](https://github.com/leancodepl/contractsgenerator). All paths are relative to directory
  from your current CWD. Unless you are using JavaScript files - in that case you can use `__dirname` and
  `path.join`/`path.resolve` for paths relative to configuration file.

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

- `customTypes` (used in `contracts`, `client`)- dictionary of custom types configuration where keys are the name of
  Known Type and value is custom type name. Valid custom types include: String, Guid, Uri, Boolean, UInt8, Int8, Int16,
  UInt16, Int32, UInt32, Int64, UInt64, Float32, Float64, DateOnly, TimeOnly, DateTimeOffset, TimeSpan.

- `nameTransform` (used in `contracts`, `client`) - function `(fullName: string) => string` which allows you to
  transform full name of the DTO (like `LeanCode.Core.Contracts.User.UserDetailsDTO`). This is especially useful when
  you want to map namespaces, for e.g. when you have conflicts, want to remove parts of the namespace
  (`LeanCode.Core.User.UserDetailsDTO` instead of `LeanCode.Core.`**`Contracts`**`.User.UserDetailsDTO`).

### Example config

```js
const preamble = `
/*eslint-disable import/no-anonymous-default-export, @typescript-eslint/no-unused-vars, @typescript-eslint/ban-types, @typescript-eslint/no-empty-interface, @typescript-eslint/no-namespace*/
import type { ApiDateTimeOffset } from "@leancodepl/api-date-dayjs"
import type { ReactQueryCqrs as CQRS } from ".";

export type Query<TResult> = {}
export type Command = {}
export type Operation<TResult> = {}
`.trimStart();

module.exports = {
  generates: {
    "src/api/api-components-schema.ts": {
      plugins: ["admin"],
    },
    "src/api/cqrs.ts": {
      plugins: [{ raw: { prepend: preamble } }, "contracts", "client"],
    },
  },
  config: {
    customTypes: {
      DateOnly: "ApiDateOnly",
      TimeOnly: "ApiTimeOnly",
      DateTimeOffset: "ApiDateTimeOffset",
    },
    input: {
      base: "../../../backend/src",
      project: [
        "Core/Project.Core.Contracts/Project.Core.Contracts.csproj",
        "Clients/Project.Clients.Contracts/Project.Clients.Contracts.csproj",
      ],
    },
    nameTransform: nameWithNamespace => nameWithNamespace.split(".").at(-1),
  },
};
```

## Development

### Local publish

To test your changes to the codebase you can publish all packages to local registry
([Verdaccio](https://verdaccio.org/)) and then pull those packages to your project. To start local registry run

```
npx nx run local-registry
```

this will override your default registry in npm config. To publish all packages to local registry run

```
npx nx run local-publish --ver={VERSION_IN_#.#.#_OR_#.#.#-PREFIX.#} --tag={TAG}
```

### Protobuf

Server and clients communicate using protobuf. Specific `.proto` contract file is being copied from the server
repository to [`libs/schema/src/lib/protocol/contracts.proto`](libs/schema/src/lib/protocol/contracts.proto). This is
important to note that when contracts file is updated on the backend side then updating process is entirely manual.
After you copy new `contracts.proto` file the
[`libs/schema/src/lib/protocol/index.js`](libs/schema/src/lib/protocol/index.js) and
[`libs/schema/src/lib/protocol/index.d.ts`](libs/schema/src/lib/protocol/index.d.ts) need to be updated. Those files are
automatically generated by running `npx nx run schema:proto`.
