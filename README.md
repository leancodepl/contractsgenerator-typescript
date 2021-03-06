# LeanCode Core Library TypeScript Contracts Generator

[![npm](https://img.shields.io/npm/v/@leancodepl/contractsgenerator-typescript)](https://www.npmjs.com/package/@leancodepl/contractsgenerator-typescript)
[![Actions Status](https://github.com/leancodepl/contractsgenerator-typescript/actions/workflows/ci.yml/badge.svg)](https://github.com/leancodepl/contractsgenerator-typescript/actions)

## Usage

Globally:

```sh
npm install -g @leancodepl/contractsgenerator-typescript

ts-generator
```

Locally:

```sh
npm install -D @leancodepl/contractsgenerator-typescript

# add to scripts in package.json
# { "generate": "ts-generator" }

npm run generate
```

Directly:

```sh
npx -p @leancodepl/contractsgenerator-typescript ts-generator
```

One thing to remember is that TypeScript Contracts Generator relies on
[Contracts Generator Server](https://github.com/leancodepl/contractsgenerator). Consequently Contracts Generator Server
needs `dotnet` as its runtime. That means in order for generator to work you need to have `dotnet` runtime installed.
Another thing which also needs to be noted - currently TypeScript Contracts Generator works in POSIX shells (due to
`generate.sh` script). This means **on Windows you need to be using Git Bash or alternative**.

### Configuration

Contracts generator is configured using [cosmiconfig](https://github.com/davidtheclark/cosmiconfig). Valid configuration
sources include:

-   `ts-generator` property in `package.json`,
-   `.ts-generatorrc` in JSON or YAML format,
-   `.ts-generator.json`, `.ts-generator.yaml`, `.ts-generator.yml` for raw JSON and YAML
-   `.ts-generatorrc.js`, `.ts-generatorrc.cjs`, `ts-generator.config.js`, `ts-generator.config.cjs` for configuration
    using JavaScript. Those files need to export the configuration object.

### Options

-   `input`**\*** - Configuration passed to
    [Contracts Generator Server](https://github.com/leancodepl/contractsgenerator). All paths are relative to directory
    from your current CWD. Unless you are using JavaScript files - in that case you can use `__dirname` and
    `path.join`/`path.resolve` for paths relative to configuration file.

    -   `base` - base path for your backend code source. If you provide that then all the other properties are relative
        to this directory.

    Then you can provide one of:

    -   `file`  
        or
    -   `include` and `exclude` - single globs or arrays of globs to match specific .cs files  
        or
    -   `project` - can be multiple

    For details on these options please refer to
    [Contracts Generator Server](https://github.com/leancodepl/contractsgenerator).

-   `baseDir` - base directory from which to resolve output, custom and common types configuration. Does not inpact
    `input` configuration for Contracts Generator Server.

-   `baseNamespace` - base/common namespace which should be stripped off of generated contracts file. For example if you
    have object names like `LeanCode.Project.Core.Contracts.Users.UpdateUser` you can set `baseNamespace` to
    `LeanCode.Project.Core.Contracts` so it isn't nested in generated contracts. This is applied **after**
    `nameTransform`.

-   `query` and `command` - by default generated `Query` and `Command` types are generated by contracts generator:

    ```ts
    type Query<TResult> = {};
    type Command = {};
    ```

    However you can alter this behaviour by providing your own types for those. `query` and `command` accepts either a
    string which will be a path (relative to CWD and/or `baseDir`) and then it will be treated as default import
    (`import Query from "[location]"`). You can also provide configuration object with properties:

    -   `location`**\*** - path to a file with declaration
    -   `exportName` - if not provided assumes file exports `Query` or `Command` (`import { Query } from "[location]"`),
        if provided then it's the name of exported type (`import { [exportName] as Query } from "[location]"`)

-   `customTypes` - dictionary of custom types configuration where keys are the name of Known Type and value is custom
    type definition. Valid custom types include: String, Guid, Uri, Boolean, UInt8, Int8, Int16, UInt16, Int32, UInt32,
    Int64, UInt64, Float, Double, Decimal, Date, Time, DateTime, DateTimeOffset, TimeSpan.

    Type definition includes properties:

    -   `name`**\*** - name of the custom type,
    -   `location`**\*** - path to a file containing custom type definition (relative to CWD and/or `baseDir`)
    -   `exportName` - optional export name when it's different than `name`.

-   `typesFile`**\*** - specifiec output types file. You can provide either string which is the location of the output
    file or object with properties:

    -   `eslintExclusions` - either string "disable" which entirely disables eslint for that file or list of rules which
        you want to disable in that specific file.
    -   `filename`**\*** - location of output file (relative to CWD and/or `baseDir`)

-   `clientFile` - configuration of client files (CQRS clients). This can be single object or array of objects with
    properties:

    -   `filename`**\*** and `eslintExclusion` which works the same way as in `typesFile`
    -   `cqrsClient`**\*** - implementation of specific `CQRS` client. Configuration is exactly the same as for `query`
        and `command` options. You can find ready to use clients implementations and examples in this repository.
    -   `include` and `exclude` - list of inclusions and/or exclusions based on object id (full name of the object
        **before** `nameTransform`). This can be configured as one of:
        -   single string, which the id of the object need to start with. e.g `LeanCode.Project.Core.Contracts.Users`.
        -   array of string, if the id of the object starts with any of the entries in the array then the object is
            matched,
        -   function in form of `(id: string, commandOrQuery: GeneratorQuery | GeneratorCommand) => boolean`. For each
            generated object you can apply your custom filtering logic for whether including or excluding this object in
            your client output. This option is only available when you're using JavaScript files as your configuration
            source.

-   `nameTransform` - function `(fullName: string) => string` which allows you to transform full name of the DTO (like
    `LeanCode.Core.Contracts.User.UserDetailsDTO`). This is especially useful when you want to map namespaces, for e.g.
    when you have conflicts, want to remove parts of the namespace (`LeanCode.Core.User.UserDetailsDTO` instead of
    `LeanCode.Core.`**`Contracts`**`.User.UserDetailsDTO`).

-   `overrideGeneratorServerVersion` - you can override Contract Generator Server version directly from the
    configuration file. This is escape hatch for when for example there's bug and/or new feature in the server (which
    preserves backwards compatibility in terms of protobuf contract) and the TypeScript Contracts Generator hasn't been
    updated yet.

-   `overrideGeneratorServerScript` - you can even override default `generate.sh` script for some custom scenarios. This
    is especially useful for testing when you want to mock implementation of backend or for example when you want to run
    directly on Windows environment without using `generate.sh` and directly use pre downloaded Contracts Generator
    Server binaries.

For specific TypeScript configuration object you can refer to [`src/types.ts`](./src/types.ts).

### Example

```js
/* eslint-env node */

/**
 * @type {import("@leancodepl/contractsgenerator-typescript").ContractsGeneratorConfiguration}
 */
module.exports = {
    typesFile: {
        eslintExclusions: ["@typescript-eslint/no-namespace", "@typescript-eslint/no-unused-vars"],
        filename: "out/LeanCode.ts",
    },
    clientFile: [
        {
            eslintExclusions: ["import/no-anonymous-default-export", "prettier/prettier"],
            filename: "out/LeanCodeClient.ts",
            cqrsClient: {
                location: "services/cqrsClient.ts",
                exportName: "rxCqrs",
            },
            exclude: [
                "LeanCode.ContractsGeneratorV2.ExampleContracts.Admin",
                "LeanCode.ContractsGeneratorV2.ExampleContracts.Manager",
            ],
        },
        {
            eslintExclusions: ["import/no-anonymous-default-export", "prettier/prettier"],
            filename: "out/LeanCodeAdminClient.ts",
            cqrsClient: {
                location: "services/cqrsClient.ts",
                exportName: "rxCqrs",
            },
            include: {
                "LeanCode.ContractsGeneratorV2.ExampleContracts.Admin",
            }
        },
    ],
    customTypes: {
        DateTime: {
            location: "../apiTime",
            name: "ApiDateTime",
        },
        DateTimeOffset: {
            location: "../apiTime",
            name: "ApiDateTime",
        },
    },
    baseNamespace: "LeanCode.ContractsGeneratorV2.ExampleContracts",
    baseDir: "./src",
    // LeanCode.Clients.Contracts.Users.EditUser -> LeanCode.Clients.Users.EditUser
    nameTransform: name => name.replace(/.Contracts/g, ""),
    input: {
        base: "../../../Project/backend",
        project: [
            "src/Core/Project.Core.Contracts/Project.Core.Contracts.csproj",
            "src/Clients/Project.Clients.Contracts/Project.Clients.Contracts.csproj",
            "src/Plans/Project.Plans.Contracts/Project.Plans.Contracts.csproj",
        ],
    },
};
```

## Development

### Server integration

Contracts Generator Server is being distributed as dotnet .zip bundle. For fetching that bundle in specific version
we're using [this script](https://raw.githubusercontent.com/leancodepl/contractsgenerator/main/server/generate.sh). The
script is being fetched during build. For details you can refer to [`rollup.config.js`](./rollup.config.js).

Params for Contracts Generator Server are parsed from configuration file and provided to `generate.sh`. Server pipes its
output directly to stdout and TypeScript Generator captures that output. See `command` in [`index.ts`](./index.ts) for
details. This is also the place when exact version of the server is specified (but the `generate.sh` abstracts away
providing correct version).

### Protobuf

Server and clients communicate using protobuf. Specific `.proto` contract file is being copied from the server
repository to [`src/protocol/contracts.proto`](./src/protocol/contracts.proto). This is important to note that when
contracts file is updated on the backend side then updating process is entirely manual. After you copy new
`contracts.proto` file the [`src/procotol/index.js`](./src/protocol/index.js) and
[`src/protocol/index.d.ts`](./src/protocol/index.d.ts) need to be updated. Those files are automatically generated by
running `npm run proto`. For details on how this works please refer to `scripts` section in
[`package.json`](./package.json).
