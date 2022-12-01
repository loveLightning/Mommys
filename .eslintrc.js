// eslint-disable-next-line @typescript-eslint/no-var-requires
const globalRules = require('../.eslintrc.js')

module.exports = {
  ...globalRules,

  extends: ['@react-native-community', ...globalRules.extends],

  rules: {
    ...globalRules.rules,
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'warn',
    'react-native/no-color-literals': 'error',
    'react-native/no-single-element-style-arrays': 'error',
    'react/sort-comp': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
