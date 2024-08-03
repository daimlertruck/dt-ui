import{n as o}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const p=o.div`
  display: block;
  height: auto;
  width: 100%;
  position: relative;
`,d=o.input`
  ${({theme:t,hasError:a,disabled:e})=>`
    ${t.fontStyles.body2}

    background-color: ${t.palette.surface.contrast};
    border-radius: ${t.shape.formField};

    // Change border based on input status
    border: ${a?`1px solid ${t.palette.error.default}`:`1px solid ${e?t.palette.border.light:t.palette.border.default}`};

    color: ${e?t.palette.content.light:t.palette.content.default};
    min-width: 198px;
    padding: 20px 15px 5px 15px;
    transition: all 0.2s ease-in-out;
    width: 100%;
    height: 53px;

    &:focus {
      outline: 1px solid ${t.palette.primary.default};
      border: 1px solid transparent;
    }
  `}
`,l=o.span`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 24px;
  height: 24px;
`,n=o.div`
  padding-left: 15px;
`;export{l as I,p as T,d as a,n as b};
