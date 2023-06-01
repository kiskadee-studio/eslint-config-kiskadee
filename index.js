const nodeLevel3 = require('./node-level-3');
const json = require('./json');

nodeLevel3.overrides.push(
  json.overrides[0],
  json.overrides[1],
  json.overrides[2]
);

module.exports = nodeLevel3;
