import{n as t}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const p=t.div`
  display: block;
  height: auto;
  width: 100%;
  position: relative;
`,s=t.input`
  ${({theme:o,hasError:i,disabled:l})=>`
    ${o.fontStyles.pSmall}

    background-color: ${l?o.colors.grey_70:o.colors.white};
    border: 1px solid ${o.colors.grey_90};

    // Change border based on input status
    border-bottom: ${i?`2px solid ${o.palette.error}`:`1px solid ${o.colors.grey_90}`};

    color: ${l?o.colors.grey_100:o.colors.grey_300};
    min-width: 198px;
    padding: 20px 15px 5px 15px;
    transition: all 0.2s ease-in-out;
    width: 100%;
    height: 53px;

    &:focus {
      ${!i&&`
          border-bottom: 2px solid ${o.palette.primary};
          outline: none;
        `}
    }
  `}
`,e=t.span`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 24px;
  height: 24px;
  color: ${({theme:o})=>o.palette.error};
`,d=t.div`
  padding-left: 15px;
`;export{e as I,p as T,s as a,d as b};
