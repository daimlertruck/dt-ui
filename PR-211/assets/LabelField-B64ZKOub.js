import{j as s}from"./jsx-runtime-CKrituN3.js";import{n as o}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const f=o.label`
  ${({theme:t})=>t.fontStyles.pSmall}

  color: ${({theme:t,disabled:e,hasError:l})=>e?t.palette.content.disabled:l?t.palette.error.default:t.palette.content.body};
  cursor: inherit;
  font-size: ${({isActive:t})=>t?".75rem":"1rem"};
  left: 15px;
  top: 15px;
  position: absolute;

  transform: ${({isActive:t})=>t?"translateY(-45%)":"translateY(0)"};
  transition: transform 150ms ease-out, font-size 150ms ease-out;
`,c=o.span`
  color: ${({theme:t})=>t.palette.error.default};
`,b=({children:t,isDisabled:e,forId:l,isActive:a=!1,dataTestId:r,style:n,required:i,hasError:d=!1})=>{const p=r??"label-field";return s.jsxs(f,{"data-testid":p,disabled:e,hasError:d,htmlFor:l,isActive:a,style:n,children:[t,i?s.jsx(c,{children:" *"}):null]})};export{b as L};
