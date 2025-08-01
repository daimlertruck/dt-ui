import{j as r}from"./jsx-runtime-CB_V9I5Y.js";import{I as u}from"./Icon-XPmSDfR_.js";import{r as f}from"./index-CTjT7uj6.js";import{s as a,u as h}from"./emotion-styled.browser.esm-DuL_gwYN.js";const b=(t,o,e)=>o?`
        border: none;
        background-color: ${e?t.palette.primary.light:t.palette.accent.default};
    `:` 
        border: 1px solid ${t.palette.border.default};
        background-color: ${t.palette.surface.contrast};
    `,g=a.label`
  display: flex;
  align-items: center;
  width: 100%;

  ${({theme:t,isChecked:o,isDisabled:e})=>`
    & > div {
      border-radius: ${t.shape.checkbox};
      ${b(t,o,e)}
    }
    cursor: ${e?"not-allowed":"pointer"};

    &:hover > div {
      ${!e&&!o&&`
         background-color: ${t.palette.primary.light};
         border: 1px solid ${t.palette.primary.default};
      `};
     }
  `}
`,$=a.div`
  height: 24px;
  min-height: 24px;
  width: 24px;
  min-width: 24px;
  position: relative;
  display: flex;
`,y=a.input`
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
`,w=a.span`
  user-select: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;

  ${({theme:t,isDisabled:o})=>`
    padding-left: ${t.spacing["4xs"]};
    ${t.fontStyles.body2};
    color: ${o?t.palette.content.light:t.palette.content.default};
  `}
`,S=f.forwardRef(({dataTestId:t="checkbox-id",onChange:o,children:e,isChecked:l=!1,isDisabled:n=!1,style:c,...p},s)=>{const d=h(),i=x=>{n||o==null||o(x)};return r.jsxs(g,{"data-testid":t,isChecked:l,isDisabled:n,style:c,children:[r.jsxs($,{children:[r.jsx(y,{checked:l,disabled:n,onChange:i,ref:s,type:"checkbox",...p}),l?r.jsx(u,{code:"check",color:d.palette.content.contrast}):null]}),e?r.jsx(w,{isChecked:l,isDisabled:n,children:e}):null]})});export{S as C};
