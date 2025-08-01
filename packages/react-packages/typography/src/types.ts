import { PaletteKeys, Theme } from '@dt-dds/react-core';

export type Elements =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'label'
  | 'a';

export type Colors =
  | Extract<keyof Theme['colors'], string>
  | PaletteKeys
  | 'unset'
  | 'inherit';
