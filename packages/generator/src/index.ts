#!/usr/bin/env node
import {
    GeneratorFileContext,
    GeneratorInput,
    GeneratorPlugin,
    GeneratorSessionContext,
} from "@leancodepl/contractsgenerator-typescript-plugin";
import { GeneratorSchema, parseSchema } from "@leancodepl/contractsgenerator-typescript-schema";
import { lilconfigSync, OptionsSync as LilconfigOptionsSync } from "lilconfig";
import { exec } from "node:child_process";
import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import yaml from "yaml";
import { hideBin } from "yargs/helpers";
import yargs from "yargs/yargs";
import { contractsGeneratorConfigurationSchema } from "./schema";

type ContractsGeneratorPluginOptions = Record<string, unknown>;

type ContractsGeneratorPluginConfiguration = string | Record<string, ContractsGeneratorPluginOptions>;

type ContractsGeneratorFileConfiguration = {
    plugins: ContractsGeneratorPluginConfiguration[];
    config?: ContractsGeneratorPluginOptions;
};

export type ContractsGeneratorConfiguration = {
    config?: ContractsGeneratorPluginOptions;
    generates: Record<string, ContractsGeneratorFileConfiguration>;
};

function loadYaml(filepath: string, content: string) {
    return yaml.parse(content);
}

const options: LilconfigOptionsSync = {
    loaders: {
        ".yaml": loadYaml,
        ".yml": loadYaml,
    },
};

const argv = yargs(hideBin(process.argv))
    .option("config", {
        alias: "c",
        type: "string",
        description: "Config file location",
    })
    .parseSync();

const moduleName = "contractsgenerator-typescript";

const unsafeConfig = (
    argv.config ? lilconfigSync(moduleName, options).load(argv.config) : lilconfigSync(moduleName, options).search()
)?.config;

const config = contractsGeneratorConfigurationSchema.parse(unsafeConfig);

(async () => {
    const sessionContext: GeneratorSessionContext = {
        async getSchema() {
            const schema = readFileSync("/home/sebastian/dev/contractsgenerator-typescript2/kontomierz.bin");

            return parseSchema(schema);
        },
        metadata: {},
    };

    for (const file in config.generates) {
        const fileContext: GeneratorFileContext = {
            metadata: {},
        };

        const configl1 = config.config ?? {};

        const configuration = config.generates[file];

        const configl2 = configuration.config ?? {};

        let fileOutput = "";

        for (const pluginConfiguration of configuration.plugins) {
            let configl3, pluginName;

            if (typeof pluginConfiguration === "string") {
                pluginName = pluginConfiguration;
                configl3 = {};
            } else {
                pluginName = Object.keys(pluginConfiguration)[0];
                configl3 = pluginConfiguration[pluginName];
            }

            const plugin: GeneratorPlugin = await import(pluginName).then(plugin => plugin.default ?? plugin);

            const pluginInstance = plugin.instance(
                { ...configl1, ...configl2, ...configl3 },
                { session: sessionContext, file: fileContext, plugin: fileContext },
            );

            fileOutput += await pluginInstance.generate();
        }

        console.log(fileOutput);
    }
})();

const serverContractsGeneratorVersion = "2.0.0-alpha.2";

function getSchema(input: GeneratorInput) {
    let params = "";

    function withBase(path: string) {
        return input?.base ? join(input.base, path) : path;
    }

    if (input?.project) {
        let projects;
        if (Array.isArray(input.project)) {
            projects = input.project.map(p => withBase(p));
        } else {
            projects = [withBase(input.project)];
        }

        params = `project --project ${projects.map(p => `"${p}"`).join(" ")}`;
    } else if (input?.file) {
        params = `file --input="${withBase(input.file)}"`;
    } else if (input) {
        params = `path`;

        if (input.base) {
            params += ` --directory="${input.base}"`;
        }

        const include = input.include ? (Array.isArray(input.include) ? input.include : [input.include]) : ["**/*.cs"];

        params += ` --include ${include.map(i => `"${i}"`).join(" ")}`;

        if (input.exclude) {
            params += ` --exclude ${(Array.isArray(input.exclude) ? input.exclude : [input.exclude])
                .map(e => `"${e}"`)
                .join(" ")}`;
        }
    }

    params += ` --output=-`;

    const serverVersion = `SERVER_VERSION=${serverContractsGeneratorVersion}`;
    const script = resolve(__dirname, "generate.sh");

    return new Promise<GeneratorSchema>((resolve, reject) => {
        exec(
            `${serverVersion} "${script}" ${params}`,
            {
                encoding: "buffer",
            },
            (error, stdout) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(parseSchema(stdout));
            },
        );
    });
}
