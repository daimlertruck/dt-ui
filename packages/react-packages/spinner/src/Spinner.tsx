import { Box } from '@dt-ui/react-box';
import { BaseProps, Theme, PaletteKeys } from '@dt-ui/react-core';
import { Typography } from '@dt-ui/react-typography';
import { useTheme } from '@emotion/react';

import { SpinnerStyled } from './Spinner.styled';
import { SpinnerColorScheme, SpinnerSize } from './types';

export interface SpinnerProps extends Omit<BaseProps, 'children'> {
  size?: SpinnerSize;
  colorScheme?: SpinnerColorScheme;
  loadingText?: string;
}

const spinnerTextColor: Record<SpinnerColorScheme, PaletteKeys> = {
  positive: 'content.default',
  negative: 'content.contrast',
};

const spinnerTextSize: Record<SpinnerSize, keyof Theme['fontStyles']> = {
  small: 'body4',
  medium: 'body3',
  large: 'body3',
  'extra-large': 'body2',
};

export const Spinner = ({
  style,
  dataTestId = 'spinner',
  size = 'medium',
  colorScheme = 'positive',
  loadingText,
}: SpinnerProps) => {
  const theme = useTheme();
  return (
    <Box dataTestId={dataTestId} style={{ margin: 'auto', ...style }}>
      <SpinnerStyled colorScheme={colorScheme} size={size} />
      {loadingText ? (
        <Typography
          color={spinnerTextColor[colorScheme]}
          fontStyles={spinnerTextSize[size]}
          style={{ marginTop: theme.spacing['3xs'] }}
        >
          {loadingText}
        </Typography>
      ) : null}
    </Box>
  );
};
