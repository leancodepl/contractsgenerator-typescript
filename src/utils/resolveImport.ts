import { posix } from "path";
import { ImportReference } from "../typesGeneration/GeneratorContext";

const { dirname, extname, relative, resolve } = posix;

export default function resolveImport({
    baseDir,
    fileLocation,
    location,
}: {
    baseDir: string;
    fileLocation: string;
    location: string | ImportReference["from"];
}) {
    if (typeof location === "string" || "path" in location) {
        const effectiveLocation = typeof location === "string" ? location : location.path;

        let relativePath = relative(dirname(fileLocation), resolve(baseDir, effectiveLocation));

        if (!relativePath.startsWith(".")) {
            relativePath = "./" + relativePath;
        }

        const ext = extname(relativePath);

        return relativePath.slice(0, -ext.length);
    }

    return location.lib;
}
