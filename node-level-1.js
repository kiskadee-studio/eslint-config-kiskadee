const config = require('./utils/config');
const { level1: jsLevel1 } = require('./rules/javascript');
const { level1: tsLevel1 } = require('./rules/typescript');

module.exports = config(1, { js: jsLevel1, ts: tsLevel1 });
