import{j as n}from"./jsx-runtime-DMAvRu52.js";import{r as u}from"./index-Dl6G-zuu.js";import"./Box.styled-Bx5NRrR7.js";import"./Typography-BfOL4XXq.js";import"./Spinner.styled-DlwfXPaH.js";import{B as c}from"./Button.styled-Bp3ur7y4.js";import{n as $}from"./emotion-styled.browser.esm-DpDeK1WQ.js";var r=(t=>(t.Small="small",t.Medium="medium",t.Large="large",t))(r||{});const f=$.a`
  ${({theme:t,disabled:a,isUnderline:l,textSize:o})=>`
    color: ${t.palette.accent.default};
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
`,y=c.withComponent("a"),v=u.forwardRef(({isDisabled:t,children:a,isUnderline:l=!0,textSize:o=r.Medium,dataTestId:e,onClick:p,style:i,type:d="text",...m},s)=>n.jsx(n.Fragment,{children:d==="button"?n.jsx(y,{"data-testid":e??"link-button",ref:s,size:o,style:i,variant:"solid",...m,color:"primary",children:a}):n.jsx(f,{"data-testid":e??"link",disabled:t,isUnderline:l,onClick:p,ref:s,style:i,textSize:o,...m,children:a})}));export{v as L,r as a};
