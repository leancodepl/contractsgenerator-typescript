import {
    GeneratorFileContext,
    GeneratorPlugin,
    GeneratorSessionContext,
} from "@leancodepl/contractsgenerator-typescript-plugin";
import { ContractsGeneratorPluginConfiguration } from "./generate";

export async function generateFile(
    configl2: Record<string, unknown>,
    plugins: ContractsGeneratorPluginConfiguration[],
    sessionContext: GeneratorSessionContext,
) {
    const fileContext: GeneratorFileContext = {
        metadata: {},
    };

    let prepend = "";
    let fileOutput = "";
    let append = "";

    for (const pluginConfiguration of plugins) {
        let configl3, pluginName;

        if (typeof pluginConfiguration === "string") {
            pluginName = pluginConfiguration;
            configl3 = {};
        } else {
            pluginName = Object.keys(pluginConfiguration)[0];
            configl3 = pluginConfiguration[pluginName];
        }

        const plugin: GeneratorPlugin = await import(
            `@leancodepl/contractsgenerator-typescript-plugin-${pluginName}`
        ).then(plugin => plugin.default ?? plugin);

        const pluginInstance = plugin.instance(
            { ...configl2, ...configl3 },
            { session: sessionContext, file: fileContext, plugin: fileContext },
        );

        prepend += (await pluginInstance.beforeAll?.()) ?? "";
        fileOutput += (await pluginInstance.before?.()) ?? "";
        fileOutput += (await pluginInstance.generate?.()) ?? "";
        fileOutput += (await pluginInstance.after?.()) ?? "";
        append += (await pluginInstance.afterAll?.()) ?? "";
    }

    return prepend + fileOutput + append;
}
