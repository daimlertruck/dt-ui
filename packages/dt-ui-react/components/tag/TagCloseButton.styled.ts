import { CustomTheme as Theme } from '../../types';

import { TagColor, TagVariant } from './constants';
import { tagVariantColors } from './utils/tagVariantColors';

export const tagCloseButtonColorStyles = ({
  theme,
  variant,
  color,
  hasHover,
  isDisabled,
}: {
  theme: Theme;
  variant: TagVariant;
  color: TagColor;
  hasHover: boolean;
  isDisabled: boolean;
}) => {
  const colors = tagVariantColors({
    theme,
    color,
    variant,
    hasHover,
    isDisabled,
  });

  return {
    backgroundColor: 'transparent',
    color: 'currentColor',
    '&:hover': {
      backgroundColor: colors['&:hover']?.color,
      color: colors['&:hover']?.backgroundColor,
    },
  };
};
