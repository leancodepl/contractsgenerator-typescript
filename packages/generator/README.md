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

## Configuration file

Contracts generator is configured using [lilconfig](https://github.com/antonk52/lilconfig). Valid configuration sources
include:

- `contractsgenerator-typescript` property in `package.json`,
- `.contractsgenerator-typescriptrc.json` for raw JSON
- `contractsgenerator-typescript.config.js`, `contractsgenerator-typescript.config.cjs`,
  `.contractsgenerator-typescriptrc.js`, `.contractsgenerator-typescriptrc.cjs` for configuration using JavaScript.
  Those files need to export the configuration object.
- path to JavaScript/JSON/YAML config file passed via `--config/-c` parameter

## Example config

```js
const preamble = `
/*eslint-disable import/no-anonymous-default-export, @typescript-eslint/no-unused-vars, @typescript-eslint/ban-types, @typescript-eslint/no-empty-interface, @typescript-eslint/no-namespace*/
import type { ApiDateTimeOffset } from "@leancodepl/api-date-dayjs"
import type { ReactQueryCqrs as CQRS } from ".";

export type Query<TResult> = {}
export type Command = {}
export type Operation<TResult> = {}
export type Topic = {}

`.trimStart()

module.exports = {
    generates: {
        "src/api/cqrs.ts": { plugins: [{ raw: { prepend: preamble } }, "contracts", "client"] },
    },
    config: {
        customTypes: { DateOnly: "ApiDateOnly", TimeOnly: "ApiTimeOnly", DateTimeOffset: "ApiDateTimeOffset" },
        input: {
            base: "../../../backend/src",
            project: [
                "Core/Project.Core.Contracts/Project.Core.Contracts.csproj",
                "Clients/Project.Clients.Contracts/Project.Clients.Contracts.csproj",
            ],
        },
        nameTransform: nameWithNamespace => nameWithNamespace.split(".").at(-1),
    },
}
```

## Configuration options

Contracts generator config supports two options:

- `config` (root-level config) - options we would like to provide to all plugins for all output files
- `generates`**\*** - dictionary of files to generate where key is path to output file and value is file config. File
  configuration consists of `plugins` field and optional `config` field

    - `config` (output-level config) - same as config, but only applies for the specific file
    - `plugins`**\*** - list of plugins. Plugin is specified either by it's name or dictionary whose only key is plugin
      name and value is plugin-level config. Specified config is the same as root/output config, but only applies for
      the specific plugin

### `config` field

The `config` field is used to pass configuration to plugins. There are 3 levels at which `config` can be specified:

- Root level - options are passed to every plugin for each output file

```js
module.exports = {
    generates: {
        // ...
    },
    config: {
        input: { base: "../../../backend/src", project: ["Core/Project.Core.Contracts/Project.Core.Contracts.csproj"] },
    },
}
```

- Output level - options are passed to every plugin for the specified output file. Each field in output level config
  overrides root-level config for that field

```js
module.exports = {
    generates: {
        "src/api/cqrs.ts": {
            plugins: [
                /* ... */
            ],
            config: {
                input: {
                    base: "../../../backend/src",
                    project: ["Extended/Project.Extended.Contracts/Project.Extended.Contracts.csproj"],
                },
            },
        },
    },
    config: {
        // overridden by output-level-config
        input: { base: "../../../backend/src", project: ["Core/Project.Core.Contracts/Project.Core.Contracts.csproj"] },
    },
}
```

- Plugin level - options are passed to specified plugin. Each field in plugin level config overrides root-level and
  output-level config for that field

```js
module.exports = {
    generates: {
        "src/api/cqrs.ts": {
            plugins: [
                {
                    contracts: {
                        input: "../../../backend/src",
                        project: ["Extended/Project.Extended.Contracts/Project.Extended.Contracts.csproj"],
                    },
                },
            ],
            config: {
                // overridden by plugin-level config
                input: {
                    base: "../../../backend/src",
                    project: ["Extended/Project.Extended.Contracts/Project.Extended.Contracts.csproj"],
                },
            },
        },
    },
    config: {
        // overridden by output-level and then plugin-level config
        input: { base: "../../../backend/src", project: ["Core/Project.Core.Contracts/Project.Core.Contracts.csproj"] },
    },
}
```
