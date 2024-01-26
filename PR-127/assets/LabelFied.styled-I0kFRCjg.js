import{n as o}from"./emotion-styled.browser.esm-yeljtSWm.js";const a=o.label`
  ${({theme:t})=>t.fontStyles.pSmall}

  color: ${({theme:t,disabled:e})=>e?t.palette.text.disabled:t.palette.text.body};
  cursor: inherit;
  font-size: ${({isActive:t})=>t?".75rem":"1rem"};
  left: 15px;
  top: 15px;
  position: absolute;

  transform: ${({isActive:t})=>t?"translateY(-45%)":"translateY(0)"};
  transition: transform 150ms ease-out, font-size 150ms ease-out;
`;export{a as L};
