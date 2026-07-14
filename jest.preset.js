const nxPreset = require("@nx/jest/preset").default

module.exports = {
  ...nxPreset,
  /* TODO: Update to latest Jest snapshotFormat
   * By default Nx has kept the older style of Jest Snapshot formats
   * to prevent breaking of any existing tests with snapshots.
   * It's recommend you update to the latest format.
   * You can do this by removing snapshotFormat property
   * and running tests with --update-snapshot flag.
   * Example: "nx affected --targets=test --update-snapshot"
   * More info: https://jestjs.io/docs/upgrading-to-jest29#snapshot-format
   */
  snapshotFormat: { escapeString: true, printBasicPrototype: true },
  // `@leancodepl/*` packages (and their deps such as `tiny-invariant`) ship pure
  // ESM ("type": "module"), which Jest does not transform by default because
  // node_modules is ignored. Allow ts-jest to transpile them to CJS.
  transformIgnorePatterns: ["node_modules/(?!(?:@leancodepl/.*|tiny-invariant)/)"],
}
