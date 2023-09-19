export function assertNotEmpty<T>(value: T | undefined | null): asserts value is T {
    console.assert(value !== undefined && value !== undefined);
}
