import{j as c}from"./jsx-runtime-DMAvRu52.js";import{r as p}from"./index-Dl6G-zuu.js";import{n as u}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const f=u.a`
  ${({theme:o,disabled:a,textSize:r,variant:t="primary"})=>`
    color: ${o.palette[t].default};
    text-decoration: none;

    ${a&&`
        color: ${o.palette[t].light};
        cursor: not-allowed;
      `};

    ${!a&&`
        &:hover {
          text-decoration: underline;
        }

        &:active {
          color: ${o.palette[t].dark};
          text-decoration: none;
        }
      `};

    &:focus-visible {
      outline: 2px solid ${o.palette.border.dark};
    }

    ${r==l.Large&&`
        ${o.fontStyles.body1Bold}
      `};

    ${r==l.Medium&&`
        ${o.fontStyles.body2Bold}
      `};

    ${r==l.Small&&`
        ${o.fontStyles.body3Bold}
      `};
  `}
`,b=p.forwardRef(({isDisabled:o,children:a,textSize:r=l.Medium,dataTestId:t,onClick:d,variant:e,href:n,style:s,...i},$)=>c.jsx(f,{"data-testid":t??"link",disabled:o,ref:$,style:s,textSize:r,variant:e,...!o&&{href:n,onClick:d},...i,children:a}));var l=(o=>(o.Small="small",o.Medium="medium",o.Large="large",o))(l||{});export{b as L,l as a};
