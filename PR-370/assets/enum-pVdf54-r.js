import{j as $}from"./jsx-runtime-DMAvRu52.js";import{r as m}from"./index-Dl6G-zuu.js";import{n as p}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const f=p.a`
  ${({theme:o,disabled:t,textSize:r,variant:a="primary"})=>`
    color: ${o.palette[a].default};
    text-decoration: none;

    ${t&&`
        color: ${o.palette[a].light};
        cursor: not-allowed;
      `};

    ${!t&&`
        &:hover {
          text-decoration: underline;
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
`,g=m.forwardRef(({isDisabled:o,children:t,textSize:r=l.Medium,dataTestId:a,onClick:d,variant:e,href:n,style:s,...i},u)=>$.jsx(f,{"data-testid":a??"link",disabled:o,ref:u,style:s,textSize:r,variant:e,...!o&&{href:n,onClick:d},...i,children:t}));var l=(o=>(o.Small="small",o.Medium="medium",o.Large="large",o))(l||{});export{g as L,l as a};
