/**
 * config: eslint-config-airbnb-base
 * {@link https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base}
 * {@link https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/index.js}
 */
module.exports = {
  extends: [
    'airbnb-base/rules/best-practices',
    'airbnb-base/rules/errors',
    'airbnb-base/rules/node',
    'airbnb-base/rules/style',
    'airbnb-base/rules/variables',
    'airbnb-base/rules/es6',
    // 'airbnb-base/rules/imports',
    'airbnb-base/rules/strict',
  ],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};
