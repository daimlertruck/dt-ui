import path, { join, dirname } from 'path';
import { InlineConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const getAbsolutePath = (value: string) => {
  return dirname(require.resolve(join(value, 'package.json')));
};

type PathAlias = {
  [key: string]: string;
};

const resolveComponentsPath = (components: string[]): PathAlias =>
  components.reduce((acc: PathAlias, curr: string) => {
    const keyName = `@dt-ui/react-${curr}`;
    return {
      ...acc,
      [keyName]: path.resolve(
        __dirname,
        `../../../packages/react-packages/${curr}/index.ts`
      ),
    };
  }, {});

const config: StorybookConfig = {
  stories: [
    '../../../packages/dt-ui-react/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/react-packages/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.mdx',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-themes'),
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../static'],
  docs: {
    autodocs: true,
    defaultName: 'Specs',
  },
  viteFinal: async (config: InlineConfig) => {
    if (config.resolve) {
      const components = ['box', 'empty-state', 'toast', 'tooltip'];

      config.resolve.alias = {
        ...config.resolve.alias,
        '@storybook/blocks': getAbsolutePath('@storybook/blocks'),
        '@dt-ui/react': path.resolve(
          __dirname,
          `../../../packages/dt-ui-react/index.ts`
        ),
        ...resolveComponentsPath(components),
      };
    }
    return config;
  },
};

export default config;
