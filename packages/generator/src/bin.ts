#!/usr/bin/env node
import { OptionsSync as LilconfigOptionsSync, lilconfigSync } from "lilconfig"
import yaml from "yaml"
import { hideBin } from "yargs/helpers"
import yargs from "yargs/yargs"
import { generate } from "./generate"
import { logger } from "./logger"
import { saveOutputs } from "./saveOutputs"

function loadYaml(filepath: string, content: string) {
  return yaml.parse(content)
}

const options: LilconfigOptionsSync = {
  loaders: {
    ".yaml": loadYaml,
    ".yml": loadYaml,
  },
}

const argv = yargs(hideBin(process.argv))
  .option("config", {
    alias: "c",
    type: "string",
    description: "Config file location",
  })
  .parseSync()

const moduleName = "contractsgenerator-typescript"

const config = (
  argv.config ? lilconfigSync(moduleName, options).load(argv.config) : lilconfigSync(moduleName, options).search()
)?.config

if (!config) {
  logger.error("No config found")
  process.exit(1)
}

logger.info("Starting code generation")
generate(config)
  .then(async outputs => {
    await saveOutputs(outputs)
    logger.success("Generated", Object.keys(outputs).length, "file(s)")
  })
  .catch(err => {
    logger.error("Generation failed:", err)
    process.exit(1)
  })
