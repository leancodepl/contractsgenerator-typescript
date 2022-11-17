/* eslint-disable @typescript-eslint/no-explicit-any */
import { GeneratorSchema } from "@leancodepl/contractsgenerator-typescript-schema";
import { GeneratorPluginInstance } from "./generatorPluginInstance";

export interface GeneratorInput {
    raw?: string;
    base?: string;
    file?: string;
    include?: string | string[];
    exclude?: string | string[];
    project?: string | string[];
}

export type GeneratorSessionContext = {
    getSchema(input: GeneratorInput): Promise<GeneratorSchema>;
    metadata: any;
};

export type GeneratorFileContext = {
    metadata: any;
};

export type GeneratorPluginContext = {
    metadata: any;
};

export type GeneratorContext = {
    session: GeneratorSessionContext;
    file: GeneratorFileContext;
    plugin: GeneratorPluginContext;
};

export interface GeneratorPlugin {
    instance: (configuration: unknown, context: GeneratorContext) => GeneratorPluginInstance;
}
