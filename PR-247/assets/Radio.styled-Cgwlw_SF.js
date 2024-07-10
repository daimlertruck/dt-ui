import{n as d}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const o=d.input`
  ${({theme:e})=>`
    background: ${e.palette.base.default};
    border: 1px solid ${e.palette.border.default};
    border-radius: 50%;
    width: 16px;
    height: 16px;
    appearance: none;
    
    &:disabled {
      background: ${e.palette.base.light};
      pointer-events: none;
    }

    &:disabled + label {
      color: ${e.palette.content.disabled};
    }

    &:checked {
      border-width: 5px;
      border-color: ${e.palette.primary.default};
    }

    &:checked:disabled {
      border-color: ${e.palette.border.default};
    }

    &:checked:before {
      content: '';
      height: 10px;
      width: 10px;
      border-radius: 50%;
      display: block;
    }
  `}
`,a=d.label`
  ${({theme:e})=>`
    ${e.fontStyles.p};
    color: ${e.palette.content.body};
    cursor: inherit;
  `}
`;export{o as R,a};
