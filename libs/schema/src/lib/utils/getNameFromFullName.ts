import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";

export function getNameFromFullName(name: string | null | undefined) {
    return ensureNotEmpty(name?.split(".").at(-1));
}
