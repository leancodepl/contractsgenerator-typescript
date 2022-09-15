import _, { groupBy } from "lodash";
import ts from "typescript";
import { ImportReference } from "../typesGeneration/GeneratorContext";
import resolveImport from "../utils/resolveImport";

export default function getReferencedImportsPreamble({
    baseDir,
    referencedImports,
    fileLocation,
}: {
    baseDir: string;
    fileLocation: string;
    referencedImports: ImportReference[];
}): ts.Statement[] {
    return _(referencedImports)
        .groupBy(ref => resolveImport({ baseDir, fileLocation, from: ref.from }))
        .map((importReferences, importPath) => {
            const { default: default_, nonDefault } = groupBy(importReferences, ({ export: export_ }) =>
                export_ && typeof export_ !== "string" && "default" in export_ && export_.default
                    ? "default"
                    : "nonDefault",
            );

            return ts.factory.createImportDeclaration(
                /* decorators */ undefined,
                /* modifiers */ undefined,
                /* importClause */ ts.factory.createImportClause(
                    /* isTypeOnly */ true,
                    /* name */ default_ ? ts.factory.createIdentifier(default_[0].name) : undefined,
                    /* namedBinding */ (nonDefault?.length ?? 0) > 0
                        ? ts.factory.createNamedImports(
                              /* elements */ nonDefault.map(({ export: export_, name }) =>
                                  ts.factory.createImportSpecifier(
                                      /* isTypeOnly */ false,
                                      /* propertyName */ export_
                                          ? ts.factory.createIdentifier(
                                                typeof export_ === "string"
                                                    ? export_
                                                    : "name" in export_
                                                    ? export_.name
                                                    : "",
                                            )
                                          : undefined,
                                      /* name */ ts.factory.createIdentifier(name),
                                  ),
                              ),
                          )
                        : undefined,
                ),
                /* moduleSpecifier */ ts.factory.createStringLiteral(/* text */ importPath, /* isSingleQuote */ false),
            );
        })
        .value();
}
