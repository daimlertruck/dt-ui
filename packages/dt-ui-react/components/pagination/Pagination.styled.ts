import styled from '@emotion/styled';

interface ArrowStyledProps {
  disabled?: boolean;
}

interface InputStyledProps {
  hasError?: boolean;
}

export const PaginationStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 48px;
`;

export const LastPageStyled = styled.button`
  ${({ theme }) => `
    background-color: transparent;
    color: ${theme.palette.primary.default};
    border: none;
    cursor: pointer;
  `}
`;

export const ArrowStyled = styled.button<ArrowStyledProps>`
  ${({ theme, disabled }) => `
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: ${theme.palette.base.default};
    border: none;
    border-radius: 3px;
    color: ${
      disabled ? theme.palette.content.body : theme.palette.primary.default
    };
    cursor: ${disabled ? 'default' : 'pointer'};
  `}
`;

export const InputStyled = styled.input<InputStyledProps>`
  ${({ theme, hasError }) => `
    ${theme.fontStyles.pXSmall};
    text-align: center;
    padding: 6px 8px;
    margin: 0px;
    width: 50px;
    height: 32px;
    background-color: ${theme.palette.base.default};
    color: ${theme.palette.content.body};
    border: ${
      hasError
        ? `2px solid ${theme.palette.error.default}`
        : `1px solid ${theme.palette.border.default}`
    };
    border-radius: 3px;

    &:focus {
       ${
         !hasError &&
         `border-bottom: 2px solid ${theme.palette.primary.default}`
       };
    }
  `}
`;
