export enum KnownExtensions {
    DateTime = "datetime",
}

export class SchemaExtensions {
    extensions: KnownExtensions[] = []

    constructor(extensions: string[]) {
        for (const extension of extensions) {
            if (extension in KnownExtensions) {
                this.extensions.push(KnownExtensions[extension as keyof typeof KnownExtensions])
            } else {
                console.warn(
                    `Unknown extension received: "${extension}". Extension is ignored but remember that this may cause undefined behavior.`,
                )
            }
        }
    }

    has(extension: KnownExtensions) {
        return this.extensions.includes(extension)
    }
}
