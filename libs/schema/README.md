# @leancodepl/contractsgenerator-typescript-schema

Schema definitions and types for parsing LeanCode backend contracts. Provides TypeScript interfaces for contract
components including DTOs, commands, queries, operations, and topics.

## Installation

```bash
npm install @leancodepl/contractsgenerator-typescript-schema
```

or

```bash
yarn add @leancodepl/contractsgenerator-typescript-schema
```

## API

### `parseSchema(raw)`

Parses raw protobuf contract data into a structured schema object.

**Parameters:**

- `raw: Uint8Array` - Raw protobuf bytes from the contracts generator server

**Returns:** `GeneratorSchema` - Parsed schema with components and enums

### Schema Types

The package exports TypeScript interfaces for all schema components:

- `GeneratorSchema` - Root schema structure
- `SchemaCommand`, `SchemaQuery`, `SchemaOperation` - CQRS contract types
- `SchemaTopic` - Event/topic definitions
- `SchemaInterface`, `SchemaEnum` - DTO structures
- `SchemaProperty`, `SchemaAttribute` - DTO metadata
- `SchemaType`, `SchemaKnownType`, `SchemaGenericType` - Type system
- `SchemaValue` - Constant value representations

## Usage Examples

### Parsing Contract Schema

```typescript
import { parseSchema } from "@leancodepl/contractsgenerator-typescript-schema"

const rawData = await fetchContractsFromServer()
const schema = parseSchema(rawData)

schema.components.forEach(component => {
  console.log(component.name)
})
```

### Working with Schema Components

```typescript
import { parseSchema, SchemaCommand, SchemaQuery } from "@leancodepl/contractsgenerator-typescript-schema"

const schema = parseSchema(contractData)

const commands = schema.components.filter((c): c is SchemaCommand => c.type === "command")

const queries = schema.components.filter((c): c is SchemaQuery => c.type === "query")
```

### Accessing Type Information

```typescript
import { parseSchema } from "@leancodepl/contractsgenerator-typescript-schema"

const schema = parseSchema(contractData)

schema.components.forEach(component => {
  if (component.type === "interface") {
    component.properties.forEach(prop => {
      console.log(`${prop.name}: ${prop.typeRef.name}`)
    })
  }
})
```
