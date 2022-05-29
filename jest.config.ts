import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: [
      '<rootDir>/setup-jest.ts'
    ],
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/dist/'
    ],
    transformIgnorePatterns: [
      'node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)'
    ],
    globals: {
      'ts-jest': {
        tsсonfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
        diagnostics: false
      }
    }
  };
};
