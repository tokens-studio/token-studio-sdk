export default {
	coverageDirectory: '<rootDir>/jest-coverage',
	collectCoverage: true,
	collectCoverageFrom: [
		'<rootDir>/src/**.{js,jsx,ts,tsx}'
	],
	coverageReporters: ['json'],
	coveragePathIgnorePatterns: [
		'!<rootDir>/dist/',
		'!<rootDir>/jest-coverage',
		'!<rootDir>/types/',
		'!*.d.ts'
	],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
	moduleNameMapper: {
		// Yes it should be an array to ensure consistency, but jest does not offer this
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/tests/__mocks__/file-mock.js',
		'.+\\.(css|less|scss|sass|styl)$': 'identity-obj-proxy',
	},
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	reporters: [
		'default',
		[
			'jest-junit',
			{ outputDirectory: '<rootDir>/jest-coverage', outputName: 'junit.xml' }
		]
	],
	testPathIgnorePatterns: [],
	globals: {
		__PATH_PREFIX__: ''
	},
	rootDir: './'
};
