const config = require('./utils/config');
const { level1: jsLevel1, level2: jsLevel2 } = require('./rules/javascript');
const { level1: tsLevel1, level2: tsLevel2 } = require('./rules/typescript');
const { level1: reactLevel1, level2: reactLevel2 } = require('./rules/react');
const {
  level1: reactNativeLevel1,
  level2: reactNativeLevel2,
} = require('./rules/react-native');

module.exports = {
  ...config(2, {
    js: { ...jsLevel1, ...jsLevel2 },
    ts: { ...tsLevel1, ...tsLevel2 },
    react: { ...reactLevel1, ...reactLevel2 },
    reactNative: { ...reactNativeLevel1, ...reactNativeLevel2 },
  }),
};
