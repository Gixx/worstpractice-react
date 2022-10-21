const path = require('path');
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'react-hooks'
    ],
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    parserOptions: {
        project: path.resolve(__dirname, './tsconfig.json'),
        tsconfigRootDir: __dirname,
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',

        'react/no-direct-mutation-state': 'off',
        'react/no-deprecated': 'off',
        'react/no-string-refs': 'off',
        'react/require-render-return': 'off',

        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.jsx', '.tsx'],
            },
        ],

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',

        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ]
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect'
        }
    }
}
