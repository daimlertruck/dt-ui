import{j as o}from"./jsx-runtime-CbCNBOXy.js";import{T as c}from"./Typography-qT9DMSUX.js";import{n as l}from"./emotion-styled.browser.esm-yeljtSWm.js";const g=l.div`
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
    ${({theme:e,disabled:t,checkedColor:a})=>`
      background: ${t?e.palette.base.light:e.palette[a].default};
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
    color: ${({theme:e})=>e.palette.text.disabled};
  }

  &:not(:checked) + label {
    ${({theme:e,disabled:t,uncheckedColor:a})=>`
      background: ${t?e.palette.base.light:e.palette[a].default};
    `}
  }
`,h=({onChange:e,dataTestId:t,children:a,checkedColor:r="success",uncheckedColor:d="secondary",isDisabled:p=!1,isChecked:n=!1})=>{const s=t??"toggle",i=`${s}-checkbox-id`;return o.jsxs(g,{"data-testid":s,children:[o.jsx(x,{checked:n,checkedColor:r,disabled:p,id:i,onChange:e,type:"checkbox",uncheckedColor:d}),o.jsx(b,{htmlFor:i}),a]})};h.Label=({children:e,dataTestId:t})=>o.jsx(c,{color:"text.body","data-testid":t??"toggle-label",dataTestId:"toggle-label",element:"span",fontStyles:"pXXSmall",style:{fontWeight:700},children:e});export{h as T};
