import { ImportReference } from "../typesGeneration/GeneratorContext";
import { dirname, extname, relative, resolve } from "path";

export default function resolveImport({
    baseDir,
    fileLocation,
    from,
}: {
    baseDir: string;
    fileLocation: string;
    from: ImportReference["from"];
}) {
    if (typeof from === "string" || "path" in from) {
        const effectiveLocation = typeof from === "string" ? from : from.path;

        const relativePath = relative(dirname(fileLocation), resolve(baseDir, effectiveLocation)).replace(/\\/g, "/");

        let unixRelativePath = relativePath.replace(/\\/g, "/");

        if (!unixRelativePath.startsWith(".")) {
            unixRelativePath = "./" + unixRelativePath;
        }

        const ext = extname(unixRelativePath);

        return unixRelativePath.slice(0, -ext.length);
    }

    return from.lib;
}
