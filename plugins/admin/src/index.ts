import {
    GeneratorPlugin,
    GeneratorPluginInstance,
    GeneratorSessionContext,
} from "@leancodepl/contractsgenerator-typescript-plugin";
import { adminGeneratorPluginConfigurationSchema } from "./configuration.validator";
import { generateAdmin } from "./lib/generateAdmin";

class AdminGeneratorPlugin implements GeneratorPluginInstance {
    configuration;

    constructor(unsafeConfig: unknown, private context: GeneratorSessionContext) {
        this.configuration = adminGeneratorPluginConfigurationSchema.parse(unsafeConfig);
    }

    async generate(): Promise<string> {
        const schema = await this.context.getSchema(this.configuration.input);

        const admin = generateAdmin(schema);

        console.dir(admin, { depth: 10 });

        return JSON.stringify(admin);
    }
}

const adminGeneratorPlugin: GeneratorPlugin = {
    instance(unsafeConfig, context) {
        return new AdminGeneratorPlugin(unsafeConfig, context.session);
    },
};

export default adminGeneratorPlugin;

export * from "./contract";
