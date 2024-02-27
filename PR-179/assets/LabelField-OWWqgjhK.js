import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{n as r}from"./emotion-styled.browser.esm-QTPHyGVR.js";const i=r.label`
  ${({theme:t})=>t.fontStyles.pSmall}

  color: ${({theme:t,disabled:e})=>e?t.palette.content.disabled:t.palette.content.body};
  cursor: inherit;
  font-size: ${({isActive:t})=>t?".75rem":"1rem"};
  left: 15px;
  top: 15px;
  position: absolute;

  transform: ${({isActive:t})=>t?"translateY(-45%)":"translateY(0)"};
  transition: transform 150ms ease-out, font-size 150ms ease-out;
`,d=({children:t,isDisabled:e,forId:s,isActive:o=!1,dataTestId:l})=>{const a=l??"label-field";return n.jsx(i,{"data-testid":a,disabled:e,htmlFor:s,isActive:o,children:t})},f=d;export{f as L};
