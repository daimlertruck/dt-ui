import { theme } from '../../themes/default';
import { CustomTheme as Theme } from '../../types';
import { Box } from '../box';
import { Typography } from '../typography';

import { SpinnerStyled } from './Spinner.styled';
import { SpinnerColorScheme, SpinnerSize } from './types';

export interface SpinnerProps {
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
  size = 'medium',
  colorScheme = 'positive',
  loadingText,
}: SpinnerProps) => {
  return (
    <Box style={{ margin: 'auto' }}>
      <SpinnerStyled size={size} colorScheme={colorScheme} />
      {loadingText && (
        <Typography
          style={{ marginTop: theme.spacing['3xs'] }}
          fontStyles={spinnerTextSize[size]}
          color={spinnerTextColor[colorScheme]}
        >
          {loadingText}
        </Typography>
      )}
    </Box>
  );
};
