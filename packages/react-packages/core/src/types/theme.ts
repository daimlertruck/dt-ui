export type CustomTheme = {
  palette: {
    surface: {
      default: string;
      light: string;
      medium: string;
      dark: string;
      contrast: string;
    };
    border: {
      light: string;
      default: string;
      dark: string;
      contrast: string;
    };
    content: {
      default: string;
      light: string;
      medium: string;
      dark: string;
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
    accent: {
      default: string;
      light: string;
      medium: string;
      dark: string;
    };
    error: {
      default: string;
      light: string;
      medium: string;
      dark: string;
    };
    warning: {
      default: string;
      light: string;
      medium: string;
      dark: string;
    };
    success: {
      default: string;
      light: string;
      medium: string;
      dark: string;
    };
    informative: {
      default: string;
      light: string;
      medium: string;
      dark: string;
    };
  };
  colors: {
    black: string;
    blue: string;
    blue_05: string;
    blue_10: string;
    blue_20: string;
    blue_30: string;
    blue_40: string;
    blue_50: string;
    blue_60: string;
    blue_70: string;
    blue_80: string;
    blue_90: string;
    grey_05: string;
    grey_10: string;
    grey_20: string;
    grey_30: string;
    grey_40: string;
    grey_50: string;
    grey_60: string;
    grey_70: string;
    grey_80: string;
    grey_90: string;
    grey_100: string;
    green: string;
    green_05: string;
    green_10: string;
    green_20: string;
    green_30: string;
    green_40: string;
    green_50: string;
    green_60: string;
    green_70: string;
    green_80: string;
    green_90: string;
    red: string;
    red_05: string;
    red_10: string;
    red_20: string;
    red_30: string;
    red_40: string;
    red_50: string;
    red_60: string;
    red_70: string;
    red_80: string;
    red_90: string;
    white: string;
    yellow: string;
    yellow_05: string;
    yellow_10: string;
    yellow_20: string;
    yellow_30: string;
    yellow_40: string;
    yellow_50: string;
    yellow_60: string;
    yellow_70: string;
    yellow_80: string;
    yellow_90: string;
    petrol: string;
    petrol_05: string;
    petrol_10: string;
    petrol_20: string;
    petrol_30: string;
    petrol_40: string;
    petrol_50: string;
    petrol_60: string;
    petrol_70: string;
    petrol_80: string;
    petrol_90: string;
    purple: string;
    purple_05: string;
    purple_10: string;
    purple_20: string;
    purple_30: string;
    purple_40: string;
    purple_50: string;
    purple_60: string;
    purple_70: string;
    purple_80: string;
    purple_90: string;
    purple_100: string;
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
    s: string;
    m: string;
    l: string;
    xl: string;
    // Legacy
    md: string;
    lg: string;
    xxl: string;
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

export type PaletteKeys = FlattenKeys<CustomTheme['palette']>;
