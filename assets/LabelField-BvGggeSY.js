import{j as r}from"./jsx-runtime-CKrituN3.js";import{T as f}from"./Typography-C0EWJ3ZN.js";import{n as p}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const u=p.label`
  ${({theme:t,isActive:e})=>e?t.fontStyles.body3:t.fontStyles.body2}

  color: ${({theme:t,disabled:e,hasError:o})=>e?t.palette.content.disabled:o?t.palette.error.default:t.palette.content.body};
  cursor: inherit;
  left: 15px;
  top: 15px;
  position: absolute;

  transform: ${({isActive:t})=>t?"translateY(-45%)":"translateY(0)"};
  transition: transform 150ms ease-out, font-size 150ms ease-out;
`,m=({children:t,isDisabled:e,forId:o,isActive:l=!1,dataTestId:s,style:a,isRequired:n,hasError:i=!1})=>{const d=s??"label-field";return r.jsxs(u,{"data-testid":d,disabled:e,hasError:i,htmlFor:o,isActive:l,style:a,children:[t,n?r.jsx(f,{color:"error.default",element:"span",fontStyles:"body3",children:"*"}):null]})};export{m as L};
