import{j as r}from"./jsx-runtime-CKrituN3.js";import{I as b}from"./Icon-CHFlL13I.js";import{n as a}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{u as f}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";const h=(t,o,e)=>o?`
        border: none;
        background-color: ${e?t.palette.primary.light:t.palette.primary.default};
    `:` 
        border: 1px solid ${t.palette.border.default};
        background-color: ${e?t.palette.base.light:t.palette.base.default};
    `,y=a.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${({theme:t,isChecked:o,isDisabled:e})=>`
    & > div {
      border-radius: ${t.shape.checkbox};
      ${h(t,o,e)}
    }

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
`,g=a.input`
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
`,w=a.label`
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
`,S=({onChange:t,checkboxId:o,children:e,isChecked:l=!1,isDisabled:n=!1,style:i,value:c})=>{const d=o||c,p=d?`checkbox-${d}`:"checkbox-id",s=f(),x=u=>{n||t==null||t(u)};return r.jsxs(y,{"data-testid":p,isChecked:l,isDisabled:n,style:i,children:[r.jsxs($,{children:[r.jsx(g,{checked:l,"data-testid":o,disabled:n,id:p,onChange:x,type:"checkbox",value:c}),l?r.jsx(b,{code:"check",color:s.palette.content.contrast}):null]}),e?r.jsx(w,{htmlFor:p,isChecked:l,isDisabled:n,children:e}):null]})};export{S as C};
