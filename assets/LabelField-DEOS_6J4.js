import{j as n}from"./jsx-runtime-CKrituN3.js";import{n as r}from"./emotion-styled.browser.esm-CRzct0lr.js";const i=r.label`
  ${({theme:t})=>t.fontStyles.pSmall}

  color: ${({theme:t,disabled:e})=>e?t.palette.content.disabled:t.palette.content.body};
  cursor: inherit;
  font-size: ${({isActive:t})=>t?".75rem":"1rem"};
  left: 15px;
  top: 15px;
  position: absolute;

  transform: ${({isActive:t})=>t?"translateY(-45%)":"translateY(0)"};
  transition: transform 150ms ease-out, font-size 150ms ease-out;
`,p=({children:t,isDisabled:e,forId:s,isActive:o=!1,dataTestId:a})=>{const l=a??"label-field";return n.jsx(i,{"data-testid":l,disabled:e,htmlFor:s,isActive:o,children:t})};export{p as L};
