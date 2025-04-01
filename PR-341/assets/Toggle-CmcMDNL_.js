import{j as o}from"./jsx-runtime-CKrituN3.js";import{T as c}from"./Typography-DMDAI9bI.js";import{n as l}from"./emotion-styled.browser.esm-B1le5_Hy.js";const g=l.div`
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
`,x=l.label`
  position: absolute;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background: ${({theme:t})=>t.palette.surface.contrast};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin: 2px;
    background: #ffffff;
    transition: 0.2s;
  }
`,b=l.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 40px;
  height: 20px;
  cursor: pointer;

  &:disabled {
    cursor: auto;
  }

  &:checked + label {
    ${({theme:t,disabled:e,checkedColor:a})=>`
      background: ${e?t.palette[a].light:t.palette[a].default};
    `}

    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      margin-left: 22px;
      transition: 0.2s;
    }
  }
  &:disabled ~ span {
    color: ${({theme:t})=>t.palette.content.light};
  }

  &:not(:checked) + label {
    ${({theme:t,disabled:e,uncheckedColor:a})=>`
      background: ${e?t.palette[a].light:t.palette[a].default};
    `}
  }
`,h=({onChange:t,dataTestId:e,children:a,checkedColor:i="success",uncheckedColor:d="secondary",isDisabled:n=!1,isChecked:p=!1})=>{const s=e??"toggle",r=`${s}-checkbox-id`;return o.jsxs(g,{"data-testid":s,children:[o.jsx(b,{checked:p,checkedColor:i,disabled:n,id:r,onChange:t,type:"checkbox",uncheckedColor:d}),o.jsx(x,{htmlFor:r}),a]})};h.Label=({children:t,dataTestId:e})=>o.jsx(c,{color:"content.default","data-testid":e??"toggle-label",dataTestId:"toggle-label",element:"span",fontStyles:"pXXSmall",style:{fontWeight:700},children:t});export{h as T};
