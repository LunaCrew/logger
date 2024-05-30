/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['dist'],
  coverageReporters: ['text', ['text', { skipFull: true }]],
  collectCoverageFrom: ['src/**/*.ts', 'index.ts', '!**/node_modules/**'],
  rootDir: '.',
  modulePaths: ['<rootDir>']
};