# @leancodepl/contractsgenerator-typescript-plugin-admin

Plugin for generating api components schema from `AdminQuery` queries. This schema object is exported with
`export default` so this plugin should not be used together with other plugins with default exported components.

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
