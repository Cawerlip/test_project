module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'jest': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:i18next/recommended'
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
		'react',
		'i18next'
	],
	'rules': {
		'react/react-in-jsx-scope': 'off',
		'react/jsx-indent': [2, 2],
		'react/jsx-props-no-spreading': 'warn',
		'indent': [2, 2],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['variant', 'data-testid', 'to'] }],
		'linebreak-style': 0,
		'quotes': [
			'warn',
			'single'
		],
		'semi': [
			'warn',
			'never'
		],
	},
	'globals': {
		__IS_DEV__: true,
	},
	'overrides': [
		{
			'env': {
				'node': true
			},
			// 'files': [
			//   '.eslintrc.{js,cjs}'
			// ],
			'parserOptions': {
				'sourceType': 'script'
			},
			'files': ['**/src/**/*.test.{ts,tsx}'],
			'rules': {
				'i18next/no-literal-string': 'off'
			}
		}
	],
}
