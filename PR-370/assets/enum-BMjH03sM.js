import{j as u}from"./jsx-runtime-DMAvRu52.js";import{r as f}from"./index-Dl6G-zuu.js";import{n as p}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const $=p.a`
  ${({theme:o,disabled:l,textSize:r})=>`
    color: ${o.palette.primary.default};
    text-decoration: none;

    ${l&&`
        color: ${o.palette.content.disabled};
        cursor: not-allowed;
      `};

    ${!l&&`
        &:hover {
          text-decoration: underline;
        }
      `};

    &:focus-visible {
      outline: 2px solid ${o.palette.border.dark};
      outlineOffset: 1px;
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
`,b=f.forwardRef(({isDisabled:o,children:l,textSize:r=t.Medium,dataTestId:a,onClick:d,href:e,style:n,...s},i)=>u.jsx($,{"data-testid":a??"link",disabled:o,ref:i,style:n,textSize:r,...!o&&{href:e,onClick:d},...s,children:l}));var t=(o=>(o.Small="small",o.Medium="medium",o.Large="large",o))(t||{});export{b as L,t as a};
