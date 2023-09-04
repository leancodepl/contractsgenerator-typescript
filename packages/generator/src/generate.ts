import { GeneratorSessionContext } from "@leancodepl/contractsgenerator-typescript-plugin";
import { cache } from "./cache";
import { generateFile } from "./generateFile";
import { getSchemaCached } from "./getSchemaCached";
import { contractsGeneratorConfigurationSchema } from "./schema";

type ContractsGeneratorPluginOptions = Record<string, unknown>;

export type ContractsGeneratorPluginConfiguration = string | Record<string, ContractsGeneratorPluginOptions>;

type ContractsGeneratorFileConfiguration = {
  plugins: ContractsGeneratorPluginConfiguration[];
  config?: ContractsGeneratorPluginOptions;
};

export type ContractsGeneratorConfiguration = {
  config?: ContractsGeneratorPluginOptions;
  generates: Record<string, ContractsGeneratorFileConfiguration>;
};

export async function generate(unsafeConfig: unknown) {
  const config = contractsGeneratorConfigurationSchema.parse(unsafeConfig);

  const sessionContext: GeneratorSessionContext = {
    getSchema: getSchemaCached(cache),
    metadata: {},
    cache,
  };

  const configl1 = config.config;

  const outputs: Record<string, string> = {};

  for (const file in config.generates) {
    const configuration = config.generates[file];

    const configl2 = configuration.config ?? {};

    outputs[file] = await generateFile({ ...configl1, ...configl2 }, configuration.plugins, sessionContext);
  }

  return outputs;
}
