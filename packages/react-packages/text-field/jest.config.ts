import type { Config } from 'jest';
import baseConfig from 'jest-config';

const config: Config = {
  ...baseConfig,
  moduleNameMapper: {
    '^@dt-ui/react-(.*)$': ['<rootDir>/../$1/index.ts'],
    '^@dt-ui/react': ['<rootDir>/../../dt-ui-react/index.ts'],
  },
};

export default config;
