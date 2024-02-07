import { CustomTheme } from './src/types';

export * from './src';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
