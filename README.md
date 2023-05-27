## Description

Utilizing ESLint, Prettier, and TypeScript together in your projects brings a powerful combination of benefits that enhance code quality, readability, and developer productivity. ESLint enforces best practices and catches potential errors early, while Prettier automatically formats your code for improved readability and consistency. TypeScript adds robust type-checking capabilities, further improving the reliability and maintainability of your codebase.

Having these tools pre-configured and easily integrated into your projects means you can focus on writing great code without worrying about the setup process. With this streamlined setup, your team will be able to work more efficiently and maintain a high standard of code quality across the entire project.

## Installation

First, let's install `ESLint` and `Kiskadee`:

```bash
  npm i -D eslint eslint-config-kiskadee
```

Kiskadee handles three levels of ESLint configuration for each type of project, be it **JavaScript**/**Node**, **React** or **React Native**. Each level represents a set of rules that can be applied to your project, allowing you to choose the level that best suits your needs:

- **Level 1** of Kiskadee provides a solid foundation that uses the recommended settings of each respective plugin for [TypeScript](https://typescript-eslint.io/getting-started/#step-2-configuration), [Airbnb's JavaScript Style Guide](https://www.npmjs.com/package/eslint-config-airbnb-base), and [Prettier](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration). This level is perfect for starting projects with the basics, allowing you to later [configure rules](https://eslint.org/docs/latest/use/configure/rules) to your liking and add other plugins.
- **Level 2** offers a more complete solution, adding the **Unicorn plugin** with over 100 rules, the **Unused Imports plugin** to remove unused imports, and the **No Relative Import Paths plugin** to enforce the use of absolute import paths. This level is ideal for projects that require more extensive rule coverage.
- **Level 3** focuses on adjusting existing rules to find the perfect middle ground between being overly strict or too lenient, promoting **harmony and uniformity among the multiple plugins** used in your project. This level is well-suited for projects that need a finely tuned and balanced set of rules.

With Kiskadee, configuring ESLint, Prettier, and TypeScript in your projects becomes a breeze, as it offers different levels of configuration to cater to your project's specific needs.


## 🔧 ESLint Setup for JavaScript / Node

### 📖 Essential JavaScript Rules - Level 1

- 🧰 **Airbnb: JavaScript Style Guide**
  - _JavaScript Plugin ([eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base))_
  - *Import Plugin ([eslint-plugin-import](https://github.com/import-js/eslint-plugin-import))*
- 🧰 **TypeScript Support**
  - *TypeScript Plugin ([typescript](https://github.com/Microsoft/TypeScript#installing) [@typescript-eslint](https://typescript-eslint.io/getting-started/#step-2-configuration))*
  - *Fixed conflicts among different rules ([eslint-config-kiskadee](https://github.com/kiskadee-studio/eslint-config-kiskadee#installation) [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript))*
- 🧰 **Prettier Support**
  - _Prettier Plugin ([prettier](https://prettier.io/docs/en/install.html) [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration))_
  - *Fixed conflicts among different rules ([eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation))*
- 🧰 **Testing Support**
  - *Vitest Plugin ([vitest](https://vitest.dev/guide/#adding-vitest-to-your-project) [eslint-plugin-vitest](https://github.com/veritem/eslint-plugin-vitest#installation))*

#### Installation

```bash
  npm i -D eslint-config-airbnb-base eslint-plugin-import typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-vitest
```

#### Usage

Create a `.eslintrc.js` file ([or equivalent](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file-formats)) ***at the root*** of your project and extend `kiskadee/node-level-1`:

```javascript
  module.exports = {
    extends: ['kiskadee/node-level-1'],
    rules: {
      // your rules
    },
  };
```

> **Note:** As we use TypeScript by default at all levels, you should have a `tsconfig.json` file ***at the root*** of your project for the ESLint plugin for TypeScript to work properly. If you don't have a **tsconfig.json** file, you can create one with the `tsc --init` command or access the [documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for more details.

### 📖 Great JavaScript Rules - Level 2

- 🔥 **All items from level 1**
- 🧰 **Unicorn Plugin** ([eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn#recommended-config))
  - _More than 100 powerful ESLint rules_
- 🧰 **Unused Imports Plugin** ([eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports#usage))
  - _Finds and removes unused ES6 module imports_
- 🧰 **No Relative Import Paths Plugin** ([eslint-plugin-no-relative-import-paths](https://github.com/MelvinVermeer/eslint-plugin-no-relative-import-paths#configuration))
  - _Enforces the use of absolute import paths_

#### Installation for JavaScript

After installing the dependencies for level 1, then install:

```bash
  npm i -D eslint-plugin-unicorn eslint-plugin-unused-imports eslint-plugin-no-relative-import-paths
```

#### Usage for JavaScript

```javascript
    // .eslintrc.js
    module.exports = {
      extends: ['kiskadee/node-level-2'],
      rules: {
        // your rules
      },
    };
```

### 📖 Kiskadee JavaScript Rules - Level 3

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

> Don't hesitate to start a new issue with suggestions for new plugins or a specific configuration for any of the plugins we already have.


# 🔧 ESLint Setup for React

### 📖 Essential React Rules - Level 1

- 🧰 **Airbnb: React Style Guide**
  - _React and JavaScript Plugin ([eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb-base))_
  - _React Plugin ([eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react))_
  - _React Hooks Plugin ([eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks))_
  - _Import Plugin ([eslint-plugin-import](https://github.com/import-js/eslint-plugin-import))_
  - JSX Accessibility Plugin ([eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y))
- 🧰 **TypeScript Support**
  - _TypeScript Plugin ([typescript](https://github.com/Microsoft/TypeScript#installing) [@typescript-eslint](https://typescript-eslint.io/getting-started/#step-2-configuration))_
  - *Fixed conflicts among different rules ([eslint-config-kiskadee](https://github.com/kiskadee-studio/eslint-config-kiskadee#installation) [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript))*
- 🧰 **Prettier Support**
  - Prettier Plugin ([prettier](https://prettier.io/docs/en/install.html) [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration))
  - _*Fixed conflicts among different rules ([eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation))*_
- 🧰 **Testing Support**
  - *Vitest Plugin ([vitest](https://vitest.dev/guide/#adding-vitest-to-your-project) [eslint-plugin-vitest](https://github.com/veritem/eslint-plugin-vitest#installation))*
  - *Testing Library ([eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library#react))*

#### Installation for React

```bash
  npm i -D eslint-config-airbnb eslint-plugin-import typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-vitest eslint-plugin-testing-library
```

If you are using `React Native`, install this complementary dependency:

```bash
  npm i -D @react-native/eslint-plugin
```

#### Usage level 1 for React

Create a `.eslintrc.js` file ([or equivalent](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file-formats)) ***at the root*** of your project and extend `kiskadee/react-level-1` (or `kiskadee/react-native-level-1`):

```javascript
    // .eslintrc.js
    module.exports = {
      extends: ['kiskadee/react-level-1'], // ['kiskadee/react-native-level-1'] for React Native projects
      rules: {
        // your rules
      },
    };
```

> **Note:** As we use TypeScript by default at all levels, you should have a `tsconfig.json` file ***at the root*** of your project for the ESLint plugin for TypeScript to work properly. If you don't have a **tsconfig.json** file, you can create one with the `tsc --init` command or access the [documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for more details.

### 📖 Great React Rules - Level 2

- 🔥 **All items from level 1**
- 🧰 **Unicorn Plugin** ([eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn#recommended-config))
  - _More than 100 powerful ESLint rules_
- 🧰 **Unused Imports Plugin** ([eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports#usage))
  - _Finds and removes unused ES6 module imports_
- 🧰 **No Relative Import Paths Plugin** ([eslint-plugin-no-relative-import-paths](https://github.com/MelvinVermeer/eslint-plugin-no-relative-import-paths#configuration))
  - _Enforces the use of absolute import paths_

```bash
npm i -D eslint-plugin-unicorn eslint-plugin-unused-imports eslint-plugin-no-relative-import-paths
```

#### Usage level 2 for React

```javascript
    // .eslintrc.js
    module.exports = {
      extends: ['kiskadee/react-level-2'], // ['kiskadee/react-native-level-2'] for React Native projects
      rules: {
        // your rules
      },
    };
```

### 📖 Kiskadee React Rules - Level 3

- 🔥 **All items from level 2**
- 🚀 **A selection of outstanding rules we've recommended, derived from existing plugins**

#### Usage level 3 for React

```javascript
    // .eslintrc.js
    module.exports = {
      extends: ['kiskadee/react-level-3'], // ['kiskadee/react-native-level-3'] for React Native projects
      rules: {
        // your rules
      },
    };
```

> Don't hesitate to start a new issue with suggestions for new plugins or a specific configuration for any of the plugins we already have.


## .editorconfig

Though Prettier excels at standardizing many code formatting aspects, the `.editorconfig` file helps maintain consistency across diverse IDEs and text editors. Some examples of the capabilities offered by EditorConfig include:

1. Setting indentation style (spaces or tabs) and size.
2. Controlling end-of-line (EOL) characters (LF, CR, or CRLF).
3. Managing character encoding (e.g., UTF-8, UTF-16).
4. Ensuring a newline is inserted at the end of a file.
5. Specifying whether to remove trailing whitespace.
6. These settings contribute to a consistent codebase, regardless of the IDE or text editor being used by different team members.

Create a `.editorconfig` file in the project root with the following content:

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

> For Windows users: you may encounter problems when trying to change the line ending in Git. If this happens, try following [these steps](https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings).
