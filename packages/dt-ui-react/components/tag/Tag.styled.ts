import styled from '@emotion/styled';

import { tagVariantStyles, TagVariant } from './TagVariants.styled';

interface TagStyledProps {
  isClickable: boolean;
  variant: TagVariant;
}

export const TagStyled = styled.span<TagStyledProps>`
  ${({ variant, theme, isClickable }) =>
    tagVariantStyles(variant, theme, isClickable)};

  ${({ theme, isClickable }) => `
    ${theme.fontStyles.tag}
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.5px;
    padding: 4px 6px;
    border-radius: 2px;

    ${
      isClickable &&
      `&:hover {
        cursor: pointer;
      }`
    }    
  `}
`;

export const TagGroupStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const TagButtonCloseStyled = styled.button`
  border: 0;
  cursor: pointer;
  background: transparent;
  align-self: flex-start;
  padding-left: 12px;
`;
