module.exports = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)', '../themes/*.stories.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  staticDirs: ['../static'],
  features: {
    emotionAlias: false,
  },
};
