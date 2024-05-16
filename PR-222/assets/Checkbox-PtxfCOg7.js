import{j as r}from"./jsx-runtime-CKrituN3.js";import{I as u}from"./Icon-CHFlL13I.js";import{n as a}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{u as f}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";const b=(t,o,e)=>o?`
        border: none;
        background-color: ${e?t.palette.primary.light:t.palette.primary.default};
    `:` 
        border: 1px solid ${t.palette.border.default};
        background-color: ${e?t.palette.base.light:t.palette.base.default};
    `,h=a.span`
  display: flex;
  align-items: center;
  width: 100%;

  ${({theme:t,isChecked:o,isDisabled:e})=>`
    & > div {
      border-radius: ${t.shape.checkbox};
      ${b(t,o,e)}
    }

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
`,$=a.label`
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
`,S=({dataTestId:t="checkbox-id",onChange:o,checkboxId:e,children:d,isChecked:l=!1,isDisabled:n=!1,style:i,value:p})=>{const c=f(),s=x=>{n||o==null||o(x)};return r.jsxs(h,{"data-testid":t,isChecked:l,isDisabled:n,style:i,children:[r.jsxs(y,{children:[r.jsx(g,{checked:l,"data-testid":e,disabled:n,id:e??p,onChange:s,type:"checkbox",value:p}),l?r.jsx(u,{code:"check",color:c.palette.content.contrast}):null]}),d?r.jsx($,{htmlFor:e??p,isChecked:l,isDisabled:n,children:d}):null]})};export{S as C};
