import globals from 'globals'
import parserTs from '@typescript-eslint/parser'
import parserYml from "yaml-eslint-parser"
import pluginComments from 'eslint-plugin-eslint-comments'
import pluginJs from '@eslint/js'
import pluginLicenseHeader from 'eslint-plugin-license-header'
import pluginTs from '@typescript-eslint/eslint-plugin'
import pluginYml from 'eslint-plugin-yml'

export default [
  pluginJs.configs.recommended,
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: './tsconfig.json'
      },
      globals: {
        ...globals.jest,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': pluginTs,
      'license-header': pluginLicenseHeader,
      'eslint-comments': pluginComments
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginComments.configs.recommended.rules,
      ...pluginTs.configs["recommended-type-checked"].rules,
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/dot-notation': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/naming-convention': ['error',
        { selector: 'classProperty', modifiers: ['static', 'readonly'], format: ['UPPER_CASE'], leadingUnderscore: 'allow' },
        { selector: 'memberLike', modifiers: ['public'], format: ['snake_case'], leadingUnderscore: 'forbid' },
        { selector: 'memberLike', modifiers: ['private', 'protected'], format: ['snake_case'], leadingUnderscore: 'require' },
        { selector: 'variableLike', format: ['snake_case', 'UPPER_CASE'], leadingUnderscore: 'allow' },
        { selector: 'typeLike', format: ['PascalCase'] },
        { selector: 'objectLiteralProperty', format: null },
        { selector: 'typeProperty', format: null }
      ],
      '@typescript-eslint/no-confusing-void-expression': 'error',
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-invalid-void-type': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/strict-boolean-expressions': ['error',
        {
          allowString: true,
          allowNumber: true,
          allowNullableObject: true,
          allowNullableBoolean: true,
          allowNullableString: false,
          allowNullableNumber: false,
          allowNullableEnum: false,
          allowAny: false,
          allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false
        }
      ],
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'array-callback-return': 'off',
      'new-cap': 'off',
      'no-return-assign': 'error',
      'object-shorthand': 'error',
      'no-constant-condition': 'off',
      'license-header/header': [
        'error',
        [
          '/*',
          '* Copyright OpenSearch Contributors',
          '* SPDX-License-Identifier: Apache-2.0',
          '*',
          '* The OpenSearch Contributors require contributions made to',
          '* this file be licensed under the Apache-2.0 license or a',
          '* compatible open source license.',
          '*/'
        ]
      ],
    }
  },
  ...pluginYml.configs['flat/standard'],
  {
    files: ["**/*.yaml", "**/*.yml"],
    languageOptions: {
      parser: parserYml
    },
    plugins: {
      yml: pluginYml
    },
    rules: {
      'yml/no-empty-document': 'off',
      'yml/quotes': 'off',
      'yml/plain-scalar': 'off'
    }
  }
]
