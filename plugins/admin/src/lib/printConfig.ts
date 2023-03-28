import { AdminComponentsConfig } from "../contract";

export function printConfig(config: AdminComponentsConfig) {
    return `const schema = ${JSON.stringify(config, undefined, 4)} as const;

export default schema;`;
}
