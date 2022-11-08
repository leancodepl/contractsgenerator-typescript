export interface GeneratorPluginInstance {
    beforeAll?: () => Promise<string>;
    before?: () => Promise<string>;
    generate(): Promise<string>;
    after?: () => Promise<string>;
    afterAll?: () => Promise<string>;
}
