const path = require('path');

module.exports = {
  stories: [
    '../../../packages/dt-ui-react/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/react-packages/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-docs',
      options: { transcludeMarkdown: true },
    },
  ],
  framework: '@storybook/react',
  staticDirs: ['../static'],
  features: {
    emotionAlias: false,
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      '@dt-ui/react-box': path.resolve(
        __dirname,
        '../../../packages/react-packages/box/index.ts'
      ),
    };

    return config;
  },
};
