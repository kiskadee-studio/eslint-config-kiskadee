/**
 * config: eslint-config-airbnb
 * {@link https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb}
 *
 * plugin: eslint-plugin-react
 * {@link https://github.com/jsx-eslint/eslint-plugin-react}
 *
 * plugin: eslint-plugin-react-hooks
 * {@link https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks}
 *
 * plugin: eslint-plugin-jsx-a11y
 * {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y}
 *
 * plugin: eslint-plugin-react-refresh
 * {@link https://github.com/ArnaudBarre/eslint-plugin-react-refresh}
 */
module.exports = {
  extends: [
    'kiskadee/react/vanilla/react',
    'kiskadee/react/vanilla/accessibility',
    'kiskadee/react/vanilla/hooks',
    'kiskadee/react/refresh',
  ],
};
