import { GeneratorPlugin, GeneratorPluginInstance } from "@leancodepl/contractsgenerator-typescript-plugin"
import { rawGeneratorPluginConfigurationSchema } from "./configuration"

class RawGeneratorPlugin implements GeneratorPluginInstance {
    configuration

    constructor(unsafeConfig: unknown) {
        this.configuration = rawGeneratorPluginConfigurationSchema.parse(unsafeConfig)
    }

    async beforeAll() {
        return this.configuration.prepend
    }

    async generate() {
        return this.configuration.output
    }

    async afterAll() {
        return this.configuration.append
    }
}

const rawGeneratorPlugin: GeneratorPlugin = {
    instance(unsafeConfig, _context) {
        return new RawGeneratorPlugin(unsafeConfig)
    },
}

export default rawGeneratorPlugin
