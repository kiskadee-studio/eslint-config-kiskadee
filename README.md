
# Description

This ESLint configuration is the ultimate choice for developers who use ESLint, Airbnb Style Guide, React, React Hooks, Prettier, TypeScript, and Unicorn in their projects. It's designed to ensure adherence to best practices, proper code formatting, and high levels of code security and quality. With this configuration, you'll get the most optimal combination of features for improving code quality in React applications with TypeScript support, all while benefiting from the added security provided by the Unicorn rule set.

## Installation

```bash
    npm i -D eslint eslint-config-kiskadee
```

## 🔧 ESLint Setup for JavaScript / Node

### 📖 Essential Rules - Level 1

- 🧰 **Airbnb: JavaScript Style Guide**
  - *JavaScript Plugin ([eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb-base))*
  - *Import Plugin ([eslint-plugin-import](https://github.com/import-js/eslint-plugin-import))*
- 🧰 **TypeScript Support**
  - *TypeScript Plugin ([typescript](https://github.com/Microsoft/TypeScript#installing) [@typescript-eslint](https://typescript-eslint.io/getting-started/#step-2-configuration))*
  - *Fixed conflicts with ESLint rules (eslint-config-kiskadee)*
- 🧰 **Prettier Support**
  - Prettier Plugin ([prettier](https://prettier.io/docs/en/install.html) [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration))
  - Fixed conflicts with ESLint rules ([eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation))
- 🧰 **Jest Support**
  - *Jest Plugin ([jest](https://github.com/jestjs/jest#getting-started) [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest#recommended))*

```bash
    npm i -D eslint-config-airbnb eslint-plugin-import typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-plugin-prettier eslint-config-prettier jest eslint-plugin-jest
```

```javascript
    // .eslintrc.js
    module.exports = {
      extends: ['kiskadee/node-level-1'],
      rules: {
        // your rules
      },
    };
```

### 📖 Great Rules - Level 2

- 🔥 **All items from level 1**
- 🧰 **Unicorn Plugin** ([eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn#recommended-config))
  - More than 100 powerful ESLint rules
- 🧰 **Unused Imports Plugin** ([eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports#usage))
  - Finds and removes unused ES6 module imports
- 🧰 **No Relative Import Paths Plugin** ([eslint-plugin-no-relative-import-paths](https://github.com/MelvinVermeer/eslint-plugin-no-relative-import-paths#configuration))
  - Enforces the use of absolute import paths

```bash
    npm i -D eslint-plugin-unicorn eslint-plugin-unused-imports eslint-plugin-no-relative-import-paths
```

```javascript
    // .eslintrc.js
    module.exports = {
      extends: ['kiskadee/node-level-2'],
      rules: {
        // your rules
      },
    };
```

### 📖 Kiskadee Rules - Level 3

- 🔥 **All items from level 2**
- 🚀 **A selection of outstanding rules we've recommended, derived from existing plugins**

```javascript
    // .eslintrc.js
    module.exports = {
      extends: ['kiskadee/node-level-3'],
      rules: {
        // your rules
      },
    };
```

Suggest a rule to be changed or added or plugin to be added

# 🔧 ESLint Setup for React

### 📖 Essential Rules - Level 1

- 🧰 **Airbnb: React Style Guide**
  - *JavaScript Plugin ([eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb-base))*
  - *Import Plugin ([eslint-plugin-import](https://github.com/import-js/eslint-plugin-import))*
- 🧰 **TypeScript Support**
  - *TypeScript Plugin ([typescript](https://github.com/Microsoft/TypeScript#installing) [@typescript-eslint](https://typescript-eslint.io/getting-started/#step-2-configuration))*
  - *Fixed conflicts with ESLint rules (eslint-config-kiskadee)*
- 🧰 **Prettier Support**
  - Prettier Plugin ([prettier](https://prettier.io/docs/en/install.html) [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration))
  - Fixed conflicts with ESLint rules ([eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation))
- 🧰 **Jest Support**
  - *Jest Plugin ([jest](https://github.com/jestjs/jest#getting-started) [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest#recommended))*

```bash
    npm i -D eslint-config-airbnb eslint-plugin-import typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-plugin-prettier eslint-config-prettier jest eslint-plugin-jest
```

```javascript
    // .eslintrc.js
    module.exports = {
      extends: ['kiskadee/node-level-1'],
      rules: {
        // your rules
      },
    };
```

### 📖 Great Rules - Level 2

- 🔥 **All items from level 1**
- 🧰 **Unicorn Plugin** ([eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn#recommended-config))
  - More than 100 powerful ESLint rules
- 🧰 **Unused Imports Plugin** ([eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports#usage))
  - Finds and removes unused ES6 module imports
- 🧰 **No Relative Import Paths Plugin** ([eslint-plugin-no-relative-import-paths](https://github.com/MelvinVermeer/eslint-plugin-no-relative-import-paths#configuration))
  - Enforces the use of absolute import paths

```bash
    npm i -D eslint-plugin-unicorn eslint-plugin-unused-imports eslint-plugin-no-relative-import-paths
```

```javascript
    // .eslintrc.js
    module.exports = {
      extends: ['kiskadee/node-level-2'],
      rules: {
        // your rules
      },
    };
```

### 📖 Kiskadee Rules - Level 3

- 🔥 **All items from level 2**
- 🚀 **A selection of outstanding rules we've recommended, derived from existing plugins**

```javascript
    // .eslintrc.js
    module.exports = {
      extends: ['kiskadee/node-level-3'],
      rules: {
        // your rules
      },
    };
```

Suggest a rule to be changed or added or plugin to be added

## .editorconfig

Though Prettier excels at standardizing many code formatting aspects, the .editorconfig file helps maintain consistency across diverse IDEs and text editors. Some examples of the capabilities offered by EditorConfig include:

1. Setting indentation style (spaces or tabs) and size.
2. Controlling end-of-line (EOL) characters (LF, CR, or CRLF).
3. Managing character encoding (e.g., UTF-8, UTF-16).
4. Ensuring a newline is inserted at the end of a file.
5. Specifying whether to remove trailing whitespace.
6. These settings contribute to a consistent codebase, regardless of the IDE or text editor being used by different team members.

Create a .editorconfig file in the project root with the following content:

```bash
  root = true

  [*]
  charset = utf-8
  indent_style = space
  indent_size = 2
  end_of_line = lf
  insert_final_newline = true
  trim_trailing_whitespace = true
```