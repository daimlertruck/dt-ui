import styled from '@emotion/styled';

export const ProfileSelectStyled = styled.button<{ disabled?: boolean }>`
  ${({ theme, disabled }) => `
    background-color: transparent;
    border: none;
    cursor: ${disabled ? 'default' : 'pointer'};
    display: flex;
    align-items: center;
    gap: 2;

    svg:first-of-type {
      margin-left: ${theme.spacing.small};
    }
  `}
`;
