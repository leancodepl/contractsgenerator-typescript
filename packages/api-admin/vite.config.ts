/// <reference types="vitest" />
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin"
import react from "@vitejs/plugin-react"
import { join } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

// These options were migrated by @nx/vite:convert-to-inferred from the project.json file.
const configValues = { default: {}, development: {}, production: {} }

// Determine the correct configValue to use based on the configuration
const nxConfiguration = process.env.NX_TASK_TARGET_CONFIGURATION ?? "default"

const options = {
    ...configValues.default,
    ...(configValues[nxConfiguration] ?? {}),
}

export default defineConfig({
    root: __dirname,
    cacheDir: "../../node_modules/.vite/api-admin",

    plugins: [
        dts({
            entryRoot: "src",
            tsConfigFilePath: join(__dirname, "tsconfig.lib.json"),
            skipDiagnostics: true,
        }),
        react(),
        nxViteTsPaths(),
    ],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [
    //    viteTsConfigPaths({
    //      root: '../../',
    //    }),
    //  ],
    // },

    // Configuration for building your library.
    // See: https://vitejs.dev/guide/build.html#library-mode
    build: {
        outDir: "../../dist/packages/api-admin",
        reportCompressedSize: true,
        commonjsOptions: { transformMixedEsModules: true },
        lib: {
            // Could also be a dictionary or array of multiple entry points.
            entry: "src/index.ts",
            name: "api-admin",
            fileName: "index",
            // Change this to the formats you want to support.
            // Don't forgot to update your package.json as well.
            formats: ["es", "cjs"],
        },
        rollupOptions: {
            // External packages that should not be bundled into your library.
            external: [
                "react",
                "react-dom",
                "react/jsx-runtime",
                "antd",
                "@leancodepl/react-query-cqrs-client",
                "@leancodepl/api-date-dayjs",
                "dayjs",
                "@tanstack/react-query",
            ],
        },
    },

    test: {
        reporters: ["default"],
        coverage: {
            reportsDirectory: "../../coverage/packages/api-admin",
            provider: "istanbul",
        },
        globals: true,
        cache: {
            dir: "../../node_modules/.vitest",
        },
        environment: "jsdom",
        include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    },
})
