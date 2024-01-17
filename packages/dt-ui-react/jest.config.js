module.exports = {
  ...require('jest-config/jest.config.js'),
  snapshotSerializers: ['@emotion/jest/serializer'],
  moduleNameMapper: {
    '@dt-ui/react-box': ['<rootDir>/../react-packages/box/index.ts'],
  },
};
