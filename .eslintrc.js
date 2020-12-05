// const path = require('path');

module.exports = {
	'parser': 'babel-eslint',
	'parserOptions': {
		'sourceType': 'module',
		'allowImportExportEverywhere': true
	},
	'env': {
		'es6': true,
		'jest': true
	},
	'rules': {
		'prettier/prettier': 0,
		'max-len': ['error', 180],
		'indent': [
			'error',
			'tab'
		],
		'no-tabs': 'off',
		'quotes': [
			'error',
			'single'
		],
		'comma-dangle': ['error', 'never'],
		'no-shadow': [ 'error' ],
		'object-curly-spacing': ['error', 'never']
	},
	'overrides': [
		{
		  'files': ['**/*apollo.config.js'], // Or *.test.js
		  'rules': {
				'max-len': ['error', 300],
				'quotes': [
					'error',
					'double'
				],
				'indent': [
					'off',
					'tab'
				]
		  }
		}
	  ]
};

