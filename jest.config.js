/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['src'],
  coveragePathIgnorePatterns: ['<rootDir>/dist', 'src/util/const.ts', 'src/tasks/mock.ts', 'src/types.d.ts'],
};
