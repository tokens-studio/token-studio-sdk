const studioConfig = require('@tokens-studio/configs/eslint');

module.exports = [
	{
		ignores: [
			'dist/',
			'coverage/',
			'storybook-static/',
			'docs/',
			'site/',
			'cypress/',
			// Built artifacts
			'techdocs/',
			'types/',
		],
	},
	...studioConfig,
	{
		rules: {
			'@typescript-eslint/no-namespace': 0,
		},
	},
];
