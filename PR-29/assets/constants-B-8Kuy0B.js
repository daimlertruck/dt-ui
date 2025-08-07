import{j as e}from"./jsx-runtime-CB_V9I5Y.js";import{I as x}from"./Icon-XPmSDfR_.js";import{r as $}from"./index-CTjT7uj6.js";import{s as f}from"./emotion-styled.browser.esm-DuL_gwYN.js";const m=f.a`
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
`,k=$.forwardRef(({isDisabled:o,children:r,size:t="medium",dataTestId:l,onClick:s,variant:a,href:i,style:d,icon:n,...c},p)=>e.jsxs(m,{"data-testid":l??"link",disabled:o,ref:p,size:t,style:d,variant:a,...!o&&{href:i,onClick:s},...c,children:[e.jsx("span",{children:r}),n?e.jsx(x,{code:n,color:"inherit",size:u[t]}):null]})),u={small:"xs",medium:"s",large:"l"};export{k as L};
