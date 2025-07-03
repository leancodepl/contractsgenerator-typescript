// eslint-disable-next-line import/no-extraneous-dependencies
const nx = require("@nx/eslint-plugin")
const baseConfig = require("../../eslint.base.config.cjs")

module.exports = [...baseConfig, ...nx.configs["flat/react"]]
