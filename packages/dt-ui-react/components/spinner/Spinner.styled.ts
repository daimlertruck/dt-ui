import { keyframes, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { SpinnerColorScheme, SpinnerSize } from './types';

interface StyledSpinnerProps {
  size: SpinnerSize;
  colorScheme: SpinnerColorScheme;
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

const spinnerSizes: Record<SpinnerSize, string> = {
  small: '32px',
  medium: '48px',
  large: '56px',
  'extra-large': '64px',
};

const spinnerColors = (
  theme: Theme
): Record<SpinnerColorScheme, SpinnerColors> => ({
  positive: {
    main: theme.palette.primary.default,
    background: theme.palette.primary.contrast,
  },
  negative: {
    main: theme.palette.content.contrast,
    background: theme.palette.content.secondary,
  },
});

export const SpinnerStyled = styled.div<StyledSpinnerProps>`
  ${({ theme, size, colorScheme }) => `
    width: ${spinnerSizes[size]};
    height: ${spinnerSizes[size]};
    border: 2px solid ${spinnerColors(theme)[colorScheme].background};
    border-radius: 50%;
    border-top: 2px solid ${spinnerColors(theme)[colorScheme].main};
  `};
  animation: ${spinnerAnimation} 1s cubic-bezier(0.3, 0.1, 0.25, 0.65) 0s
    infinite normal none;
`;
