import { CustomTheme as Theme } from '../../../../types';
import { ButtonSize } from '../constants';

export const buttonSizeStyles = (size: ButtonSize, theme: Theme) =>
  ({
    large: `
      ${theme.fontStyles.button1}
      padding: ${theme.spacing['2xs']} ${theme.spacing.s};
    `,
    medium: `
      ${theme.fontStyles.button2}
      padding: ${theme.spacing['3xs']} ${theme.spacing.xs};
    `,
    small: `
      ${theme.fontStyles.button2}
      padding: ${theme.spacing['4xs']} ${theme.spacing['2xs']};
    `,
  }[size]);
