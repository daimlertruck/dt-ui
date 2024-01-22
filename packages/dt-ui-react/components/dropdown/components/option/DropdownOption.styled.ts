import styled from '@emotion/styled';

export const DropdownOptionStyled = styled.li<{ disabled?: boolean }>`
  ${({ theme, disabled }) => `
    ${theme.fontStyles.body2}
    list-style: none;
    padding: ${theme.spacing['4xs']} ${theme.spacing['2xs']};
    text-overflow: ellipsis;
    overflow-x: hidden;

    &:hover {
      background: ${theme.palette.primaryLight_500};
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
    }

    ${
      disabled &&
      `
      color: ${theme.palette.textTertiary};
      background: ${theme.palette.neutralLight_100};
    `
    }
  `}
`;
