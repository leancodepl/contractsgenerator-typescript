import { execSync } from "child_process";
import download from "download";
import { chmod, open, writeFile } from "fs/promises";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

async function getGenerateSh() {
    const generateShLocation = "https://raw.githubusercontent.com/leancodepl/contractsgenerator/main/tools/generate.sh";

    const cachedGenerateShLocation = resolve(
        dirname(fileURLToPath(import.meta.url)),
        "../../node_modules/.cache/generate.sh",
    );

    try {
        const generateShHandle = await open(cachedGenerateShLocation, "wx");

        const generateSh = await download(generateShLocation);

        await writeFile(generateShHandle, generateSh);

        await chmod(cachedGenerateShLocation, 0o755); // rwxr-xr-x
    } catch (e) {
        if (e.code !== "EEXIST") throw e;
    }

    return cachedGenerateShLocation;
}

const generateShScript = await getGenerateSh();

execSync(`"${generateShScript}" ${process.argv.slice(2).join(" ")}`);
