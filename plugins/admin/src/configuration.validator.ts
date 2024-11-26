// Generated by ts-to-zod
import { z } from "zod"

export const generatorInputSchema = z.object({
    raw: z.string().optional(),
    base: z.string().optional(),
    file: z.string().optional(),
    include: z.union([z.string(), z.array(z.string())]).optional(),
    exclude: z.union([z.string(), z.array(z.string())]).optional(),
    project: z.union([z.string(), z.array(z.string())]).optional(),
    serverVersion: z.string().optional(),
})

export const adminGeneratorPluginConfigurationSchema = z.object({
    input: generatorInputSchema,
    nameTransform: z.function().args(z.string()).returns(z.string()).optional(),
})
