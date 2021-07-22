module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint',
        'react-hooks'
    ],
    'extends': [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'settings': {
        'react': {
            'pragma': 'React',
            'version': 'detect'
        }
    },
    'rules': {
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
    }
}
