import { exec } from "node:child_process"
import { readFile } from "node:fs/promises"
import { platform } from "node:os"
import { join, resolve } from "node:path"
import { GeneratorInput } from "@leancodepl/contractsgenerator-typescript-plugin"
import { GeneratorSchema, parseSchema } from "@leancodepl/contractsgenerator-typescript-schema"

export const serverContractsGeneratorVersion = "3.0.0"

export async function getSchema(input: GeneratorInput) {
    if (input.raw) {
        const buf = await readFile(input.raw)

        return parseSchema(buf)
    }

    let params = ""

    function withBase(path: string) {
        return input?.base ? join(input.base, path) : path
    }

    if (input?.project) {
        let projects
        if (Array.isArray(input.project)) {
            projects = input.project.map(p => withBase(p))
        } else {
            projects = [withBase(input.project)]
        }

        params = `project --project ${projects.map(p => `"${p}"`).join(" ")}`
    } else if (input?.file) {
        params = `file --input="${withBase(input.file)}"`
    } else if (input) {
        params = `path`

        if (input.base) {
            params += ` --directory="${input.base}"`
        }

        const include = input.include ? (Array.isArray(input.include) ? input.include : [input.include]) : ["**/*.cs"]

        params += ` --include ${include.map(i => `"${i}"`).join(" ")}`

        if (input.exclude) {
            params += ` --exclude ${(Array.isArray(input.exclude) ? input.exclude : [input.exclude])
                .map(e => `"${e}"`)
                .join(" ")}`
        }
    }

    params += ` --output=-`

    const serverVersion = `SERVER_VERSION=${serverContractsGeneratorVersion}`
    const script = resolve(__dirname, "generate.sh")

    return await new Promise<GeneratorSchema>((resolve, reject) => {
        exec(
            `${serverVersion} "${script}" ${params}`,
            {
                encoding: "buffer",
                shell: inferShell(),
            },
            (error, stdout) => {
                if (error) {
                    reject(error)
                    return
                }

                resolve(parseSchema(stdout))
            },
        )
    })
}

function inferShell(): string | undefined {
    const shellEnv = process.env.CONTRACTS_GENERATOR_SHELL

    if (shellEnv) {
        return shellEnv
    }

    // Minimal support for Git Bash on Windows

    if (platform() === "win32") {
        return "bash"
    }

    return undefined
}
