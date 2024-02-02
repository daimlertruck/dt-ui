import styled from '@emotion/styled';

export const DropdownOptionStyled = styled.li<{ disabled?: boolean }>`
  ${({ theme, disabled }) => `
    ${theme.fontStyles.alpha.pXSmall}
    list-style: none;
    padding: ${theme.spacing.small} ${theme.spacing.xmedium};
    text-overflow: ellipsis;
    overflow-x: hidden;

    &:hover {
      background: ${theme.colors.gray_70};
      cursor: pointer;
    }

    ${
      disabled &&
      `
      opacity: 0.4;
      pointer-events: none;
    `
    }
  `}
`;
