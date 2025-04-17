import{j as n}from"./jsx-runtime-DMAvRu52.js";import{r as u}from"./index-Dl6G-zuu.js";import"./Box.styled-Bx5NRrR7.js";import"./Typography-B0UZ90zJ.js";import"./Spinner.styled-dhTCcEFU.js";import{B as $}from"./Button.styled-tW2ZLjYf.js";import{n as f}from"./emotion-styled.browser.esm-DpDeK1WQ.js";var r=(t=>(t.Small="small",t.Medium="medium",t.Large="large",t))(r||{});const y=f.a`
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
`,c=$.withComponent("a"),v=u.forwardRef(({isDisabled:t,children:a,isUnderline:l=!0,textSize:o=r.Medium,dataTestId:i,onClick:p,style:m,type:d="text",...s},e)=>n.jsx(n.Fragment,{children:d==="button"?n.jsx(c,{"data-testid":i??"link-button",ref:e,size:o,style:m,variant:"solid",...s,color:"primary",children:a}):n.jsx(y,{"data-testid":i??"link",disabled:t,isUnderline:l,onClick:p,ref:e,style:m,textSize:o,...s,children:a})}));export{v as L,r as a};
