import React from 'react';
import { ThemeProvider, Global } from '@emotion/react';

import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import {
  theme as defaultTheme,
  greenlaneTheme,
  globalStyles,
} from '@dt-ui/react-core';
import { webFonts } from './webFonts';

const GlobalStyles = () => (
  <Global styles={[globalStyles(defaultTheme), ...webFonts]} />
);

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      Default: defaultTheme,
      Greenlane: greenlaneTheme,
    },
    defaultTheme: 'Default',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewMode: 'docs',
    previewTabs: {
      'storybook/docs/panel': {
        index: -1,
      },
      canvas: { title: 'Sandbox' },
    },
    options: {
      storySort: {
        order: ['Contribution Guidelines', 'Foundations', '*'],
      },
    },
    docs: {
      theme: themes.light,
    },
  },
};

export default preview;
