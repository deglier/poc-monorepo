module.exports = {
  ...require('config/eslint-next.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    ...require('config/eslint-next.js').rules,
    'import/prefer-default-export': 'off',
    'no-restricted-exports': 'off',
    'react/require-default-props': 'off',
  },
}
