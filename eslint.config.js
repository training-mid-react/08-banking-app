import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'eslint.config.js'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "react-hooks/exhaustive-deps": 'off',
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "vars": "all",
          "args": "none",
          "ignoreRestSiblings": false
        }
      ],
      "no-multiple-empty-lines": ["error", { "max": 1 }],
    },
  },
)
