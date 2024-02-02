import { keyframes, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { hexToRgba } from '../../utils';

import { SpinnerTheme, Size } from './types';

interface StyledSpinnerProps {
  size: Size;
  spinnerTheme: SpinnerTheme;
}

interface SpinnerColors {
  main: string;
  background: string;
}

const spinnerAnimation = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinnerSizes: Record<Size, string> = {
  small: '20px',
  large: '74px',
};

const spinnerColors = (theme: Theme): Record<SpinnerTheme, SpinnerColors> => ({
  dark: {
    main: theme.palette.alpha.primary,
    background: theme.palette.alpha.neutralLight_100,
  },
  light: {
    main: theme.colors.white,
    background: hexToRgba(theme.colors.white, 0.4),
  },
});

export const SpinnerStyled = styled.div<StyledSpinnerProps>`
  ${({ theme, size, spinnerTheme }) => `
    width: ${spinnerSizes[size]};
    height: ${spinnerSizes[size]};
    border: 2px solid ${spinnerColors(theme)[spinnerTheme].background};
    border-radius: 50%;
    border-top: 2px solid ${spinnerColors(theme)[spinnerTheme].main};
  `};
  animation: ${spinnerAnimation} 1s cubic-bezier(0.3, 0.1, 0.25, 0.65) 0s
    infinite normal none;
`;
