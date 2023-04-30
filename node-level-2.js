const config = require('./config');
const { level1, level2 } = require('./rules/javascript');

module.exports = {
  ...config({ js: { level: 2, rules: { ...level1, ...level2 } } }),
};
