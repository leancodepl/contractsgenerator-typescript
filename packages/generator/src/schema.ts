// Generated by ts-to-zod
import { z } from "zod";

const contractsGeneratorPluginOptionsSchema = z.record(z.unknown());

export const contractsGeneratorPluginConfigurationSchema = z.union([
    z.string(),
    z.record(contractsGeneratorPluginOptionsSchema),
]);

const contractsGeneratorFileConfigurationSchema = z.object({
    plugins: z.array(contractsGeneratorPluginConfigurationSchema),
    config: contractsGeneratorPluginOptionsSchema.optional(),
});

export const contractsGeneratorConfigurationSchema = z.object({
    config: contractsGeneratorPluginOptionsSchema.optional(),
    generates: z.record(contractsGeneratorFileConfigurationSchema),
});
