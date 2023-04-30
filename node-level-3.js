const config = require('./utils/config');
const {
  level1: jsLevel1,
  level2: jsLevel2,
  level3: jsLevel3,
} = require('./rules/javascript');
const {
  level1: tsLevel1,
  level2: tsLevel2,
  level3: tsLevel3,
} = require('./rules/typescript');

module.exports = config(3, {
  js: { ...jsLevel1, ...jsLevel2, ...jsLevel3 },
  ts: { ...tsLevel1, ...tsLevel2, ...tsLevel3 },
});
