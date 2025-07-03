const { defineConfig } = require("eslint/config")
const baseConfig = require("../../eslint.base.config.cjs")

module.exports = defineConfig([...baseConfig, { ignores: ["**/protocol/"] }])
