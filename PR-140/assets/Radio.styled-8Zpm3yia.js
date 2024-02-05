import{n as t}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const o=t.input`
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
`,a=t.label`
  ${({theme:e})=>`
    ${e.fontStyles.p};
    color: ${e.palette.content.body};
    cursor: inherit;
  `}
`,r=t.div`
  ${({direction:e})=>`
    display: flex;
    flex-direction: ${e};
    align-items: center;
    gap: 12px;
  `}
`;export{r as G,o as R,a};
