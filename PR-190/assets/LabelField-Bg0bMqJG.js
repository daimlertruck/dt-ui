import{j as r}from"./jsx-runtime-CKrituN3.js";import{n as i}from"./emotion-styled.browser.esm-CRzct0lr.js";const d=i.label`
  ${({theme:t})=>t.fontStyles.pSmall}

  color: ${({theme:t,disabled:e})=>e?t.palette.content.disabled:t.palette.content.body};
  cursor: inherit;
  font-size: ${({isActive:t})=>t?".75rem":"1rem"};
  left: 15px;
  top: 15px;
  position: absolute;

  transform: ${({isActive:t})=>t?"translateY(-45%)":"translateY(0)"};
  transition: transform 150ms ease-out, font-size 150ms ease-out;
`,f=({children:t,isDisabled:e,forId:s,isActive:o=!1,dataTestId:a,style:l})=>{const n=a??"label-field";return r.jsx(d,{"data-testid":n,disabled:e,htmlFor:s,isActive:o,style:l,children:t})};export{f as L};
