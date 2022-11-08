#!/usr/bin/env node
import { lilconfigSync, OptionsSync as LilconfigOptionsSync } from 'lilconfig';
import { hideBin } from "yargs/helpers";
import yargs from "yargs/yargs";
import { contractsGeneratorConfigurationSchema } from "./schema";
import yaml from 'yaml';

type ContractsGeneratorPluginOptions = Record<string, unknown>

type ContractsGeneratorPluginConfiguration = string | Record<string, ContractsGeneratorPluginOptions>

type ContractsGeneratorFileConfiguration = {
    plugins: ContractsGeneratorPluginConfiguration[]
    config?: ContractsGeneratorPluginOptions
}

export type ContractsGeneratorConfiguration = {
    config?: ContractsGeneratorPluginOptions
    generates: Record<string, ContractsGeneratorFileConfiguration> 
}

function loadYaml(filepath: string, content: string) {
    return yaml.parse(content);
}

const options: LilconfigOptionsSync = {
    loaders: {
        '.yaml': loadYaml,
        '.yml': loadYaml,
    }
};

const argv = yargs(hideBin(process.argv))
    .option("config", {
        alias: "c",
        type: "string",
        description: "Config file location",
    })
    .parseSync();

const moduleName = "contractsgenerator-typescript";

const config = (argv.config
    ? lilconfigSync(moduleName, options).load(argv.config)
    : lilconfigSync(moduleName, options).search())?.config;

console.error(config)

console.log(contractsGeneratorConfigurationSchema.parse(config))
