const nextJest = require('next/jest');

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' });

// Any custom config you want to pass to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@@src/(.*)$': '<rootDir>/src/$1',
    '^@@pages/(.*)$': '<rootDir>/pages/$1',
    '^@@configs$': '<rootDir>/config.ts',
  },
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>'],
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
