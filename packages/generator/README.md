# @leancodepl/contractsgenerator - LeanCode TypeScript Contracts Generator

TypeScript Contracts Generator is an utility for generating contracts/clients/schema based on backend contracts and
config file.

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
  - `plugins`**\*** - list of plugins. Plugin is specified either by it's name or dictionary with field whose key is
    plugin name and value is config. Config specified for this plugin gets merged with global and file-level configs.
  - `config` - common config that will be used for all plugins specified for this files. It will be merged with global
    config
- `config` - global config for all generated files. The only required field is `input` which should contain config that
  covers all projects/files included in every plugin.

  - `input` - configuration passed to [Contracts Generator Server](https://github.com/leancodepl/contractsgenerator).
    All paths are relative to directory from your current CWD. Unless you are using JavaScript files - in that case you
    can use `__dirname` and `path.join`/`path.resolve` for paths relative to configuration file.

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
