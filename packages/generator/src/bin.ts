#!/usr/bin/env node
import { OptionsSync as LilconfigOptionsSync, lilconfigSync } from "lilconfig"
import yaml from "yaml"
import { hideBin } from "yargs/helpers"
import yargs from "yargs/yargs"
import { generate } from "./generate"
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

generate(config).then(saveOutputs)
