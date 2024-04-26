import{j as o}from"./jsx-runtime-CKrituN3.js";import{n as r}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const p=r.label`
  ${({theme:t,isActive:e})=>e?t.fontStyles.body3:t.fontStyles.body2}

  color: ${({theme:t,disabled:e,hasError:l})=>e?t.palette.content.disabled:l?t.palette.error.default:t.palette.content.body};
  cursor: inherit;
  left: 15px;
  top: 15px;
  position: absolute;

  transform: ${({isActive:t})=>t?"translateY(-45%)":"translateY(0)"};
  transition: transform 150ms ease-out, font-size 150ms ease-out;
`,u=r.span`
  ${({theme:t})=>t.fontStyles.body3}
  color: ${({theme:t})=>t.palette.error.default};
`,y=({children:t,isDisabled:e,forId:l,isActive:s=!1,dataTestId:a,style:n,isRequired:d,hasError:i=!1})=>{const f=a??"label-field";return o.jsxs(p,{"data-testid":f,disabled:e,hasError:i,htmlFor:l,isActive:s,style:n,children:[t,d?o.jsx(u,{children:" *"}):null]})};export{y as L};
