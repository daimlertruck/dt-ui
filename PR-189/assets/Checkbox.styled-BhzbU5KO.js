import{n as r}from"./emotion-styled.browser.esm-CRzct0lr.js";const a=(o,t,e)=>t?`
        border: none;
        background-color: ${e?o.palette.primary.light:o.palette.primary.default};
    `:` 
        border: 1px solid ${o.palette.border.default};
        background-color: ${e?o.palette.base.light:o.palette.base.default};
    `,n=r.div`
  display: inline-flex;
  align-items: center;

  ${({theme:o,isChecked:t,isDisabled:e})=>`
    & > div {
      border-radius: ${o.shape.checkbox};
      ${a(o,t,e)}
    }

    &:hover > div {
      ${!e&&!t&&`
         background-color: ${o.palette.primary.light};
         border: 1px solid ${o.palette.primary.default};
      `};
     }
  `}
`,p=r.div`
  height: 24px;
  width: 24px;
  position: relative;
  display: flex;
`,d=r.input`
  cursor: pointer;
  appearance: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;

  &:disabled {
    cursor: not-allowed;
  }
`,i=r.label`
  user-select: none;

  ${({theme:o,isDisabled:t})=>`
    padding-left: ${o.spacing["4xs"]};
    ${o.fontStyles.body2};
    color: ${t?o.palette.content.disabled:o.palette.content.body};
    cursor: ${t?"not-allowed":"pointer"};
  `}
`;export{n as C,p as a,d as b,i as c};
