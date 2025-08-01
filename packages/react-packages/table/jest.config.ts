import type { Config } from 'jest';
import baseConfig from 'jest-config';

const config: Config = {
  ...baseConfig,
  moduleNameMapper: {
    '^@dt-dds/react-(.*)$': ['<rootDir>/../$1/index.ts'],
  },
};

export default config;
