import { blue, green, grey, orange, petrol, red } from '../constants';

type ColorKey =
  | keyof typeof grey
  | keyof typeof blue
  | keyof typeof petrol
  | keyof typeof red
  | keyof typeof green
  | keyof typeof orange;

type Palette = {
  [category in 'surface' | 'border' | 'content']: {
    default: string;
    light: string;
    medium: string;
    dark: string;
    contrast: string;
  };
} & {
  [category in
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'success'
    | 'informative'
    | 'accent']: {
    default: string;
    light: string;
    medium: string;
    dark: string;
  };
};

export type CustomTheme = {
  palette: Palette;
  colors: {
    [key in ColorKey]: string;
  };
  shadows: {
    none: string;
    0: string;
    0.5: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    '2xl': string;
    inner: string;
  };
  spacing: {
    none: number;
    '6xs': string;
    '5xs': string;
    '4xs': string;
    '3xs': string;
    '2xs': string;
    xs: string;
    m: string;
    s: string;
    l: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    // Legacy
    xxxsmall: string;
    xxsmall: string;
    xsmall: string;
    small: string;
    xmedium: string;
    medium: string;
    gutter: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    xxxlarge: string;
    xxxxlarge: string;
  };
  fontStyles: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    body1Bold: string;
    body1: string;
    body2Bold: string;
    body2: string;
    body3Bold: string;
    body3: string;
    body4Bold: string;
    body4: string;
    link1Bold: string;
    link1: string;
    link2Bold: string;
    link2: string;
    link3Bold: string;
    link3: string;
    button1: string;
    button2: string;
    button3: string;
    // Legacy
    p: string;
    pSmall: string;
    pXSmall: string;
    pXXSmall: string;
    tag: string;
  };
  animations: {
    emphasizedDecelerate: {
      duration: string;
      timingFunction: string;
    };
  };
  breakpoints: {
    mq1: number;
    mq2: number;
    mq3: number;
    mq4: number;
    mq5: number;
    mq6: number;
    // Legacy
    s: number;
    m: number;
    l: number;
    xl: number;
    md: number;
    lg: number;
    xxl: number;
  };
  radius: {
    none: string;
    '6xs': string;
    '5xs': string;
    '4xs': string;
    '3xs': string;
    '2xs': string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    full: string;
  };
  shape: {
    button: string;
    checkbox: string;
    modal: string;
    emptyState: string;
    dropdown: string;
    message: string;
    toast: string;
    tooltip: string;
    progressbar: string;
    accordion: string;
    formField: string;
    segmentedControl: string;
  };
  fontFamily: {
    default: string;
  };
  responsiveFontStyles: { [key: string]: string };
  icons?: 'outlined' | 'rounded';
};

export type Colors = keyof Pick<
  CustomTheme['palette'],
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'informative'
  | 'warning'
  | 'accent'
>;

export type Breakpoints = keyof CustomTheme['breakpoints'];

type FlattenKeys<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${FlattenKeys<T[K]> extends never
        ? ''
        : `.${FlattenKeys<T[K]>}`}`;
    }[keyof T]
  : never;

export type PaletteKeys = FlattenKeys<CustomTheme['palette']>;
