import { concat } from "lodash"
import {
  GeneratorFileContext,
  GeneratorPlugin,
  GeneratorSessionContext,
} from "@leancodepl/contractsgenerator-typescript-plugin"
import { ContractsGeneratorPluginConfiguration } from "./generate"

export async function generateFile(
  configl2: Record<string, unknown>,
  plugins: ContractsGeneratorPluginConfiguration[],
  sessionContext: GeneratorSessionContext,
) {
  const fileContext: GeneratorFileContext = {
    metadata: {},
  }

  const prepend: string[] = []
  const output: string[] = []
  const append: string[] = []

  await Promise.all(
    plugins.map(async (pluginConfiguration, i) => {
      let configl3, pluginName

      if (typeof pluginConfiguration === "string") {
        pluginName = pluginConfiguration
        configl3 = {}
      } else {
        pluginName = Object.keys(pluginConfiguration)[0]
        configl3 = pluginConfiguration[pluginName]
      }

      const plugin: GeneratorPlugin = await import(
        `@leancodepl/contractsgenerator-typescript-plugin-${pluginName}`
      ).then(plugin => plugin.default ?? plugin)

      const pluginInstance = plugin.instance(
        { ...configl2, ...configl3 },
        { session: sessionContext, file: fileContext, plugin: fileContext },
      )

      const [beforeAll = "", before = "", generate = "", after = "", afterAll = ""] = await Promise.all([
        pluginInstance.beforeAll?.(),
        pluginInstance.before?.(),
        pluginInstance.generate?.(),
        pluginInstance.after?.(),
        pluginInstance.afterAll?.(),
      ])
      prepend[i] = beforeAll
      output[i] = before + generate + after
      append[i] = afterAll
    }),
  )

  return concat(prepend, output, append).join("")
}
