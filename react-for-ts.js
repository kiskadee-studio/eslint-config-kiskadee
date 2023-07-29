module.exports = {
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
