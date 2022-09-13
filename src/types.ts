import { OverridableCustomTypeName } from "./generateContracts";
import { ClientMethodFilter, ImportReference } from "./typesGeneration/GeneratorContext";

export type GenerateFileConfiguration =
    | {
          eslintExclusions?: string[] | "disable";
          filename?: string;
      }
    | string;

export interface GeneratorInput {
    base?: string;
    file?: string;
    include?: string | string[];
    exclude?: string | string[];
    project?: string | string[];
}

export type GenerateClientFileConfiguration = {
    filename: string;
    cqrsClient: Omit<CommonTypesConfiguration, "name">;
    eslintExclusions?: string[] | "disable";
    include?: ClientMethodFilterConfiguration;
    exclude?: ClientMethodFilterConfiguration;
};

export type ClientMethodFilterConfiguration = string | string[] | ClientMethodFilter;

export type CommonTypesConfiguration = ImportReference;
export type CustomTypesConfiguration = Partial<Record<OverridableCustomTypeName, ImportReference>>;

export interface ContractsGeneratorConfiguration {
    input?: GeneratorInput;
    baseDir?: string;
    baseNamespace?: string;
    query?: CommonTypesConfiguration;
    command?: CommonTypesConfiguration;
    operation?: CommonTypesConfiguration;
    customTypes?: CustomTypesConfiguration;
    typesFile?: GenerateFileConfiguration;
    clientFile?: GenerateClientFileConfiguration | GenerateClientFileConfiguration[];
    overrideGeneratorServerVersion?: string;
    overrideGeneratorServerScript?: string;
    nameTransform?: (name: string) => string;
}
