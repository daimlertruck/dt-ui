import{j as n}from"./jsx-runtime-DMAvRu52.js";import{I as $}from"./Icon-B8gBCtaI.js";import{r as f}from"./index-Dl6G-zuu.js";import{n as m}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const y=m.a`
  ${({theme:o,disabled:t,textSize:r,variant:l="primary"})=>`
    color: ${o.palette[l].default};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: ${o.spacing["5xs"]};

    ${t&&`
        color: ${o.palette[l].light};
        cursor: not-allowed;
      `};

    ${!t&&`
        &:hover > span {
          text-decoration: underline;
        }

        &:active {
          color: ${o.palette[l].dark};
          text-decoration: none;
        }
      `};

    &:focus-visible {
      outline: 2px solid ${o.palette.primary.default};
    }

    ${r==a.Large&&`
        ${o.fontStyles.body1Bold}
      `};

    ${r==a.Medium&&`
        ${o.fontStyles.body2Bold}
      `};

    ${r==a.Small&&`
        ${o.fontStyles.body3Bold}
      `};
  `}
`,w=f.forwardRef(({isDisabled:o,children:t,textSize:r=a.Medium,dataTestId:l,onClick:s,variant:d,href:i,style:p,icon:e,...c},u)=>n.jsxs(y,{"data-testid":l??"link",disabled:o,ref:u,style:p,textSize:r,variant:d,...!o&&{href:i,onClick:s},...c,children:[n.jsx("span",{children:t}),e?n.jsx($,{code:e,color:"inherit",size:r}):null]}));var a=(o=>(o.Small="small",o.Medium="medium",o.Large="large",o))(a||{});export{w as L,a};
