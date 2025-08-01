import type { Config } from 'jest';
import baseConfig from 'jest-config';

const config: Config = {
  ...baseConfig,
  moduleNameMapper: {
    '^@dt-dds/react-(.*)$': ['<rootDir>/../$1/index.ts'],
    '^@dt-dds/react': ['<rootDir>/../../dt-dds-react/index.ts'],
  },
};

export default config;
