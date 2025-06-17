export type ContractsGeneratorPluginConfiguration = {
    input: GeneratorInput;
    customTypes?: CustomTypesMap;
    nameTransform?: (name: string) => string;
};

export interface GeneratorInput {
    raw?: string;
    base?: string;
    file?: string;
    include?: string | string[];
    exclude?: string | string[];
    project?: string | string[];
    options?: string[];
}

export type CustomTypesMap = {
    String?: string;
    Guid?: string;
    Uri?: string;
    Boolean?: string;
    UInt8?: string;
    Int8?: string;
    Int16?: string;
    UInt16?: string;
    Int32?: string;
    UInt32?: string;
    Int64?: string;
    UInt64?: string;
    Float32?: string;
    Float64?: string;
    DateOnly?: string;
    TimeOnly?: string;
    DateTimeOffset?: string;
    TimeSpan?: string;
};
