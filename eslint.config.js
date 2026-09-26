import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist', 'dist-server'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, __BUILD_YEAR__: 'readonly' },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      // No TypeScript and no external consumers of these components — prop-types
      // would be pure boilerplate here.
      'react/prop-types': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  {
    // react-three-fiber renders Three.js objects as lowercase JSX intrinsics
    // (mesh, primitive, ...) with props like `position`/`geometry`/`skeleton`
    // that aren't real DOM attributes — this plugin doesn't know about them.
    files: ['src/models/**/*.jsx', 'src/pages/Contact.jsx'],
    rules: {
      'react/no-unknown-property': 'off',
    },
  },
]
