const config = require('./utils/config');
const { level1: jsLevel1 } = require('./rules/javascript');
const { level1: tsLevel1 } = require('./rules/typescript');
const { level1: reactLevel1 } = require('./rules/react');

module.exports = config(1, {
  js: jsLevel1,
  ts: tsLevel1,
  react: reactLevel1,
});
