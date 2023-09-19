import { assertNotEmpty } from "./assertNotEmpty";

export function ensureNotEmpty<T>(value: T | undefined | null) {
    assertNotEmpty(value);

    return value;
}
