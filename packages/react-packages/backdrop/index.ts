import { CustomTheme } from '../../dt-ui-react/types';

export * from './src';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
