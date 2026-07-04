import nx from "@nx/eslint-plugin"
import { base, imports } from "@leancodepl/eslint-config"

const config = [
  ...nx.configs["flat/base"],
  ...nx.configs["flat/typescript"],
  ...nx.configs["flat/javascript"],
  ...base,
  ...imports,
  { ignores: ["**/dist", "**/*.timestamp*"] },
  {
    files: ["*.ts", "*.tsx", "*.js", "*.jsx", "*.mjs", "*.cjs", "*.mts", "*.cts"],
    rules: {
      "@nx/enforce-module-boundaries": [
        "error",
        {
          enforceBuildableLibDependency: true,
          allow: ["./eslint.config.mjs"],
          depConstraints: [{ sourceTag: "*", onlyDependOnLibsWithTags: ["*"] }],
        },
      ],
      "@nx/dependency-checks": "error",
    },
  },
]

export default config
