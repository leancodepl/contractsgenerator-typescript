# @leancodepl/contractsgenerator-typescript-values

Value generation utilities for converting schema constant values to TypeScript literals. Handles primitive types
including strings, numbers, booleans, and null.

## Installation

```bash
npm install @leancodepl/contractsgenerator-typescript-values
```

or

```bash
yarn add @leancodepl/contractsgenerator-typescript-values
```

## API

### `generateValue(value)`

Converts a schema value to a TypeScript literal string representation.

**Parameters:**

- `value: SchemaValue` - Schema value object (string, number, boolean, or null)

**Returns:** `string` - TypeScript literal representation

## Usage Examples

### Generating String Literals

```typescript
import { generateValue } from "@leancodepl/contractsgenerator-typescript-values"

const value = generateValue({ type: "string", value: "admin" })
// Returns: '"admin"'
```

### Generating Number Literals

```typescript
import { generateValue } from "@leancodepl/contractsgenerator-typescript-values"

const errorCode = generateValue({ type: "number", value: 404 })
// Returns: '404'
```

### Generating Boolean Literals

```typescript
import { generateValue } from "@leancodepl/contractsgenerator-typescript-values"

const flag = generateValue({ type: "boolean", value: true })
// Returns: 'true'
```

### Handling Null Values

```typescript
import { generateValue } from "@leancodepl/contractsgenerator-typescript-values"

const nullable = generateValue({ type: "null" })
// Returns: 'null'
```
