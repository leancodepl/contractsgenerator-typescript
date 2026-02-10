import { writeFile } from "fs/promises"
import { entries } from "lodash"
import { logger } from "./logger"

export async function saveOutputs(outputs: Record<string, string>) {
  await Promise.all(
    entries(outputs).map(([file, output]) => {
      logger.verbose("Writing", file)
      return writeFile(file, output)
    }),
  )
}
