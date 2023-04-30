const config = require('./config');
const { level1 } = require('./rules/javascript');

module.exports = {
  ...config({ js: { level: 1, rules: level1 } }),
};
