/* eslint-env node */

const path = require("path");
const common = require("../common-config");

module.exports = common(__filename, examples => ({
    file: path.resolve(examples, "properties/known_types.cs"),
}));
