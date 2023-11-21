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

## Configuration options

Contracts generator config supports two options:

- `config` (root-level config) - options we would like to provide to all plugins for all output files. Root config
  requires `input` option to be specified
- `generates`**\*** - dictionary of files to generate where key is path to output file and value is file config. File
  configuration consists of `plugins` field and optional `config` field

  - `config` (output-level config) - same as config, but only applies for the specific file
  - `plugins`**\*** - list of plugins. Plugin is specified either by it's name or dictionary whose only key is plugin
    name and value is plugin-level config. Specified config is the same as root/output config, but only applies for the
    specific plugin

### `config` field

The `config` field is used to pass configuration to plugins. There are 3 levels at which `config` can be specified:

- Root level - options are passed to every plugin for each output file

```js
module.exports = {
  generates: {
    // ...
  },
  config: {
    input: {
      base: "../../../backend/src",
      project: ["Core/Project.Core.Contracts/Project.Core.Contracts.csproj"],
    },
  },
};
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
    input: {
      base: "../../../backend/src",
      project: ["Core/Project.Core.Contracts/Project.Core.Contracts.csproj"],
    },
  },
};
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
    input: {
      base: "../../../backend/src",
      project: ["Core/Project.Core.Contracts/Project.Core.Contracts.csproj"],
    },
  },
};
```

### Root config `input`

Root config requires `input` option to be provided which is configuration passed to
[Contracts Generator Server](https://github.com/leancodepl/contractsgenerator). All paths are relative to directory from
your current CWD. Unless you are using JavaScript files - in that case you can use `__dirname` and
`path.join`/`path.resolve` for paths relative to configuration file.

Input options are:

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
