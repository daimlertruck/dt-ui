import styled from '@emotion/styled';

interface DropdownOptionStyledProps {
  disabled?: boolean;
  isSelected?: boolean;
}

export const DropdownOptionStyled = styled.li<DropdownOptionStyledProps>`
  ${({ theme, disabled, isSelected }) => `
    ${theme.fontStyles[isSelected ? 'body2Bold' : 'body2']};
    color: ${theme.palette.content.default};
    list-style: none;
    padding: ${theme.spacing['4xs']} ${theme.spacing['2xs']};
    text-overflow: ellipsis;
    overflow-x: hidden;

    &:hover {
      background: ${
        disabled ? theme.palette.surface.light : theme.palette.primary.light
      };
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
    }

    ${
      disabled &&
      `
        color: ${theme.palette.content.light};
        background: ${theme.palette.surface.light};
      `
    }
  `}
`;
