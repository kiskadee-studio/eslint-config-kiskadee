module.exports = {
  extends: ['kiskadee/react-airbnb'],

  rules: {
    /**
     * Establishes a consistent approach to declaring React components using
     * arrow functions, as class components are no longer recommended.
     */
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'function-expression',
      },
    ],

    /**
     * This configuration allows for a simpler way of changing a static string
     * to a dynamic parameter by using braces instead of quotes. Instead of
     * manually changing the quotes to braces when modifying a value, simply
     * wrapping it in braces allows for easier and more efficient updates.
     */
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'always', children: 'never' },
    ],

    /**
     * When a boolean property is set to true, it is more practical to keep
     * the property name without the value. However, omitting the value can
     * cause readability and maintenance issues for the component.
     */
    'react/jsx-boolean-value': ['error', 'always'],

    /**
     * Specifying all dependencies is not always required, and at times, this
     * rule may cause more problems than it solves.
     */
    'react-hooks/exhaustive-deps': 'off',
  },
};
