import { z } from "zod/v4"
import { GeneratorSessionContext } from "@leancodepl/contractsgenerator-typescript-plugin"
import { generateFile } from "./generateFile"
import { getSchemaCached } from "./getSchemaCached"
import { logger } from "./logger"

export type ContractsGeneratorPluginConfiguration = z.infer<typeof contractsGeneratorPluginConfigurationSchema>

const contractsGeneratorPluginOptionsSchema = z.record(z.string(), z.unknown())

const contractsGeneratorPluginConfigurationSchema = z.union([
  z.record(z.string(), contractsGeneratorPluginOptionsSchema),
  z.string(),
])

const contractsGeneratorFileConfigurationSchema = z.object({
  plugins: z.array(contractsGeneratorPluginConfigurationSchema),
  config: contractsGeneratorPluginOptionsSchema.optional(),
})

const contractsGeneratorConfigurationSchema = z.object({
  config: contractsGeneratorPluginOptionsSchema.optional(),
  generates: z.record(z.string(), contractsGeneratorFileConfigurationSchema),
})

export async function generate(unsafeConfig: unknown) {
  const config = contractsGeneratorConfigurationSchema.parse(unsafeConfig)

  const fileCount = Object.keys(config.generates).length
  logger.info("Generating", fileCount, "file(s):", Object.keys(config.generates).join(", "))

  const sessionContext: GeneratorSessionContext = { getSchema: getSchemaCached(), metadata: {} }

  const configl1 = config.config

  const outputs: Record<string, string> = {}

  await Promise.all(
    Object.entries(config.generates).map(async ([file, configuration]) => {
      const configl2 = configuration.config ?? {}

      outputs[file] = await generateFile({ ...configl1, ...configl2 }, configuration.plugins, sessionContext)
    }),
  )

  return outputs
}
