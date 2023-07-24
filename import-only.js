module.exports = {
  extends: ['airbnb-base/rules/imports'],

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:import/typescript'],
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
