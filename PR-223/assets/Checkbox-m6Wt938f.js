import{j as r}from"./jsx-runtime-CKrituN3.js";import{I as x}from"./Icon-CHFlL13I.js";import{r as u}from"./index-CBqU2yxZ.js";import{n}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{u as f}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";const b=(t,o,e)=>o?`
        border: none;
        background-color: ${e?t.palette.primary.light:t.palette.primary.default};
    `:` 
        border: 1px solid ${t.palette.border.default};
        background-color: ${e?t.palette.base.light:t.palette.base.default};
    `,h=n.label`
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
`,y=n.div`
  height: 24px;
  min-height: 24px;
  width: 24px;
  min-width: 24px;
  position: relative;
  display: flex;
`,g=n.input`
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
`,$=n.span`
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
`,S=u.forwardRef(({dataTestId:t="checkbox-id",onChange:o,children:e,isChecked:l=!1,isDisabled:a=!1,style:p,...c})=>{const d=f(),i=s=>{a||o==null||o(s)};return r.jsxs(h,{"data-testid":t,isChecked:l,isDisabled:a,style:p,children:[r.jsxs(y,{children:[r.jsx(g,{checked:l,disabled:a,onChange:i,type:"checkbox",...c}),l?r.jsx(x,{code:"check",color:d.palette.content.contrast}):null]}),e?r.jsx($,{isChecked:l,isDisabled:a,children:e}):null]})});export{S as C};
