/**
 * Packages: eslint-config-airbnb eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-refresh
 * @see
 * {@link https://www.npmjs.com/package/eslint-config-airbnb}
 * {@link https://github.com/ArnaudBarre/eslint-plugin-react-refresh#eslint-plugin-react-refresh-}
 */
module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],

  plugins: ['react-refresh'],

  rules: {
    /**
     * Occasionally, we encounter situations where the changes made to our
     * component are not reflected on the screen. This can be attributed to
     * certain limitations of fast refresh. However, utilizing this plugin
     * enables us to mitigate these issues effectively.
     */
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    /**
     * Starting from version 17, importing React is no longer mandatory.
     * @see
     * {@link https://reactjs.org/blog/2020/10/20/react-v17.html#new-jsx-transform}
     */
    'react/react-in-jsx-scope': 'off',
  },

  overrides: [
    {
      files: ['**/*.tsx'],

      rules: {
        /**
         * PropTypes is not recommended when working with TypeScript.
         * @see
         * {@link https://react.dev/reference/react/Component#static-proptypes}
         */
        'react/require-default-props': 'off',

        /**
         * With JavaScript, using the spread operator can create uncertainty
         * regarding the contents of props, making it difficult to maintain
         * readability. However, with TypeScript's strong typing system, this
         * concern is reduced as the type of the variable is known, making it
         * easier to ensure code clarity and maintainability.
         * @see
         * {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md}
         * {@link https://www.typescriptlang.org/docs/handbook/interfaces.html}
         */
        'react/jsx-props-no-spreading': 'off',

        /**
         * Initially, this rule was designed to ensure the use of components in
         * JSX files. It is necessary to modify the rule for compatibility with
         * TSX files.
         * @see
         * {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md}
         * {@link https://www.typescriptlang.org/docs/handbook/jsx.html}
         */
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.tsx'],
          },
        ],
      },
    },
  ],
};
