import{j as n}from"./jsx-runtime-CKrituN3.js";import{r as u}from"./index-CBqU2yxZ.js";import"./Box.styled-OXY0hm-i.js";import"./Typography-BEz-Klo6.js";import"./Spinner.styled-DLX8sObT.js";import{B as $}from"./Button.styled-BaZIR7EZ.js";import{n as f}from"./emotion-styled.browser.esm-CRzct0lr.js";var r=(t=>(t.Small="small",t.Medium="medium",t.Large="large",t))(r||{});const y=f.a`
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
