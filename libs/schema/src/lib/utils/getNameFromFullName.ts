import { assertNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";

export function getNameFromFullName(name: string | null | undefined) {
    assertNotEmpty(name);

    const parts = name.split(".");

    return parts[parts.length - 1];
}
