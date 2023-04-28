const { extraJavaScriptRules } = require('./rules/javascript');
const { extraTypeScriptRules } = require('./rules/typescript');
const { extraReactRules } = require('./rules/react');
const config = require('./config');

module.exports = {
  ...config(extraJavaScriptRules, extraTypeScriptRules, extraReactRules),
};
