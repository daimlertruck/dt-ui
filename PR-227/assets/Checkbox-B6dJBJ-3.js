import{j as r}from"./jsx-runtime-CKrituN3.js";import{I as u}from"./Icon-CHFlL13I.js";import{r as f}from"./index-CBqU2yxZ.js";import{n}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{u as b}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";const h=(t,o,e)=>o?`
        border: none;
        background-color: ${e?t.palette.primary.light:t.palette.primary.default};
    `:` 
        border: 1px solid ${t.palette.border.default};
        background-color: ${e?t.palette.base.light:t.palette.base.default};
    `,y=n.label`
  display: flex;
  align-items: center;
  width: 100%;

  ${({theme:t,isChecked:o,isDisabled:e})=>`
    & > div {
      border-radius: ${t.shape.checkbox};
      ${h(t,o,e)}
    }
    cursor: ${e?"not-allowed":"pointer"};

    &:hover > div {
      ${!e&&!o&&`
         background-color: ${t.palette.primary.light};
         border: 1px solid ${t.palette.primary.default};
      `};
     }
  `}
`,g=n.div`
  height: 24px;
  min-height: 24px;
  width: 24px;
  min-width: 24px;
  position: relative;
  display: flex;
`,$=n.input`
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
`,w=n.span`
  user-select: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;

  ${({theme:t,isDisabled:o})=>`
    padding-left: ${t.spacing["4xs"]};
    ${t.fontStyles.body2};
    color: ${o?t.palette.content.disabled:t.palette.content.body};
  `}
`,I=f.forwardRef(({dataTestId:t="checkbox-id",onChange:o,children:e,isChecked:l=!1,isDisabled:a=!1,style:p,...c},d)=>{const i=b(),s=x=>{a||o==null||o(x)};return r.jsxs(y,{"data-testid":t,isChecked:l,isDisabled:a,style:p,children:[r.jsxs(g,{children:[r.jsx($,{checked:l,disabled:a,onChange:s,ref:d,type:"checkbox",...c}),l?r.jsx(u,{code:"check",color:i.palette.content.contrast}):null]}),e?r.jsx(w,{isChecked:l,isDisabled:a,children:e}):null]})});export{I as C};
