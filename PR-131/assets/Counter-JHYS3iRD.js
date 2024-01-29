import{j as a}from"./jsx-runtime-vNq4Oc-g.js";import{n as l}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const i=l.span`
  ${({theme:o,color:t,outlined:n,isLarge:r})=>`
    ${o.fontStyles.tag}
    color: ${o.colors.white};
    border: ${o.spacing.none};
    align-items: center;
    justify-content: center;
    display: flex;
    width: ${r?"24px":"16px"};
    height: ${r?"24px":"16px"};
    border-radius: 50%;
    background-color: ${o.palette[t]};

    ${n&&`
        border: 2px solid ${o.palette[t]};
        color: ${o.palette[t]};
        background-color: ${o.colors.white}
      `};
  `}
`,d=({children:o,color:t="info",dataTestId:n,style:r,outlined:e=!1,isLarge:s=!1})=>a.jsx(i,{color:t,"data-testid":n??"counter",isLarge:s,outlined:e,style:r,children:o});export{d as C};
