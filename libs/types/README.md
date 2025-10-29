# @leancodepl/contractsgenerator-typescript-types

TypeScript type generation utilities for the contracts generator. Converts schema type references into TypeScript type annotations with support for custom types and nullability.

## Installation

```bash
npm install @leancodepl/contractsgenerator-typescript-types
```

or

```bash
yarn add @leancodepl/contractsgenerator-typescript-types
```

## API

### `generateType(typeRef, context)`

Generates a TypeScript type string from a schema type reference.

**Parameters:**
- `typeRef: SchemaType` - Schema type reference to convert
- `context: GeneratorTypeContext` - Type generation context with custom type mappings

**Returns:** `string` - TypeScript type annotation

### `generateTypeWithNullability(typeRef, context)`

Generates a TypeScript type string including nullability annotations.

**Parameters:**
- `typeRef: SchemaType` - Schema type reference with nullability info
- `context: GeneratorTypeContext` - Type generation context

**Returns:** `string` - TypeScript type with `| null` or `| undefined` as needed

### `generateContext(customTypes)`

Creates a type generation context with custom type mappings.

**Parameters:**
- `customTypes: Record<string, string>` - Custom type name mappings

**Returns:** `GeneratorTypeContext` - Context for type generation

### `getTypesMap(schema)`

Extracts a map of all types defined in the schema.

**Parameters:**
- `schema: GeneratorSchema` - Contract schema

**Returns:** `Map<string, SchemaInterface | SchemaEnum>` - Type name to definition map

## Usage Examples

### Basic Type Generation

```typescript
import { generateType, generateContext } from "@leancodepl/contractsgenerator-typescript-types";

const context = generateContext({
  DateTimeOffset: "Date",
  Guid: "string"
});

const typeString = generateType(schemaTypeRef, context);
```

### Generating Types with Nullability

```typescript
import { generateTypeWithNullability, generateContext } from "@leancodepl/contractsgenerator-typescript-types";

const context = generateContext({});
const type = generateTypeWithNullability(propertyType, context);
```

### Creating Type Map from Schema

```typescript
import { getTypesMap } from "@leancodepl/contractsgenerator-typescript-types";
import { parseSchema } from "@leancodepl/contractsgenerator-typescript-schema";

const schema = parseSchema(rawData);
const typesMap = getTypesMap(schema);

const userDto = typesMap.get("UserDTO");
```

### Custom Type Mapping

```typescript
import { generateContext, generateType } from "@leancodepl/contractsgenerator-typescript-types";

const context = generateContext({
  DateOnly: "ApiDateOnly",
  TimeOnly: "ApiTimeOnly",
  DateTimeOffset: "ApiDateTimeOffset"
});

const propertyType = generateType(typeRef, context);
```

