// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
	verbose: true,
	moduleNameMapper: {
		/* Handle CSS imports (with CSS modules)
        https://jestjs.io/docs/webpack#mocking-css-modules */
		"^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

		/* Handle component imports with @ */
		"^@components(.*)$": "<rootDir>/components$1",
		"^@store(.*)$": "<rootDir>/store$1",
		"^@utils(.*)$": "<rootDir>/utils$1",
	},
	testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
	testEnvironment: "jsdom",
	transform: {
		/* Use babel-jest to transpile tests with the next/babel preset
        https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
		"^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
	},
	transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
	collectCoverage: true,
	coverageReporters: ["lcov", "text", "text-summary"],
	resetMocks: true,
	setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
};

module.exports = config;
