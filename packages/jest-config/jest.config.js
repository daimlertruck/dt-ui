module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testMatch: ['<rootDir>/**/*.test.{tsx,ts}'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'index.ts',
    'types',
    'themes',
    'core',
    'constants',
    '.stories.tsx',
    'dist',
  ],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 75,
      functions: 80,
      lines: 80,
    },
  },
  coverageDirectory: 'jest-coverage',
  reporters: [
    'default',
    [
      'jest-junit',
      { outputDirectory: 'jest-coverage', outputName: 'report.xml' },
    ],
  ],
};
