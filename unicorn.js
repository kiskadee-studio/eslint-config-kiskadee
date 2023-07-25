module.exports = {
  extends: ['plugin:unicorn/recommended'],

  rules: {
    /**
     * The goal is to preserve kebab-case as the standard naming
     * convention, following Unicorn's recommendation, while making an
     * exception for React components that require PascalCase.
     * @see
     * {@link https://github.com/airbnb/javascript/tree/master/react#naming }
     * {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md}
     * {@link https://stackoverflow.com/questions/2103596/regex-that-matches-camel-and-pascal-case}
     */
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
        },
        ignore: [
          // React components, test, styles, etc
          '^(?:[A-Z][a-z]+)+(\\.[a-z]+)?\\.ts(x)?$',

          // React Hooks
          '^(use)(?:[A-Z][a-z]+)+\\.ts?$',
        ],
      },
    ],

    /**
     * This rule is disabled because the "unicorn/prefer-regexp-test" rule
     * already handles the same matter. Since the context is not exclusive to
     * TypeScript but also applies to EcmaScript, the Unicorn rule is given
     * preference.
     * @see
     * {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md}
     * {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md}
     */
    '@typescript-eslint/prefer-regexp-exec': 'off',
  },
};
