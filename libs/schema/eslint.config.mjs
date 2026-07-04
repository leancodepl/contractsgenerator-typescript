import baseConfig from "../../eslint.config.mjs"

const config = [...baseConfig, { ignores: ["**/protocol/"] }]

export default config
