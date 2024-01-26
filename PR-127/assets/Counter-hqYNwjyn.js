import{j as n}from"./jsx-runtime-CbCNBOXy.js";import{n as p}from"./emotion-styled.browser.esm-yeljtSWm.js";const r=p.span`
  ${({theme:t,color:e,outlined:d,isLarge:a})=>`
    ${t.fontStyles.tag}
    color: ${e==="disabled"?t.palette.text.contrast:t.palette[e].contrast};
    border: ${t.spacing.none};
    align-items: center;
    justify-content: center;
    display: flex;
    width: ${a?"24px":"16px"};
    height: ${a?"24px":"16px"};
    border-radius: 50%;
    background-color: ${e==="disabled"?t.palette.text.body:t.palette[e].default};

    ${d&&`
        border: 2px solid ${e==="disabled"?t.palette.text.disabled:t.palette[e].default};
        color: ${e==="disabled"?t.palette.text.disabled:t.palette[e].default};
        background-color: ${t.palette.base.default}
      `};
  `}
`,x=({children:t,color:e="informative",dataTestId:d,style:a,outlined:s=!1,isLarge:l=!1})=>n.jsx(r,{color:e,"data-testid":d??"counter",isLarge:l,outlined:s,style:a,children:t});export{x as C};
