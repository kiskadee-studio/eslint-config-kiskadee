const config = require('./config');
const { level1, level2, level3 } = require('./rules/javascript');

module.exports = {
  ...config({ js: { level: 3, rules: { ...level1, ...level2, ...level3 } } }),
};
