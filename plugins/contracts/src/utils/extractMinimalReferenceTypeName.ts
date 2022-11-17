export function extractMinimalReferenceTypeName(id: string, currentNamespace: string[]) {
    const idParts = id.split(".");

    let i = 0;

    while (idParts[i] === currentNamespace[i] && idParts[i] !== undefined) i++;

    return idParts.slice(i).join(".");
}
