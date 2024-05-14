import{j as r}from"./jsx-runtime-CKrituN3.js";import{I as u}from"./Icon-CHFlL13I.js";import{n as a}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{u as b}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";const f=(t,e,o)=>e?`
        border: none;
        background-color: ${o?t.palette.primary.light:t.palette.primary.default};
    `:` 
        border: 1px solid ${t.palette.border.default};
        background-color: ${o?t.palette.base.light:t.palette.base.default};
    `,h=a.label`
  display: flex;
  align-items: center;
  width: 100%;

  ${({theme:t,isChecked:e,isDisabled:o})=>`
    & > div {
      border-radius: ${t.shape.checkbox};
      ${f(t,e,o)}
    }

    &:hover > div {
      ${!o&&!e&&`
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
`,$=a.span`
  user-select: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;

  ${({theme:t,isDisabled:e})=>`
    padding-left: ${t.spacing["4xs"]};
    ${t.fontStyles.body2};
    color: ${e?t.palette.content.disabled:t.palette.content.body};
    cursor: ${e?"not-allowed":"pointer"};
  `}
`,v=({dataTestId:t="checkbox-id",onChange:e,checkboxId:o,children:p,isChecked:l=!1,isDisabled:n=!1,style:c,value:d})=>{const i=b(),s=x=>{n||e==null||e(x)};return r.jsxs(h,{"data-testid":t,isChecked:l,isDisabled:n,style:c,children:[r.jsxs(y,{children:[r.jsx(g,{checked:l,"data-testid":o,disabled:n,onChange:s,type:"checkbox",value:d}),l?r.jsx(u,{code:"check",color:i.palette.content.contrast}):null]}),p?r.jsx($,{isChecked:l,isDisabled:n,children:p}):null]})};export{v as C};
