import{n as e}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const l=e.div`
  display: block;
  height: auto;
  width: 100%;
  position: relative;
`,p=e.input`
  ${({theme:t,hasError:o,disabled:a})=>`
    ${t.fontStyles.body2}

    background-color: ${a?t.palette.base.light:t.palette.base.default};
    border-radius: ${t.shape.formField};

    // Change border based on input status
    border: ${o?`1px solid ${t.palette.error.default}`:`1px solid ${t.palette.border.default}`};

    color: ${a?t.palette.content.disabled:t.palette.content.body};
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
`;e.span`
  color: ${({theme:t,hasError:o})=>o?t.palette.error.default:t.palette.content.secondary};
`;const i=e.span`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 24px;
  height: 24px;
`,n=e.div`
  padding-left: 15px;
`;export{i as I,l as T,p as a,n as b};
