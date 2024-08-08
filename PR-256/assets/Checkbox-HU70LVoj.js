import{j as r}from"./jsx-runtime-CKrituN3.js";import{I as u}from"./Icon-Y_fTWZv7.js";import{r as f}from"./index-CBqU2yxZ.js";import{n as a}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{u as h}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";const b=(t,o,e)=>o?`
        border: none;
        background-color: ${e?t.palette.primary.light:t.palette.primary.default};
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
`,y=a.div`
  height: 24px;
  min-height: 24px;
  width: 24px;
  min-width: 24px;
  position: relative;
  display: flex;
`,$=a.input`
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
`,I=f.forwardRef(({dataTestId:t="checkbox-id",onChange:o,children:e,isChecked:l=!1,isDisabled:n=!1,style:p,...c},i)=>{const s=h(),d=x=>{n||o==null||o(x)};return r.jsxs(g,{"data-testid":t,isChecked:l,isDisabled:n,style:p,children:[r.jsxs(y,{children:[r.jsx($,{checked:l,disabled:n,onChange:d,ref:i,type:"checkbox",...c}),l?r.jsx(u,{code:"check",color:s.palette.content.contrast}):null]}),e?r.jsx(w,{isChecked:l,isDisabled:n,children:e}):null]})});export{I as C};
