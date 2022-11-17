export type ContractsGeneratorPluginConfiguration = {
    input: GeneratorInput;
};

export interface GeneratorInput {
    raw?: string;
    base?: string;
    file?: string;
    include?: string | string[];
    exclude?: string | string[];
    project?: string | string[];
}
