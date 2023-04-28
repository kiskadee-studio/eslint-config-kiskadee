const javascriptRules = require("./rules/javascript");
const typescriptRules = require("./rules/typescript");
const reactRules = require("./rules/react");
const config = require("./config");

module.exports = {
  ...config(javascriptRules, typescriptRules, reactRules),
};
