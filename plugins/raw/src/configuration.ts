import z from "zod/v4"

export type RawGeneratorPluginConfiguration = z.infer<typeof rawGeneratorPluginConfigurationSchema>

export const rawGeneratorPluginConfigurationSchema = z.object({
    prepend: z.string().optional(),
    output: z.string().optional(),
    append: z.string().optional(),
})
