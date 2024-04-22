import{j as l}from"./jsx-runtime-CKrituN3.js";import{n as s}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const p=s.label`
  ${({theme:t})=>t.fontStyles.pSmall}

  color: ${({theme:t,disabled:e,hasError:r})=>e?t.palette.content.disabled:r?t.palette.error.default:t.palette.content.body};
  cursor: inherit;
  font-size: ${({isActive:t})=>t?".75rem":"1rem"};
  left: 15px;
  top: 15px;
  position: absolute;

  transform: ${({isActive:t})=>t?"translateY(-45%)":"translateY(0)"};
  transition: transform 150ms ease-out, font-size 150ms ease-out;
`,u=s.span`
  color: ${({theme:t})=>t.palette.error.default};
`,b=({children:t,isDisabled:e,forId:r,isActive:o=!1,dataTestId:a,style:n,isRequired:i,hasError:d=!1})=>{const f=a??"label-field";return l.jsxs(p,{"data-testid":f,disabled:e,hasError:d,htmlFor:r,isActive:o,style:n,children:[t,i?l.jsx(u,{children:" *"}):null]})};export{b as L};
