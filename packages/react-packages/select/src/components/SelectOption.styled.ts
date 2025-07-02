import styled from '@emotion/styled';

interface SelectOptionProps {
  isHighlighted: boolean;
  isMulti: boolean;
}

interface SelectOptionContentProps {
  isSelected?: boolean;
}

export const SelectOptionStyled = styled.li<SelectOptionProps>`
  display: flex;

  ${({ theme, isMulti, isHighlighted }) => `
    cursor:pointer;
    align-items: center;
    ${!isMulti && `padding: ${theme.spacing['4xs']} ${theme.spacing['2xs']}`};
    gap: ${isMulti ? theme.spacing['4xs'] : theme.spacing['5xs']};
    background-color: ${
      isHighlighted && !isMulti
        ? theme.palette.primary.light
        : theme.palette.surface.contrast
    };

    color: ${theme.palette.content.default};
    ${theme.fontStyles.body2}

    & > label {
      ${isMulti && `padding: ${theme.spacing['4xs']} ${theme.spacing['2xs']}`};
    }
    
    &:hover,&:focus-within {
      background-color: ${theme.palette.primary.light};
    }

    &[aria-disabled="true"] {
      cursor: not-allowed;
      color: ${theme.palette.content.light};
      &:hover {
        background-color: ${theme.palette.surface.contrast};
      }
    }
  `}
`;

export const SelectOptionContentStyled = styled.div<SelectOptionContentProps>`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;

  ${({ theme, isSelected }) => `
    ${theme.fontStyles[isSelected ? 'body2Bold' : 'body2']};
  `}
`;
