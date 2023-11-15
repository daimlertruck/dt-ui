module.exports = {
  stories: [
    '../../../packages/dt-ui-react/**/*.stories.@(js|jsx|ts|tsx|mdx)',
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
};
