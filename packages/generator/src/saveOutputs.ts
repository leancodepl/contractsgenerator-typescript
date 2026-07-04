import { entries } from "lodash"
import { writeFile } from "node:fs/promises"

export async function saveOutputs(outputs: Record<string, string>) {
  await Promise.all(entries(outputs).map(([file, output]) => writeFile(file, output)))
}
