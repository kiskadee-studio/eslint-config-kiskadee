module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    /**
     * Prettier uses double quotes by default; however, Airbnb and Google style
     * guides recommends single quotes. For this reason, we have chosen to stick
     * with single quotes.
     * @see
     * {@link https://github.com/airbnb/javascript#strings--quotes}
     * {@link https://google.github.io/styleguide/jsguide.html#features-strings-use-single-quotes}
     * {@link https://prettier.io/docs/en/options.html#quotes}
     * {@link https://prettier.io/docs/en/rationale.html#strings}
     * {@link https://github.com/prettier/eslint-plugin-prettier#options}
     */
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
