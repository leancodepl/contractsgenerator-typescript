import {
    GeneratorPlugin,
    GeneratorPluginInstance,
    GeneratorSessionContext,
} from "@leancodepl/contractsgenerator-typescript-plugin"
import { generateAdmin } from "./lib/generateAdmin"
import { printConfig } from "./lib/printConfig"
import { adminGeneratorPluginConfigurationSchema } from "./configuration"

class AdminGeneratorPlugin implements GeneratorPluginInstance {
    configuration

    constructor(
        unsafeConfig: unknown,
        private context: GeneratorSessionContext,
    ) {
        this.configuration = adminGeneratorPluginConfigurationSchema.parse(unsafeConfig)
    }

    async generate(): Promise<string> {
        const schema = await this.context.getSchema(this.configuration.input)

        const admin = generateAdmin(schema, this.configuration.nameTransform ?? (id => id))

        return printConfig(admin)
    }
}

const adminGeneratorPlugin: GeneratorPlugin = {
    instance(unsafeConfig, context) {
        return new AdminGeneratorPlugin(unsafeConfig, context.session)
    },
}

export default adminGeneratorPlugin

export * from "./contract"
