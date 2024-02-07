module.exports = {
  ...require('jest-config/jest.config.js'),
  snapshotSerializers: ['@emotion/jest/serializer'],
  moduleNameMapper: {
    '^@dt-ui/react-(.*)$': ['<rootDir>/../$1/index.ts'],
  },
};
