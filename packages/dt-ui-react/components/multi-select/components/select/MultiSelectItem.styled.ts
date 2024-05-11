import styled from '@emotion/styled';

interface MultiSelectStyledProps {
  hasError?: boolean;
  isDisabled?: boolean;
}

export const MultiSelectStyled = styled.div<MultiSelectStyledProps>`
  ${({ theme, hasError = false, isDisabled }) => `
    background: ${theme.colors.alpha.white};
    border: 1px solid ${theme.colors.alpha.gray_90};
    border-radius: 3px;
    padding: ${theme.spacing.xsmall} ${theme.spacing.xmedium};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    width: 100%;
    min-height: 60px;
    cursor: pointer;
    
    ${hasError && `border-bottom: 2px solid ${theme.palette.alpha.error}`};

    ${
      isDisabled &&
      `
        pointer-events: none;
        background-color: ${theme.colors.alpha.gray_70};
      `
    }
  `}
`;
