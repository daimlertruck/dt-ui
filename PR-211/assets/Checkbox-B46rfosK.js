import{j as r}from"./jsx-runtime-CKrituN3.js";import{I as f}from"./Icon-CHFlL13I.js";import{n as a}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{u as h}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";const y=(t,o,e)=>o?`
        border: none;
        background-color: ${e?t.palette.primary.light:t.palette.primary.default};
    `:` 
        border: 1px solid ${t.palette.border.default};
        background-color: ${e?t.palette.base.light:t.palette.base.default};
    `,$=a.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${({theme:t,isChecked:o,isDisabled:e})=>`
    & > div {
      border-radius: ${t.shape.checkbox};
      ${y(t,o,e)}
    }

    &:hover > div {
      ${!e&&!o&&`
         background-color: ${t.palette.primary.light};
         border: 1px solid ${t.palette.primary.default};
      `};
     }
  `}
`,g=a.div`
  height: 24px;
  min-height: 24px;
  width: 24px;
  min-width: 24px;
  position: relative;
  display: flex;
`,w=a.input`
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
`,k=a.label`
  user-select: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;

  ${({theme:t,isDisabled:o})=>`
    padding-left: ${t.spacing["4xs"]};
    ${t.fontStyles.body2};
    color: ${o?t.palette.content.disabled:t.palette.content.body};
    cursor: ${o?"not-allowed":"pointer"};
  `}
`,I=({dataTestId:t="checkbox-id",onChange:o,checkboxId:e,children:p,isChecked:l=!1,isDisabled:n=!1,style:s,value:c})=>{const i=e||c,d=i?`checkbox-${i}`:t,x=h(),u=b=>{n||o==null||o(b)};return r.jsxs($,{"data-testid":t,isChecked:l,isDisabled:n,style:s,children:[r.jsxs(g,{children:[r.jsx(w,{checked:l,"data-testid":e,disabled:n,id:d,onChange:u,type:"checkbox",value:c}),l?r.jsx(f,{code:"check",color:x.palette.content.contrast}):null]}),p?r.jsx(k,{htmlFor:d,isChecked:l,isDisabled:n,children:p}):null]})};export{I as C};
