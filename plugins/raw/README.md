# @leancodepl/contractsgenerator-typescript-plugin-raw

Plugin for prepending/appending text to a file generated by Contracts Generator.

## Config

- `prepend` - text to be added at the beginning of the file
- `output` - text to be added after content of the plugin specified before this
- `append` - text to be added at the end of the file

## Example

### Config

```js
const prepend1 = "Prepend 1\n";
const prepend2 = "Prepend 2\n";

const output1 = "Output 1\n";
const output2 = "\nOutput 2\n";

const append1 = "Append 1\n";
const append2 = "Append 2\n";

module.exports = {
  generates: {
    "output.ts": {
      plugins: [
        { raw: { prepend: prepend1, output: output1, append: append1 } },
        "admin",
        { raw: { prepend: prepend2, output: output2, append: append2 } },
      ],
    },
  },
  config: {
    input: {},
  },
};
```

### Output

```
Prepend 1
Prepend 2
Output 1
const schema = {
    "components": [],
    "enumsMaps": {}
} as const;

export default schema;
Output 2
Append 1
Append 2

```
