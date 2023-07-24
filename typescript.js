module.exports = {
  root: true,

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],

      /**
       * @see
       * {@link https://typescript-eslint.io/getting-started#step-2-configuration}
       */
      parser: '@typescript-eslint/parser',
      parserOptions: {
        /**
         * @see
         * {@link https://typescript-eslint.io/linting/typed-linting}
         */
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        /**
         * @see
         * {@link https://typescript-eslint.io/linting/typed-linting}
         * {@link https://typescript-eslint.io/linting/typed-linting#specifying-tsconfigs}
         */
        project: true,
      },

      extends: [
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],

      rules: {
        /**
         * Rules disabled due to features already natively supported by TypeScript
         */
        'no-use-before-define': 'off',
        'consistent-return': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
