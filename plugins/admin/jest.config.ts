/* eslint-disable */
export default {
    displayName: "admin",
    preset: "../../jest.preset.js",
    globals: {
        "ts-jest": {
            tsconfig: "<rootDir>/tsconfig.spec.json",
        },
    },
    testEnvironment: "node",
    transform: {
        "^.+\\.[tj]sx?$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    coverageDirectory: "../../coverage/plugins/admin",
};
