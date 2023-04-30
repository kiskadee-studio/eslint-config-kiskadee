const config = require('./utils/config');
const { level1: jsLevel1, level2: jsLevel2 } = require('./rules/javascript');
const { level1: tsLevel1, level2: tsLevel2 } = require('./rules/typescript');

module.exports = config(2, {
  js: { ...jsLevel1, ...jsLevel2 },
  ts: { ...tsLevel1, ...tsLevel2 },
});
