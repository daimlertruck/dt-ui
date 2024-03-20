import{j as a}from"./jsx-runtime-CKrituN3.js";import{T as c}from"./Typography-DeSH24ip.js";import{n as l}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const g=l.div`
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
`,b=l.label`
  position: absolute;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background: ${({theme:e})=>e.palette.base.light};
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
`,x=l.input`
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
    ${({theme:e,disabled:t,checkedColor:o})=>`
      background: ${t?e.palette.base.light:e.palette[o].default};
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
    color: ${({theme:e})=>e.palette.content.disabled};
  }

  &:not(:checked) + label {
    ${({theme:e,disabled:t,uncheckedColor:o})=>`
      background: ${t?e.palette.base.light:e.palette[o].default};
    `}
  }
`,h=({onChange:e,dataTestId:t,children:o,checkedColor:r="success",uncheckedColor:d="secondary",isDisabled:n=!1,isChecked:p=!1})=>{const s=t??"toggle",i=`${s}-checkbox-id`;return a.jsxs(g,{"data-testid":s,children:[a.jsx(x,{checked:p,checkedColor:r,disabled:n,id:i,onChange:e,type:"checkbox",uncheckedColor:d}),a.jsx(b,{htmlFor:i}),o]})};h.Label=({children:e,dataTestId:t})=>a.jsx(c,{color:"content.body","data-testid":t??"toggle-label",dataTestId:"toggle-label",element:"span",fontStyles:"pXXSmall",style:{fontWeight:700},children:e});export{h as T};
