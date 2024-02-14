import styled from '@emotion/styled';

import { TagBorder, TagColor, TagSize, TagVariant } from './constants';
import { tagCloseButtonColorStyles } from './TagCloseButton.styled';
import { tagSizeStyles } from './TagSizes.styled';
import { tagVariantColors } from './utils/tagVariantColors';

interface TagStyledProps {
  hasHover: boolean;
  isClickable: boolean;
  isDisabled: boolean;
  isDismissible: boolean;
  variant: TagVariant;
  color: TagColor;
  border: TagBorder;
  size: TagSize;
}

interface TagButtonCloseStyledProps
  extends Pick<TagStyledProps, 'hasHover' | 'variant' | 'color'> {
  disabled: boolean;
}

export const TagStyled = styled.div<TagStyledProps>(
  ({
    theme,
    border,
    isDisabled,
    isClickable,
    isDismissible,
    size,
    variant,
    color,
    hasHover,
  }) => ({
    ...tagSizeStyles(theme, size),
    ...tagVariantColors({ theme, variant, color, hasHover, isDisabled }),

    display: 'flex',
    textTransform: 'uppercase',
    alignItems: 'center',
    maxWidth: 'max-content',
    gap: theme.spacing['5xs'],
    borderRadius: theme.radius[border === 'rounded' ? 's' : 'none'],

    ...((isClickable || isDismissible) && { userSelect: 'none' }),
    ...(isClickable && { cursor: 'pointer' }),
    ...(isDisabled && { cursor: 'not-allowed' }),
  })
);

export const TagButtonCloseStyled = styled.button<TagButtonCloseStyledProps>`
  ${({ theme, variant, color, hasHover, disabled }) => ({
    ...tagCloseButtonColorStyles({
      theme,
      variant,
      color,
      hasHover,
      isDisabled: disabled,
    }),

    display: 'inherit',
    border: 0,
    cursor: 'pointer',

    borderRadius: theme.radius['2xs'],

    ['&:disabled']: { cursor: 'not-allowed' },
  })}
`;
