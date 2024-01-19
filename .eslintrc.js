module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended'
	],
  'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint',
		'react'
	],
	'rules': {
		'react/react-in-jsx-scope': 'off',
    'react/jsx-indent': [2, 2],
    'react/jsx-props-no-spreading': 'warn',
    'indent': [2, 2],
    'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'warn',
			'single'
		],
		'semi': [
			'warn',
			'never'
		]
	}
}
