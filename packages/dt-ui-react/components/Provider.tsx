import { ThemeProvider, Global, Theme } from '@emotion/react';
import React from 'react';

import { globalStyles } from '../core';
import { theme as defaultTheme } from '../themes/default';

type ThemeProviderType = {
  theme?: Theme;
  children: React.ReactNode;
};

// React ThemeProvider wrapper
export const Provider = ({
  theme = defaultTheme,
  children,
}: ThemeProviderType) => {
  return (
    <>
      <Global styles={globalStyles(theme)} />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};
