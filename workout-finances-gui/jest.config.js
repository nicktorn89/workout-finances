const { defaults } = require('jest-config');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
};