import type { Config } from 'jest';
import baseConfig from 'jest-config';

const config: Config = {
  ...baseConfig,
  testEnvironment: 'node',
  setupFilesAfterEnv: undefined,
};

export default config;
