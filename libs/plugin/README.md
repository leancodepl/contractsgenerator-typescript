# @leancodepl/contractsgenerator-typescript-plugin

Core plugin interfaces and types for extending the TypeScript Contracts Generator with custom generation logic.

## Installation

```bash
npm install @leancodepl/contractsgenerator-typescript-plugin
```

or

```bash
yarn add @leancodepl/contractsgenerator-typescript-plugin
```

## API

### `GeneratorPlugin`

Defines the structure of a generator plugin that can process contract schemas.

**Type:**
```typescript
interface GeneratorPlugin {
  instance: (configuration: unknown, context: GeneratorContext) => GeneratorPluginInstance
}
```

### `GeneratorPluginInstance`

Interface for plugin instances with lifecycle hooks for code generation.

**Type:**
```typescript
interface GeneratorPluginInstance {
  beforeAll?: () => Promise<string | undefined>
  before?: () => Promise<string | undefined>
  generate?: () => Promise<string | undefined>
  after?: () => Promise<string | undefined>
  afterAll?: () => Promise<string | undefined>
}
```

### `GeneratorContext`

Context object provided to plugins containing session, file, and plugin-specific state.

**Type:**
```typescript
type GeneratorContext = {
  session: GeneratorSessionContext
  file: GeneratorFileContext
  plugin: GeneratorPluginContext
}
```

### `GeneratorInput`

Configuration for specifying which backend contracts to process.

**Type:**
```typescript
interface GeneratorInput {
  raw?: string
  base?: string
  file?: string
  include?: string | string[]
  exclude?: string | string[]
  project?: string | string[]
  options?: string[]
}
```

## Usage Examples

### Creating a Custom Plugin

```typescript
import { GeneratorPlugin, GeneratorPluginInstance, GeneratorContext } from "@leancodepl/contractsgenerator-typescript-plugin";

class CustomPlugin implements GeneratorPluginInstance {
  async generate() {
    return "export const custom = true;";
  }
}

const customPlugin: GeneratorPlugin = {
  instance(config: unknown, context: GeneratorContext) {
    return new CustomPlugin();
  },
};

export default customPlugin;
```

### Using Plugin Lifecycle Hooks

```typescript
class LifecyclePlugin implements GeneratorPluginInstance {
  async beforeAll() {
    return "// File header\n";
  }

  async generate() {
    return "export const data = {};\n";
  }

  async afterAll() {
    return "\n// File footer";
  }
}
```

### Accessing Schema from Context

```typescript
import { GeneratorPlugin, GeneratorContext } from "@leancodepl/contractsgenerator-typescript-plugin";

class SchemaPlugin implements GeneratorPluginInstance {
  constructor(private context: GeneratorContext) {}

  async generate() {
    const schema = await this.context.session.getSchema({
      base: "./backend",
      project: ["Project.csproj"],
    });
    return `// Found ${schema.components.length} components`;
  }
}

const plugin: GeneratorPlugin = {
  instance(config, context) {
    return new SchemaPlugin(context);
  },
};

export default plugin;
```
