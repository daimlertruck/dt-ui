import{j as n}from"./jsx-runtime-DMAvRu52.js";import{I as $}from"./Icon-CsXRUzTO.js";import{r as f}from"./index-Dl6G-zuu.js";import{n as x}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const u=x.a`
  ${({theme:o,disabled:r,size:t,variant:l="primary"})=>`
    color: ${o.palette[l].default};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: ${o.spacing["5xs"]};

    ${r&&`
        color: ${o.palette[l].light};
        cursor: not-allowed;
      `};

    ${!r&&`
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

    ${t=="large"&&`
        ${o.fontStyles.body1Bold}
      `};

    ${t=="medium"&&`
        ${o.fontStyles.body2Bold}
      `};

    ${t=="small"&&`
        ${o.fontStyles.body3Bold}
      `};
  `}
`,S=f.forwardRef(({isDisabled:o,children:r,size:t="medium",dataTestId:l,onClick:a,variant:d,href:i,style:s,icon:e,...p},c)=>n.jsxs(u,{"data-testid":l??"link",disabled:o,ref:c,size:t,style:s,variant:d,...!o&&{href:i,onClick:a},...p,children:[n.jsx("span",{children:r}),e?n.jsx($,{code:e,color:"inherit",size:t}):null]}));export{S as L};
