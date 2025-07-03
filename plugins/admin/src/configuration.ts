import z from "zod/v4"

export type AdminGeneratorPluginConfiguration = z.infer<typeof adminGeneratorPluginConfigurationSchema>

export type GeneratorInput = z.infer<typeof generatorInputSchema>

export const generatorInputSchema = z.object({
    raw: z.string().optional(),
    base: z.string().optional(),
    file: z.string().optional(),
    include: z.union([z.string(), z.array(z.string())]).optional(),
    exclude: z.union([z.string(), z.array(z.string())]).optional(),
    project: z.union([z.string(), z.array(z.string())]).optional(),
    options: z.array(z.string()).optional(),
})

export const adminGeneratorPluginConfigurationSchema = z.object({
    input: generatorInputSchema,
    nameTransform: z.custom<(name: string) => string>().optional(),
})
