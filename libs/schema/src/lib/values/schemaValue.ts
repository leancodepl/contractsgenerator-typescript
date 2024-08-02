// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SchemaValue<T = any> {
    kind: string

    value: T
}
