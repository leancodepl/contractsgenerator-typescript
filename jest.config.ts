import { getJestProjectsAsync } from "@nx/jest"
import { Config } from "jest"

const config: Config = {
  projects: await getJestProjectsAsync(),
}

export default config
