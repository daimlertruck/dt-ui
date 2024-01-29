import { Box } from '@dt-ui/react-box';

import { theme } from '../../themes/default';
import { BaseProps, CustomTheme as Theme } from '../../types';
import { Typography } from '../typography';

import { SpinnerStyled } from './Spinner.styled';
import { SpinnerColorScheme, SpinnerSize } from './types';

export interface SpinnerProps extends Omit<BaseProps, 'children'> {
  size?: SpinnerSize;
  colorScheme?: SpinnerColorScheme;
  loadingText?: string;
}

const spinnerTextColor: Record<
  SpinnerColorScheme,
  keyof Theme['colors'] | keyof Theme['palette']
> = {
  positive: 'textSecondary',
  negative: 'white',
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
