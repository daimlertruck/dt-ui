import{j as a}from"./jsx-runtime-DMAvRu52.js";import{r as u}from"./index-Dl6G-zuu.js";import"./Box.styled-Bx5NRrR7.js";import"./Typography-lEbB8qsh.js";import"./Spinner.styled-8-Uh7afr.js";import{B as y}from"./Button.styled-Bp3ur7y4.js";import{n as $}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const f=$.a`
  ${({theme:o,disabled:n,isUnderline:l,textSize:t})=>`
    color: ${o.palette.primary.default};
    text-decoration: ${l?"underline":"none"};

    ${n&&`
        opacity: 0.4;
        pointer-events: none;
    
      `};

    ${t==r.Large&&`
        ${o.fontStyles.body1Bold}
      `};

    ${t==r.Medium&&`
        ${o.fontStyles.body2Bold}
      `};

    ${t==r.Small&&`
        ${o.fontStyles.body3Bold}
      `};
  `}
`,c=y.withComponent("a"),k=u.forwardRef(({isDisabled:o,children:n,isUnderline:l=!0,textSize:t=r.Medium,dataTestId:d,onClick:m,style:i,type:p="text",...s},e)=>a.jsx(a.Fragment,{children:p==="button"?a.jsx(c,{"data-testid":d??"link-button",ref:e,size:t,style:i,variant:"solid",...s,color:"primary",children:n}):a.jsx(f,{"data-testid":d??"link",disabled:o,isUnderline:l,onClick:m,ref:e,style:i,textSize:t,...s,children:n})}));var r=(o=>(o.Small="small",o.Medium="medium",o.Large="large",o))(r||{});export{k as L,r as a};
