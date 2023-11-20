/** @type {import('jest').Config} */
const config = {
  verbose: true,
  preset: "@shelf/jest-mongodb",
  watchPathIgnorePatterns: ["<rootDir>/globalConfig.json"],
  testEnvironment: 'node',
  testMatch: ["**/*test.js?(x)"],
};

module.exports = config;
