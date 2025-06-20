const { defineConfig } = require("eslint/config")
const baseConfig = require("../../eslint.base.config.cjs")

module.export = defineConfig([...baseConfig, { ignores: ["**/protocol/"] }])
