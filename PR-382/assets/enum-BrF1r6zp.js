import{j as n}from"./jsx-runtime-DMAvRu52.js";import{I as m}from"./Icon-B8gBCtaI.js";import{r as u}from"./index-Dl6G-zuu.js";import{n as $}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const y=$.a`
  ${({theme:o,disabled:a,textSize:r,variant:l="primary"})=>`
    color: ${o.palette[l].default};
    text-decoration: none;
    display: inline-flex;
    align-items: center;

    ${a&&`
        color: ${o.palette[l].light};
        cursor: not-allowed;
      `};

    ${!a&&`
        &:hover > span {
          text-decoration: underline;
        }

        &:active {
          color: ${o.palette[l].dark};
          text-decoration: none;
        }
      `};

    i {
      text-decoration: none;
      margin-left: ${o.spacing["5xs"]}
    }

    &:focus-visible {
      outline: 2px solid ${o.palette.primary.default};
    }

    ${r==t.Large&&`
        ${o.fontStyles.body1Bold}
      `};

    ${r==t.Medium&&`
        ${o.fontStyles.body2Bold}
      `};

    ${r==t.Small&&`
        ${o.fontStyles.body3Bold}
      `};
  `}
`,w=u.forwardRef(({isDisabled:o,children:a,textSize:r=t.Medium,dataTestId:l,onClick:s,variant:d,href:i,style:c,icon:e,...p},f)=>n.jsxs(y,{"data-testid":l??"link",disabled:o,ref:f,style:c,textSize:r,variant:d,...!o&&{href:i,onClick:s},...p,children:[n.jsx("span",{children:a}),e?n.jsx(m,{code:e,color:"inherit",size:r}):null]}));var t=(o=>(o.Small="small",o.Medium="medium",o.Large="large",o))(t||{});export{w as L,t as a};
