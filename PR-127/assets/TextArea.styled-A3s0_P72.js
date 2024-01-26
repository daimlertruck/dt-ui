import{n as t}from"./emotion-styled.browser.esm-yeljtSWm.js";const a=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  width: 100%;
`,l=t.textarea`
  ${({theme:e})=>`
    ${e.fontStyles.pSmall}

    background-color: ${e.palette.base.default};
    border: 1px solid ${e.palette.border.default};

    color: ${e.palette.content.body};

    resize: none;
    width: 100%;
    padding: 20px 14px 14px 14px;

    &:focus {
      outline: none !important;
    }
  `}
`;export{a as T,l as a};
