/**
 * plugin: eslint-plugin-react-refresh
 * {@link https://github.com/ArnaudBarre/eslint-plugin-react-refresh}
 */
module.exports = {
  plugins: ['react-refresh'],

  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
