import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{r as u}from"./index-4g5l5LRQ.js";import{n as $}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import{B as f}from"./Button.styled-9loJxnEX.js";var r=(t=>(t.Small="small",t.Medium="medium",t.Large="large",t))(r||{});const y=$.a`
  ${({theme:t,disabled:a,isUnderline:l,textSize:o})=>`
    color: ${t.palette.primary.default};
    text-decoration: ${l?"underline":"none"};

    ${a&&`
        opacity: 0.4;
        pointer-events: none;
    
      `};

    ${o==r.Large&&`
        ${t.fontStyles.p}
      `};

    ${o==r.Medium&&`
        ${t.fontStyles.pSmall}
      `};

    ${o==r.Small&&`
        ${t.fontStyles.pXXSmall}
      `};
  `}
`,c=f.withComponent("a"),L=u.forwardRef(({isDisabled:t,children:a,isUnderline:l=!0,textSize:o=r.Medium,dataTestId:s,onClick:d,style:e,type:p="text",...i},m)=>n.jsx(n.Fragment,{children:p==="button"?n.jsx(c,{"data-testid":s??"link-button",ref:m,size:o,style:e,variant:"solid",...i,color:"primary",children:a}):n.jsx(y,{"data-testid":s??"link",disabled:t,isUnderline:l,onClick:d,ref:m,style:e,textSize:o,...i,children:a})}));export{L,r as a};
