import styled from '@emotion/styled';

export const RadioInputStyled = styled.input`
  ${({ theme }) => `
    background: ${theme.palette.base.default};
    border: 1px solid ${theme.palette.border.default};
    border-radius: 50%;
    width: 16px;
    height: 16px;
    appearance: none;
    
    &:disabled {
      background: ${theme.palette.base.light};
      pointer-events: none;
    }

    &:disabled + label {
      color: ${theme.palette.content.disabled};
    }

    &:checked {
      border-width: 5px;
      border-color: ${theme.palette.primary.default};
    }

    &:checked:disabled {
      border-color: ${theme.palette.border.default};
    }

    &:checked:before {
      content: '';
      height: 10px;
      width: 10px;
      border-radius: 50%;
      display: block;
    }
  `}
`;

export const RadioLabelStyled = styled.label`
  ${({ theme }) => `
    ${theme.fontStyles.p};
    color: ${theme.palette.content.body};
    cursor: inherit;
  `}
`;
