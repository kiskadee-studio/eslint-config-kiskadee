module.exports = {
  extends: ['airbnb-base/rules/imports'],

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:import/typescript'],

      rules: {
        /**
         * Allows importing devDependencies in configuration and test files
         */
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              '**/*.config.*',
              '**/*.(spec|test).{ts,tsx}',
              '**/__tests__/*.{ts,tsx}',
            ],
          },
        ],
      },

      settings: {
        /**
         * @see
         * {@link https://github.com/import-js/eslint-plugin-import#typescript}
         */
        'import/resolver': {
          typescript: true,
          node: true,
        },
      },
    },
  ],
};
