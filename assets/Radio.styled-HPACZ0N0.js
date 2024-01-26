import{n as r}from"./emotion-styled.browser.esm-yeljtSWm.js";const t=r.input`
  ${({theme:e})=>`
    background: ${e.colors.white};
    border: 1px solid ${e.palette.neutralLight_100};
    border-radius: 50%;
    width: 16px;
    height: 16px;
    appearance: none;
    
    &:disabled {
      background: ${e.palette.neutralLight_300};
      pointer-events: none;
    }

    &:disabled + label {
      color: ${e.palette.neutral};
    }

    &:checked {
      border-width: 5px;
      border-color: ${e.palette.primary};
    }

    &:checked:disabled {
      border-color: ${e.palette.neutralLight_100};
    }

    &:checked:before {
      content: '';
      height: 10px;
      width: 10px;
      border-radius: 50%;
      display: block;
    }
  `}
`,l=r.label`
  ${({theme:e})=>`
    ${e.fontStyles.p};
    color: ${e.colors.grey_200};
    cursor: inherit;
  `}
`,a=r.div`
  ${({direction:e})=>`
    display: flex;
    flex-direction: ${e};
    align-items: center;
    gap: 12px;
  `}
`;export{a as G,t as R,l as a};
