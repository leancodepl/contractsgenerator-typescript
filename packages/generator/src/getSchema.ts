import { execFile, execFileSync } from "node:child_process"
import { readFile } from "node:fs/promises"
import { platform } from "node:os"
import { join } from "node:path"
import { GeneratorInput } from "@leancodepl/contractsgenerator-typescript-plugin"
import { GeneratorSchema, parseSchema } from "@leancodepl/contractsgenerator-typescript-schema"

export async function getSchema(input: GeneratorInput) {
    if (input.raw) {
        const buf = await readFile(input.raw)

        return parseSchema(buf)
    }

    let params: string[]

    function withBase(path: string) {
        return input.base ? join(input.base, path) : path
    }

    if (input.project) {
        params = [
            "project",
            "--project",
            ...(Array.isArray(input.project) ? input.project.map(withBase) : [withBase(input.project)]),
        ]
    } else if (input?.file) {
        params = ["file", "--input", withBase(input.file)]
    } else {
        params = ["path"]

        if (input.base) {
            params.push("--directory", input.base)
        }

        params.push(
            "--include",
            ...(input.include ? (Array.isArray(input.include) ? input.include : [input.include]) : ["**/*.cs"]),
        )

        if (input.exclude) {
            params.push("--exclude", ...(Array.isArray(input.exclude) ? input.exclude : [input.exclude]))
        }
    }

    params.push("--output=-")

    const dotnet = platform() === "win32" ? "dotnet.exe" : "dotnet"

    return await new Promise<GeneratorSchema>((resolve, reject) => {
        execFileSync(dotnet, ["tool", "restore"])
        execFile(
            dotnet,
            ["tool", "run", "dotnet-contracts-generate", "--", ...params],
            {
                encoding: "buffer",
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
