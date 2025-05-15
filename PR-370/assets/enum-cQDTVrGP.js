import{j as f}from"./jsx-runtime-DMAvRu52.js";import{r as p}from"./index-Dl6G-zuu.js";import{n as $}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const m=$.a`
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
      outlineOffset: 1px;
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
`,b=p.forwardRef(({isDisabled:o,children:t,textSize:r=l.Medium,dataTestId:a,onClick:d,variant:e,href:n,style:s,...i},u)=>f.jsx(m,{"data-testid":a??"link",disabled:o,ref:u,style:s,textSize:r,variant:e,...!o&&{href:n,onClick:d},...i,children:t}));var l=(o=>(o.Small="small",o.Medium="medium",o.Large="large",o))(l||{});export{b as L,l as a};
