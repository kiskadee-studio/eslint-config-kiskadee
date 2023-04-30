const plugins = require('./utils/plugins');
const { level0, level1, level2, level3 } = require('./rules/javascript');

module.exports = {
  env: {
    browser: true,
    es2022: true,
    jest: true,
    node: true,
  },

  root: true,

  extends: [plugins.javaScriptAirbnb],

  rules: { ...level0, ...level1 },
};
