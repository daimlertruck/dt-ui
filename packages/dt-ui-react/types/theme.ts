export type CustomTheme = {
  animations: {
    emphasizedDecelerate: {
      duration: string;
      timingFunction: string;
    };
  };
  palette: {
    base: {
      default: string;
      light: string;
      dark: string;
    };
    border: {
      light: string;
      default: string;
      contrast: string;
    };
    content: {
      heading: string;
      body: string;
      secondary: string;
      disabled: string;
      contrast: string;
    };
    primary: {
      default: string;
      light: string;
      medium: string;
      dark: string;
      contrast: string;
    };
    secondary: {
      default: string;
      light: string;
      medium: string;
      dark: string;
      contrast: string;
    };
    error: {
      default: string;
      light: string;
      medium: string;
      dark: string;
      contrast: string;
    };
    warning: {
      default: string;
      light: string;
      medium: string;
      dark: string;
      contrast: string;
    };
    success: {
      default: string;
      light: string;
      medium: string;
      dark: string;
      contrast: string;
    };
    informative: {
      default: string;
      light: string;
      medium: string;
      dark: string;
      contrast: string;
    };
    // Legacy
    alpha: {
      error: string;
      errorDark_300: string;
      errorLight_300: string;
      info: string;
      primaryDark_200: string;
      primaryLight_100: string;
      primaryLight_300: string;
      primaryLight_400: string;
      primary: string;
      primaryDark_300: string;
      primaryDark_400: string;
      success: string;
      successDark_300: string;
      warning: string;
      warningDark_300: string;
      neutral: string;
      neutralDark_100: string;
      neutralLight_100: string;
      neutralLight_300: string;
      textSecondary: string;
      textPrimary: string;
    };
  };
  colors: {
    grey_90_: string;

    // Legacy
    black: string;
    blue_60: string;
    blue_65: string;
    blue_70: string;
    blue_80: string;
    blue_90: string;
    blue_100: string;
    blue_200: string;
    blue_300: string;
    blue_400: string;
    blue_500: string;
    gray_10: string;
    gray_20: string;
    gray_30: string;
    gray_40: string;
    gray_50: string;
    gray_60: string;
    gray_70: string;
    gray_80: string;
    gray_90: string;
    gray_100: string;
    gray_200: string;
    gray_300: string;
    green_70: string;
    green_80: string;
    green_90: string;
    green_100: string;
    green_200: string;
    green_300: string;
    green_400: string;
    red_70: string;
    red_80: string;
    red_90: string;
    red_100: string;
    red_200: string;
    red_300: string;
    red_400: string;
    white: string;
    yellow_70: string;
    yellow_80: string;
    yellow_90: string;
    yellow_100: string;
    yellow_200: string;
    yellow_300: string;
    yellow_400: string;
  };
  shadows: {
    0: string;
    0.5: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
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
    modal: string;
    emptyState: string;
    dropdown: string;
    message: string;
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
    alpha: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      body1: string;
      p: string;
      pSmall: string;
      pXSmall: string;
      pXXSmall: string;
      tag: string;
    };
    p: string;
    pSmall: string;
    pXSmall: string;
    pXXSmall: string;
    tag: string;
  };
  breakpoints: {
    s: string;
    m: string;
    l: string;
    xl: string;
    // Legacy
    md: string;
    lg: string;
    xxl: string;
  };
  fontFamily: {
    default: string;
  };
  responsiveFontStyles: { [key: string]: string };
};

export type AlphaColors = keyof CustomTheme['palette']['alpha'];

export type Colors = keyof Pick<
  CustomTheme['palette'],
  'primary' | 'secondary' | 'error' | 'success' | 'informative' | 'warning'
>;

export type Breakpoints = keyof CustomTheme['breakpoints'];

type FlattenKeys<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${FlattenKeys<T[K]> extends never
        ? ''
        : `.${FlattenKeys<T[K]>}`}`;
    }[keyof T]
  : never;

export type PaletteKeys = FlattenKeys<Omit<CustomTheme['palette'], 'alpha'>>;
