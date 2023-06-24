const plugins = require('./utils/plugins');

module.exports = {
  overrides: [
    {
      files: ['**/*.json'],

      extends: [plugins.json, plugins.jsonPrettier, plugins.prettier],

      rules: {
        'prettier/prettier': [
          'error',
          {
            files: ['**/*.json'],
            parser: 'json',
          },
        ],
      },
    },
    {
      files: ['**/*.json5'],

      extends: [plugins.json5, plugins.jsonPrettier, plugins.prettier],

      rules: {
        'prettier/prettier': [
          'error',
          {
            files: ['**/*.json5'],
            parser: 'json',
          },
        ],
      },
    },
    {
      files: ['**/*.jsonc'],

      extends: [plugins.jsonc, plugins.jsonPrettier, plugins.prettier],

      rules: {
        'prettier/prettier': [
          'error',
          {
            files: ['**/*.jsonc'],
            parser: 'json',
          },
        ],
      },
    },
  ],
};
