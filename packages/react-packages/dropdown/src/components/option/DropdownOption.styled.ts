import styled from '@emotion/styled';

export const DropdownOptionStyled = styled.li<{ disabled?: boolean }>`
  ${({ theme, disabled }) => `
    ${theme.fontStyles.body2}
    color: ${theme.palette.content.body};
    list-style: none;
    padding: ${theme.spacing['4xs']} ${theme.spacing['2xs']};
    text-overflow: ellipsis;
    overflow-x: hidden;

    &:hover {
      background: ${
        disabled ? theme.palette.base.light : theme.palette.primary.light
      };
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
    }

    ${
      disabled &&
      `
        color: ${theme.palette.content.disabled};
        background: ${theme.palette.base.light};
      `
    }
  `}
`;
