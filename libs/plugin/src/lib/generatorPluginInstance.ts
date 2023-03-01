export interface GeneratorPluginInstance {
    beforeAll?: () => Promise<string | undefined>;
    before?: () => Promise<string | undefined>;
    generate?: () => Promise<string | undefined>;
    after?: () => Promise<string | undefined>;
    afterAll?: () => Promise<string | undefined>;
}
