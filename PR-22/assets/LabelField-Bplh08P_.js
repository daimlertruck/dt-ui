import{j as s}from"./jsx-runtime-CB_V9I5Y.js";import{T as i}from"./Typography-BnMs8lqk.js";import{s as p}from"./emotion-styled.browser.esm-DuL_gwYN.js";const u=(t,e,l,o)=>t?o.palette.content.light:e?o.palette.error.default:l?o.palette.content.medium:o.palette.content.default,b=(t,e)=>`${t?e.fontStyles.body3:e.fontStyles.body2}

  left: 12px;
  top: 16px;
  position: absolute;

  transform: ${t?"translateY(-45%)":"translateY(0)"};
  transition: transform 150ms ease-out, font-size 150ms ease-out;
  `,c=p.label`
  ${({theme:t,isActive:e,isFloating:l,disabled:o,hasError:r})=>`
   ${t.fontStyles.body2Bold};

    color: ${u(o,r,l,t)};
    cursor: inherit;

    ${l&&b(e,t)}
  `};
`,S=({children:t,isDisabled:e=!1,isActive:l=!1,dataTestId:o,isRequired:r,hasError:a=!1,isFloating:n=!0,...d})=>{const f=o??"label-field";return s.jsxs(c,{"data-testid":f,disabled:e,hasError:a,isActive:l,isFloating:n,...d,children:[t,r?s.jsx(i,{color:"error.default",element:"span",fontStyles:"body3",children:"*"}):null]})};export{S as L};
