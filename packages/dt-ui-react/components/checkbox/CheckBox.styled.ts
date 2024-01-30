import styled from '@emotion/styled';

export const CheckboxInputStyled = styled.input`
  ${({ theme }) => `
    appearance: none;
    margin: 0;
    border: 1px solid ${theme.palette.border.default};
    background-color: ${theme.palette.base.default};
    transform: translateY(-0.075em);
    height: 16px;
    width: 16px;
    display: grid;
    place-content: center;
    cursor: pointer;

    &:before {
      content: '';
      width: 0.85em;
      height: 0.85em;
      clip-path: polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%);
      transform: scale(0);
      box-shadow: inset 1em 1em ${theme.palette.base.default};
      background-color: CanvasText;
    }
    
    &:checked::before {
      transform: scale(1);
    }

    &:checked {
      background: ${theme.palette.primary.default};
      border: none;
    }

    &:disabled {
      pointer-events: none;
    }

    &:disabled:checked {
      background-color: ${theme.palette.primary.light};
    }

    &:disabled:not(checked){
      background-color: ${theme.palette.base.light};
    }

    &:disabled:not(checked) ~ label {
      color: ${theme.palette.content.disabled};
      pointer-events: none;
    }
  `}
`;

export const CheckboxLabelStyled = styled.label`
  ${({ theme }) => `
    user-select: none;
    position: relative;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding-left: 8px;
    ${theme.fontStyles.p};
    color: ${theme.palette.content.body};
  `}
`;
