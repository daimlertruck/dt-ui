import{j as n}from"./jsx-runtime-DMAvRu52.js";import{I as $}from"./Icon-B8gBCtaI.js";import{r as f}from"./index-Dl6G-zuu.js";import{n as u}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const y=u.a`
  ${({theme:o,disabled:t,textSize:l,variant:r="primary"})=>`
    color: ${o.palette[r].default};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: ${o.spacing["5xs"]};

    ${t&&`
        color: ${o.palette[r].light};
        cursor: not-allowed;
      `};

    ${!t&&`
        &:hover > span {
          text-decoration: underline;
        }

        &:active {
          color: ${o.palette[r].dark};
          text-decoration: none;
        }
      `};

    &:focus-visible {
      outline: 2px solid ${o.palette.primary.default};
    }

    ${l=="large"&&`
        ${o.fontStyles.body1Bold}
      `};

    ${l=="medium"&&`
        ${o.fontStyles.body2Bold}
      `};

    ${l=="small"&&`
        ${o.fontStyles.body3Bold}
      `};
  `}
`,k=f.forwardRef(({isDisabled:o,children:t,textSize:l="medium",dataTestId:r,onClick:s,variant:a,href:i,style:d,icon:e,...p},c)=>n.jsxs(y,{"data-testid":r??"link",disabled:o,ref:c,style:d,textSize:l,variant:a,...!o&&{href:i,onClick:s},...p,children:[n.jsx("span",{children:t}),e?n.jsx($,{code:e,color:"inherit",size:l}):null]}));export{k as L};
