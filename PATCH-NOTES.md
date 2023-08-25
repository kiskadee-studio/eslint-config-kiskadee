## Patch Notes

### Version 3.0.0

- Updated dependencies to latest versions
- Added new plugin `eslint-plugin-jsdoc` to level 2 config
- Reviewed and updated documentation
- Rules changed for config level 3:
  - `no-void`: ***error*** to ***['error', { allowAsStatement: true }]***
  - `@typescript-eslint/explicit-function-return-type`: ***error*** to ***off***

#### Breaking changes (2.0.0 => 3.0.0)

- Install `eslint-plugin-jsdoc` if you are using any level 2 setup.

### Version 2.0.0

- Updated dependencies to latest versions
- Added new plugin `eslint-plugin-react-refresh` to level 2 config
- Reviewed and updated documentation

#### Breaking changes (1.0.0 => 2.0.0)

- Update `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` to `^6.0.0` versions
- For level 2 config, install `eslint-plugin-react-refresh`.

### Version 1.0.0

- Added config for JSON files
- Replaced `eslint-plugin-no-relative-import-paths` with `eslint-plugin-typescript-paths`
- Reviewed and updated documentation

#### Breaking changes (0.0.42 => 1.0.0)

- Remove `eslint-plugin-no-relative-import-paths`. Please install `eslint-plugin-typescript-paths` if you are using any level 2 setup.
