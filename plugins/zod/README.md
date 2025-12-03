# @leancodepl/contractsgenerator-typescript-plugin-zod

Plugin for generating Zod schemas for DTOs (Data Transfer Objects), Commands, Queries, Operations, Topics, and Enums.

## Config

- `input` - configuration passed to [Contracts Generator Server](https://github.com/leancodepl/contractsgenerator). All
  paths are relative to directory from your current CWD. Unless you are using JavaScript files - in that case you can
  use `__dirname` and `path.join`/`path.resolve` for paths relative to configuration file.
  - `base` - base path for your backend code source. If you provide that then all the other properties are relative to
    this directory.

  Then you can provide one of:
  - `file`  
    or
  - `include` and `exclude` - single globs or arrays of globs to match specific .cs files  
    or
  - `project` - can be multiple

  For details on these options please refer to
  [Contracts Generator Server](https://github.com/leancodepl/contractsgenerator).

- `customTypes` - dictionary of custom types configuration where keys are the name of Known Type and value is custom
  type name. Valid custom types include: String, Guid, Uri, Boolean, UInt8, Int8, Int16, UInt16, Int32, UInt32, Int64,
  UInt64, Float32, Float64, DateOnly, TimeOnly, DateTimeOffset, TimeSpan.

- `nameTransform` - function `(fullName: string) => string | undefined` which allows you to transform full name of the
  DTO (like `LeanCode.Core.Contracts.User.UserDetailsDTO`). This is especially useful when you want to map namespaces,
  for e.g. when you have conflicts, want to remove parts of the namespace (`LeanCode.Core.User.UserDetailsDTO` instead
  of `LeanCode.Core.`**`Contracts`**`.User.UserDetailsDTO`). If the function returns `undefined`, the DTO is not
  included in the output.

- `fieldValidation` - function
  `(fieldPath: string, property: FieldValidationContext) => string | undefined`
  which allows you to provide custom validation logic for specific fields. The function receives:
  - `fieldPath`: Full path to the field (e.g., `"ExampleApp.Examples.Contracts.Booking.LocationDTO.Latitude"`)
  - `property`: An object containing:
    - `name`: Name of the property (e.g., `"Latitude"`)
    - `isNullable`: Boolean indicating if the property is nullable
    - `type`: The property type (`"string" | "number" | "boolean" | "array" | "object" | "enum" | "unknown"`)
  - Returns: A string containing additional Zod validation code (e.g., `".min(1)"`, `".positive().max(90)"`), or
    `undefined` to use the default schema. The string will be appended to the default schema code.

## Features

- Generates Zod schemas for DTOs, Commands, Queries, Operations, Topics, and Enums
- Uses PascalCase naming convention for schema names (e.g., `LocationDTO` → `LocationDTOSchema`)
- Maintains namespace structure based on nameTransform
- Handles nullable properties with `.nullable()`
- Supports interface inheritance with `.extend()`
- Handles generic types and arrays
- Generates enum schemas as `z.number().refine()` with metadata (values mapping, enum array, and comments)
- Adds comments and attributes to `.meta()` for interfaces and enums
- Validates duplicate names in namespaces (same as contracts plugin)

## Example

### Config

```js
module.exports = {
  generates: {
    "schemas.ts": {
      plugins: ["zod"],
    },
  },
  config: {
    input: {
      base: "../../../backend/src",
      project: ["Core/Project.Core.Contracts/Project.Core.Contracts.csproj"],
    },
  },
}
```

### Output

```typescript
import { z } from "zod"

export namespace ExampleApp {
  export namespace Examples {
    export namespace Contracts {
      export namespace Booking {
        export const LocationDTOSchema = z.object({
          Latitude: z.number(),
          Longitude: z.number(),
        })

        export const MoneyDTOSchema = z.object({
          Value: z.number(),
          Currency: z.string(),
        })

        export const ServiceProviderTypeDTOSchema = z
          .number()
          .refine(val => [0, 1, 2].includes(val), { message: "Invalid enum value" })
          .meta({
            values: { Hairdresser: 0, BarberShop: 1, Groomer: 2 },
            enum: [0, 1, 2],
          })

        export const MyReservationDTOSchema = z.object({
          Id: z.string(),
          Location: ExampleApp.Examples.Contracts.Booking.LocationDTOSchema,
          Price: ExampleApp.Examples.Contracts.Booking.MoneyDTOSchema,
          Type: ExampleApp.Examples.Contracts.Booking.ServiceProviderTypeDTOSchema,
        })
      }
    }
  }
}
```

### With nameTransform

```js
module.exports = {
  generates: {
    "schemas.ts": {
      plugins: ["zod"],
    },
  },
  config: {
    input: {
      base: "../../../backend/src",
      project: ["Core/Project.Core.Contracts/Project.Core.Contracts.csproj"],
    },
    nameTransform: nameWithNamespace => nameWithNamespace.split(".").at(-1),
  },
}
```

Output:

```typescript
import { z } from "zod"

export const LocationDTOSchema = z.object({
  Latitude: z.number(),
  Longitude: z.number(),
})

export const MoneyDTOSchema = z.object({
  Value: z.number(),
  Currency: z.string(),
})

export const ServiceProviderTypeDTOSchema = z
  .number()
  .refine(val => [0, 1, 2].includes(val), { message: "Invalid enum value" })
  .meta({
    values: { Hairdresser: 0, BarberShop: 1, Groomer: 2 },
    enum: [0, 1, 2],
  })

export const MyReservationDTOSchema = z.object({
  Id: z.string(),
  Location: LocationDTOSchema,
  Price: MoneyDTOSchema,
  Type: ServiceProviderTypeDTOSchema,
})
```

### With fieldValidation

```js
module.exports = {
  generates: {
    "schemas.ts": {
      plugins: ["zod"],
    },
  },
  config: {
    input: {
      base: "../../../backend/src",
      project: ["Core/Project.Core.Contracts/Project.Core.Contracts.csproj"],
    },
    fieldValidation: (fieldPath, property) => {
      // Add min length validation for string fields named "Name"
      if (property.name === "Name" && property.type === "string") {
        return ".min(1)"
      }
      // Add positive number validation for coordinates
      if (
        (property.name === "Latitude" || property.name === "Longitude") &&
        property.type === "number" &&
        fieldPath.includes("LocationDTO")
      ) {
        return ".positive().max(90)"
      }
      // Add custom refine validation with options
      if (property.name === "Value" && property.type === "number") {
        return '.refine(val => val > 0, { message: "Must be positive" })'
      }
      return undefined
    },
  },
}
```

Output:

```typescript
import { z } from "zod"

export namespace ExampleApp {
  export namespace Examples {
    export namespace Contracts {
      export namespace Booking {
        export const LocationDTOSchema = z.object({
          Latitude: z.number().positive().max(90),
          Longitude: z.number().positive().max(90),
        })

        export const ServiceProviderDetailsDTOSchema = z.object({
          Name: z.string().min(1),
          // ... other properties
        })
      }
    }
  }
}
```
