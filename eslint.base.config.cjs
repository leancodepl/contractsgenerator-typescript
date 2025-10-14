const nx = require("@nx/eslint-plugin")
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended")
const leancode = require("@leancodepl/eslint-config")
const { resolveFlatConfig } = require("@leancodepl/resolve-eslint-flat-config")

delete leancode.imports[0].rules["react/jsx-uses-react"]
delete leancode.imports[0].rules["react/jsx-uses-vars"]

module.exports = resolveFlatConfig([
  eslintPluginPrettierRecommended,
  ...nx.configs["flat/base"],
  ...nx.configs["flat/typescript"],
  ...nx.configs["flat/javascript"],
  { ignores: ["**/dist"] },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      "@nx/enforce-module-boundaries": [
        "error",
        {
          enforceBuildableLibDependency: true,
          allow: ["^.*/eslint(\\.base)?\\.config\\.[cm]?js$"],
          depConstraints: [{ sourceTag: "*", onlyDependOnLibsWithTags: ["*"] }],
        },
      ],
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    // Override or add rules here
    rules: {},
  },
  ...leancode.base,
  ...leancode.imports,
])
