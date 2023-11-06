import { addDecorator } from '@storybook/react';

import { Provider, theme, greenlaneTheme } from '@dt-ui/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
};

const themes = {
  Default: theme,
  Greenlane: greenlaneTheme,
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'Default',
    toolbar: {
      icon: 'paintbrush',
      items: Object.keys(themes),
      showName: true,
      dynamicTitle: true,
    },
  },
};

addDecorator((story, context) => (
  <Provider theme={themes[context.globals.theme]}>{story()}</Provider>
));
