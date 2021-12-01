/* eslint-env node */

module.exports = {
    reporters: ["default", ["jest-junit", { outputName: "test-results/report.xml" }]],

    projects: [
        {
            displayName: "generator",
            preset: "ts-jest",
            testRegex: "(/__tests__/.*\\.spec)\\.(js|ts)$",
            transform: {
                "\\.ts$": "ts-jest",
            },
            testPathIgnorePatterns: ["integration"],
            transformIgnorePatterns: ["<rootDir>/node_modules/"],
            moduleFileExtensions: ["ts", "js", "json"],
        },
        {
            displayName: "eslint",
            runner: "jest-runner-eslint",
            roots: ["<rootDir>"],
            testMatch: ["<rootDir>/**/*.ts"],
            testPathIgnorePatterns: ["/node_modules", "./lib/.*"],
        },
        {
            displayName: "integration",
            preset: "ts-jest",
            testRegex: "(/__tests__/.*integration\\.spec)\\.(js|ts)$",
            transform: {
                "\\.ts$": "ts-jest",
            },
            transformIgnorePatterns: ["<rootDir>/node_modules/"],
            moduleFileExtensions: ["ts", "js", "json"],
        },
    ],
};
