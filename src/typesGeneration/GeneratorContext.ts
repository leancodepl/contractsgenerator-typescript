import ts from "typescript";
import { leancode } from "../protocol";
import type GeneratorCommand from "./GeneratorCommand";
import GeneratorOperation from "./GeneratorOperation";
import type GeneratorQuery from "./GeneratorQuery";
import type GeneratorInternalType from "./types/GeneratorInternalType";

export default interface GeneratorContext {
    currentNamespace?: string;
    customTypes?: CustomTypesMap;
    printNode: (node: ts.Node) => string;
    include?: ClientMethodFilter;
    exclude?: ClientMethodFilter;
    referencedInternalTypes: Set<GeneratorInternalType>;
    referencedImports: ImportReference[];
}

export type ImportReferenceLocationConfiguration =
    | string
    | {
          path: string;
      }
    | {
          lib: string;
      };

export type ImportReferenceExportConfiguration =
    | string
    | {
          default: true;
      }
    | {
          name: string;
      };

export type ImportReference = {
    name: string;
    from: ImportReferenceLocationConfiguration;
    export?: ImportReferenceExportConfiguration;
};

export type ClientMethodFilter = (
    id: string,
    commandOrQuery: GeneratorQuery | GeneratorCommand | GeneratorOperation,
) => boolean;

export type CustomTypesMap = Partial<Record<OverridableCustomType, () => ts.TypeNode>>;

export const overridableCustomTypes = [
    leancode.contracts.KnownType.String,
    leancode.contracts.KnownType.Guid,
    leancode.contracts.KnownType.Uri,
    leancode.contracts.KnownType.Boolean,
    leancode.contracts.KnownType.UInt8,
    leancode.contracts.KnownType.Int8,
    leancode.contracts.KnownType.Int16,
    leancode.contracts.KnownType.UInt16,
    leancode.contracts.KnownType.Int32,
    leancode.contracts.KnownType.UInt32,
    leancode.contracts.KnownType.Int64,
    leancode.contracts.KnownType.UInt64,
    leancode.contracts.KnownType.Float32,
    leancode.contracts.KnownType.Float64,
    leancode.contracts.KnownType.DateOnly,
    leancode.contracts.KnownType.TimeOnly,
    leancode.contracts.KnownType.Date,
    leancode.contracts.KnownType.Time,
    leancode.contracts.KnownType.DateTime,
    leancode.contracts.KnownType.DateTimeOffset,
    leancode.contracts.KnownType.TimeSpan,
] as const;

export type OverridableCustomType = typeof overridableCustomTypes[number];
