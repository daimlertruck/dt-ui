import { Box } from '../box';

import { SpinnerStyled } from './Spinner.styled';
import { SpinnerTheme, Size } from './types';

export interface SpinnerProps {
  size?: Size;
  spinnerTheme?: SpinnerTheme;
}

export const Spinner = ({
  size = 'large',
  spinnerTheme = 'dark',
}: SpinnerProps) => {
  return (
    <Box style={{ margin: 'auto' }}>
      <SpinnerStyled size={size} spinnerTheme={spinnerTheme} />
    </Box>
  );
};
