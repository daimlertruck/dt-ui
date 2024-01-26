import{n as e}from"./emotion-styled.browser.esm-MfHNkeEy.js";const d=e.div`
  display: block;
  height: auto;
  width: 100%;
  position: relative;
`,p=e.input`
  ${({theme:t,hasError:o,disabled:l})=>`
    ${t.fontStyles.pSmall}

    background-color: ${l?t.palette.base.light:t.palette.base.default};
    border: 1px solid ${t.palette.border.default};

    // Change border based on input status
    border-bottom: ${o?`2px solid ${t.palette.error.default}`:`1px solid ${t.palette.border.default}`};

    color: ${l?t.palette.content.disabled:t.palette.content.body};
    min-width: 198px;
    padding: 20px 15px 5px 15px;
    transition: all 0.2s ease-in-out;
    width: 100%;
    height: 53px;

    &:focus {
      ${!o&&`
          border-bottom: 2px solid ${t.palette.primary.default};
          outline: none;
        `}
    }
  `}
`,i=e.span`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 24px;
  height: 24px;
  color: ${({theme:t})=>t.palette.error.default};
`,n=e.div`
  padding-left: 15px;
`;export{i as I,d as T,p as a,n as b};
