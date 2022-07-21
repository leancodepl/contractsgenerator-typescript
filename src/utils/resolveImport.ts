import { dirname, extname, relative, resolve } from "path";

export default function resolveImport({
    baseDir,
    fileLocation,
    location,
}: {
    baseDir: string;
    fileLocation: string;
    location: string;
}) {
    const relativePath = relative(dirname(fileLocation), resolve(baseDir, location)).replace(/\\/g, "/");

    let unixRelativePath = relativePath.replace(/\\/g, "/");

    if (!unixRelativePath.startsWith(".")) {
        unixRelativePath = "./" + unixRelativePath;
    }

    const ext = extname(unixRelativePath);

    return unixRelativePath.slice(0, -ext.length);
}
