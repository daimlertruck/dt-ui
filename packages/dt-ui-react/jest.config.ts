import type { Config } from 'jest';
import baseConfig from 'jest-config';

const config: Config = {
  ...baseConfig,
  moduleNameMapper: {
    '^@dt-ui/react-(.*)$': ['<rootDir>/../react-packages/$1/index.ts'],
    '^@dt-ui/react': ['<rootDir>/index.ts'],
  },
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
};
export default config;
