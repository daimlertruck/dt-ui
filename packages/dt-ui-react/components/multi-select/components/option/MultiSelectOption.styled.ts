import styled from '@emotion/styled';

export const MultiSelectOptionStyled = styled.li<{ disabled?: boolean }>`
  ${({ theme, disabled }) => `
    ${theme.fontStyles.pXSmall}
    list-style: none;
    padding: ${theme.spacing.small} ${theme.spacing.xmedium};
    text-overflow: ellipsis;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 60;


    &:hover {
      background: ${theme.colors.grey_70};
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

export const CloseButtonStyled = styled.button`
  ${({ theme }) => `
    border: 0;
    cursor: pointer;
    background: transparent;
    align-self: flex-start;
    padding-right: 12px;
    padding-top: 12px;
    color: ${theme.colors.grey_90};
    &:hover {
      color: currentColor;
      cursor: pointer;
    }
  `}
`;
