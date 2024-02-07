import { Theme as CustomTheme } from '@dt-ui/react-core';

export * from './src';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
