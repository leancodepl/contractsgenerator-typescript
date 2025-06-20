import { z } from "zod/v4"
import { GeneratorSessionContext } from "@leancodepl/contractsgenerator-typescript-plugin"
import { cache } from "./cache"
import { generateFile } from "./generateFile"
import { getSchemaCached } from "./getSchemaCached"

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

    const sessionContext: GeneratorSessionContext = { getSchema: getSchemaCached(cache), metadata: {}, cache }

    const configl1 = config.config

    const outputs: Record<string, string> = {}

    for (const file in config.generates) {
        const configuration = config.generates[file]

        const configl2 = configuration.config ?? {}

        outputs[file] = await generateFile({ ...configl1, ...configl2 }, configuration.plugins, sessionContext)
    }

    return outputs
}
