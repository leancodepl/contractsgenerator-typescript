/* eslint-env node */

const path = require("path");
const common = require("../common-config");

module.exports = {
    ...common(__filename, examples => ({
        file: path.resolve(examples, "properties/known_types.cs"),
    })),
    customTypes: {
        DateTimeOffset: {
            name: "DateTimeOffset",
            from: { lib: "@leancode/api-date-datefns" },
            export: { default: true },
        },
        DateOnly: {
            name: "DateOnly",
            from: { lib: "@leancode/api-date-dayjs" },
        },
        TimeOnly: {
            name: "TimeOnly",
            from: { lib: "@leancode/api-date-dayjs" },
            export: { default: true },
        },
        TimeSpan: {
            name: "TimeSpan",
            from: { lib: "@leancode/api-date-dayjs" },
            export: { name: "timeSpanImpl" },
        },
    },
};
