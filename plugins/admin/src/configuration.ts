export type AdminGeneratorPluginConfiguration = {
  input: GeneratorInput;
  nameTransform?: (name: string) => string;
};

export interface GeneratorInput {
  raw?: string;
  base?: string;
  file?: string;
  include?: string | string[];
  exclude?: string | string[];
  project?: string | string[];
}
