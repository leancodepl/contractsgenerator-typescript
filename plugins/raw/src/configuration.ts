import z from "zod"

export type RawGeneratorPluginConfiguration = z.infer<typeof rawGeneratorPluginConfigurationSchema>

export const rawGeneratorPluginConfigurationSchema = z.object({
  prepend: z.string().optional(),
  output: z.string().optional(),
  append: z.string().optional(),
})
