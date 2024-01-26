import{n as o}from"./emotion-styled.browser.esm-yeljtSWm.js";const t=o.input`
  ${({theme:e})=>`
    appearance: none;
    margin: 0;
    border: 1px solid ${e.palette.neutralLight_100};
    background-color: ${e.colors.white};
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
      box-shadow: inset 1em 1em ${e.colors.white};
      background-color: CanvasText;
    }
    
    &:checked::before {
      transform: scale(1);
    }

    &:checked {
      background: ${e.palette.primary};
      border: none;
    }

    &:disabled {
      pointer-events: none;
    }

    &:disabled:checked {
      background-color: ${e.palette.neutralLight_100};
    }

    &:disabled:not(checked){
      background-color: ${e.palette.neutralLight_300};
    }

    &:disabled:not(checked) ~ label {
      color: ${e.palette.neutral};
      pointer-events: none;
    }
  `}
`,r=o.label`
  ${({theme:e})=>`
    user-select: none;
    position: relative;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding-left: 8px;
    ${e.fontStyles.p};
    color: ${e.colors.grey_200};
  `}
`;export{t as C,r as a};
