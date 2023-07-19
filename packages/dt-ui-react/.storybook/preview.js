import { addDecorator } from '@storybook/react';

import { Provider } from '../components/Provider';
import { theme } from '../themes/default';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const themes = {
  Default: theme,
}

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
}

addDecorator((story, context) => <Provider theme={themes[context.globals.theme]}>{story()}</Provider>);
