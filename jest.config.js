/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverage: true,
	collectCoverageFrom: [
		'node/**/*.{ts,tsx}'
	],
	coveragePathIgnorePatterns: [
		'node/.*\\.d\\.ts$',
		'node/.*\\.test\\.ts$',
		'node/.*\\.test\\.tsx$',
		'node/.*\\.test\\.js$',
		'node/.*\\.test\\.jsx$',
		'node/.*\\.spec\\.ts$',
		'node/.*\\.spec\\.tsx$',
		'node/.*\\.spec\\.js$',
		'node/.*\\.spec\\.jsx$'
	]
};