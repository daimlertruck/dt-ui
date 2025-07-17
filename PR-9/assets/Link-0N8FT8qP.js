import{j as e}from"./jsx-runtime-DMAvRu52.js";import{I as $}from"./Icon-BZQueZez.js";import{r as f}from"./index-Dl6G-zuu.js";import{n as m}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const u=m.a`
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
`,k=f.forwardRef(({isDisabled:o,children:r,size:t="medium",dataTestId:l,onClick:a,variant:s,href:i,style:d,icon:n,...c},p)=>{const x={small:"xs",medium:"s",large:"l"};return e.jsxs(u,{"data-testid":l??"link",disabled:o,ref:p,size:t,style:d,variant:s,...!o&&{href:i,onClick:a},...c,children:[e.jsx("span",{children:r}),n?e.jsx($,{code:n,color:"inherit",size:x[t]}):null]})});export{k as L};
