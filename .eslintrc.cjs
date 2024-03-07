/** @type import("eslint-define-config").ESLintConfig */
module.exports = {
  root: true,
  ignorePatterns: ["*eslintrc*", "copy.ts"],
  extends: [
    "plugin:@beequeue/base",
    "plugin:@beequeue/typescript",
    "plugin:@beequeue/esm",
  ],
}
