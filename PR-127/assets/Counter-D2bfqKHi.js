import{j as l}from"./jsx-runtime-CbCNBOXy.js";import{n as o}from"./emotion-styled.browser.esm-yeljtSWm.js";const p=o.span`
  ${({theme:t,color:e,outlined:n,isLarge:a})=>`
    ${t.fontStyles.tag}
    color: ${e==="disabled"?t.palette.content.contrast:t.palette[e].contrast};
    border: ${t.spacing.none};
    align-items: center;
    justify-content: center;
    display: flex;
    width: ${a?"24px":"16px"};
    height: ${a?"24px":"16px"};
    border-radius: 50%;
    background-color: ${e==="disabled"?t.palette.content.body:t.palette[e].default};

    ${n&&`
        border: 2px solid ${e==="disabled"?t.palette.content.disabled:t.palette[e].default};
        color: ${e==="disabled"?t.palette.content.disabled:t.palette[e].default};
        background-color: ${t.palette.base.default}
      `};
  `}
`,b=({children:t,color:e="informative",dataTestId:n,style:a,outlined:d=!1,isLarge:s=!1})=>l.jsx(p,{color:e,"data-testid":n??"counter",isLarge:s,outlined:d,style:a,children:t});export{b as C};
