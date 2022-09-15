import ts from "typescript";
import { ImportReferenceExportConfiguration } from "../typesGeneration/GeneratorContext";

export default function getImportClause({
    isTypeOnly,
    name,
    export: export_,
}: {
    isTypeOnly: boolean;
    name: string;
    export?: ImportReferenceExportConfiguration;
}) {
    if (!export_) {
        return ts.factory.createImportClause(
            /* isTypeOnly */ isTypeOnly,
            /* name */ undefined,
            /* namedBinding */ ts.factory.createNamedImports(
                /* elements */ [
                    ts.factory.createImportSpecifier(
                        /* isTypeOnly */ false,
                        /* propertyName */ undefined,
                        /* name */ ts.factory.createIdentifier(name),
                    ),
                ],
            ),
        );
    }

    let propertyName: string;

    if (typeof export_ === "string") propertyName = export_;
    else if ("name" in export_) propertyName = export_.name;
    else
        return ts.factory.createImportClause(
            /* isTypeOnly */ isTypeOnly,
            /* name */ ts.factory.createIdentifier(name),
            /* namedBinding */ undefined,
        );

    return ts.factory.createImportClause(
        /* isTypeOnly */ isTypeOnly,
        /* name */ undefined,
        /* namedBinding */ ts.factory.createNamedImports(
            /* elements */ [
                ts.factory.createImportSpecifier(
                    /* isTypeOnly */ false,
                    /* propertyName */ ts.factory.createIdentifier(propertyName),
                    /* name */ ts.factory.createIdentifier(name),
                ),
            ],
        ),
    );
}
