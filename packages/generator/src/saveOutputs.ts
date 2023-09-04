import { writeFile } from "fs/promises";
import { entries } from "lodash";

export async function saveOutputs(outputs: Record<string, string>) {
  await Promise.all(entries(outputs).map(([file, output]) => writeFile(file, output)));
}
