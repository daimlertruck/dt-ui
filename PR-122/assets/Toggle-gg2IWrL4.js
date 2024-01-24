import{j as r}from"./jsx-runtime-CbCNBOXy.js";import{T as p}from"./Typography-yGibSjxV.js";import{n as s}from"./emotion-styled.browser.esm-yeljtSWm.js";const g=s.div`
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
`,x=s.label`
  position: absolute;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background: ${({theme:e})=>e.colors.grey_100};
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
`,b=s.input`
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
      background: ${t?e.colors.grey_100:e.palette[o]};
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
    color: ${({theme:e})=>e.colors.grey_100};
  }

  &:not(:checked) + label {
    ${({theme:e,disabled:t,uncheckedColor:o})=>`
      background: ${t?e.colors.grey_90:e.palette[o]};
    `}
  }
`,h=({onChange:e,dataTestId:t,children:o,checkedColor:i="success",uncheckedColor:d="neutral",isDisabled:c=!1,isChecked:n=!1})=>{const l=t??"toggle",a=`${l}-checkbox-id`;return r.jsxs(g,{"data-testid":l,children:[r.jsx(b,{checked:n,checkedColor:i,disabled:c,id:a,onChange:e,type:"checkbox",uncheckedColor:d}),r.jsx(x,{htmlFor:a}),o]})};h.Label=({children:e,dataTestId:t})=>r.jsx(p,{color:"grey_200","data-testid":t??"toggle-label",dataTestId:"toggle-label",element:"span",fontStyles:"pXXSmall",style:{fontWeight:700},children:e});export{h as T};
