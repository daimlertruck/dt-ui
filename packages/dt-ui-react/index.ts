import '@emotion/react';
import { CustomTheme } from './types';
// Core styles
export * from './core';

// Themes
export { theme } from './themes/default';
export { greenlaneTheme } from './themes/greenlane';
export type { CustomTheme as Theme, BaseProps, Colors } from './types';

// Components
export * from './components/Provider';
export * from './components/buttons';
export * from './components/nav';
export * from './components/nav-container';
export * from './components/dropdown';
export * from './components/header';
export * from './components/profile';
export * from './components/nav-item';
export * from './components/grid';
export * from './components/card';
export * from './components/table';
export * from './components/tag';
export * from './components/form';
export * from './components/footer';
export * from './components/link';
export * from './components/divider';
export * from './components/breadcrumb';
export * from './components/toast';
export * from './components/modal';
export * from './components/avatar';
export * from './components/tooltip';
export * from './components/pill';
export * from './components/counter';
export * from './components/list';
export * from './components/description-list';
export * from './components/alert';
export * from './components/pagination';
export * from './components/typography';
export * from './components/box';
export * from './components/tabs';
export * from './components/spinner';
export * from './components/stepper';
export * from './components/checkbox';
export * from './components/radio';
export * from './components/multi-select';

//utils
export { debounce, useClickOutside } from './utils/index';
export { ListStyleType } from './utils/constants';
export * from './utils/testingUtils';

//hooks
export * from './hooks';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends CustomTheme {}
}
