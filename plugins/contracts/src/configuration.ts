import z from "zod/v4"

export type ContractsGeneratorPluginConfiguration = z.infer<typeof contractsGeneratorPluginConfigurationSchema>

export type GeneratorInput = z.infer<typeof generatorInputSchema>

export type CustomTypesMap = z.infer<typeof customTypesMapSchema>

export const generatorInputSchema = z.object({
    raw: z.string().optional(),
    base: z.string().optional(),
    file: z.string().optional(),
    include: z.union([z.string(), z.array(z.string())]).optional(),
    exclude: z.union([z.string(), z.array(z.string())]).optional(),
    project: z.union([z.string(), z.array(z.string())]).optional(),
    options: z.array(z.string()).optional(),
})

export const customTypesMapSchema = z.object({
    String: z.string().optional(),
    Guid: z.string().optional(),
    Uri: z.string().optional(),
    Boolean: z.string().optional(),
    UInt8: z.string().optional(),
    Int8: z.string().optional(),
    Int16: z.string().optional(),
    UInt16: z.string().optional(),
    Int32: z.string().optional(),
    UInt32: z.string().optional(),
    Int64: z.string().optional(),
    UInt64: z.string().optional(),
    Float32: z.string().optional(),
    Float64: z.string().optional(),
    DateOnly: z.string().optional(),
    TimeOnly: z.string().optional(),
    DateTimeOffset: z.string().optional(),
    TimeSpan: z.string().optional(),
})

export const contractsGeneratorPluginConfigurationSchema = z.object({
    input: generatorInputSchema,
    customTypes: customTypesMapSchema.optional(),
    nameTransform: z.custom<(name: string) => string>().optional(),
})
