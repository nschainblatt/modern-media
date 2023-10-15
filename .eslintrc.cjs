module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    "semi": [
      2,
      "always"
    ],
    "jsx-quotes": [
      2,
      "prefer-double"
    ],
    "react/jsx-first-prop-new-line": [
      1,
      "multiline-multiprop"
    ],
    "react/jsx-max-props-per-line": [
      1,
      {
          "maximum": 1
      }
    ],
    "react/jsx-closing-bracket-location": [
      1,
      "line-aligned"
    ],
    "react/prop-types": "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
