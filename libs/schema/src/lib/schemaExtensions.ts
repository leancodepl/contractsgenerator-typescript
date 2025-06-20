export enum KnownExtensions {
    DateTime = "datetime",
}

export class SchemaExtensions {
    extensions: KnownExtensions[] = []

    constructor(extensions: string[]) {
        const knownExtensions = Object.values(KnownExtensions) as string[]

        for (const extension of extensions) {
            if (knownExtensions.includes(extension)) {
                this.extensions.push(extension as KnownExtensions)
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
