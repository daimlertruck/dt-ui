import { ThemeProvider, Global } from '@emotion/react';
import React from 'react';

import { globalStyles } from '../core';
import { theme as defaultTheme } from '../themes/default';
import { FontFace, CustomTheme } from '../types';

type ThemeProviderType = {
  theme?: CustomTheme;
  webFonts?: FontFace[];
  children: React.ReactNode;
};

// React ThemeProvider wrapper
export const Provider = ({
  theme = defaultTheme,
  webFonts = [],
  children,
}: ThemeProviderType) => {
  return (
    <>
      <Global styles={[globalStyles(theme), ...webFonts]} />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};
