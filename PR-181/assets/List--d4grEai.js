import{j as i}from"./jsx-runtime-vNq4Oc-g.js";import{T as r}from"./Typography-44N2ASWu.js";import{n}from"./emotion-styled.browser.esm-QTPHyGVR.js";import"./DropdownProvider-d_aJ3H9Z.js";import"./MultiSelectProvider-PuHYpM92.js";import{L as d}from"./constants-libmexsO.js";const y=n.ul`
  ${({listStyleType:t=d.Disc,theme:e,hasMarginLeft:o,hasPaddingLeft:s=!0})=>`
    padding: ${e.spacing.none};
    padding-left: ${s?"50px":"unset"};
    list-style-type: ${t};

    ${o&&`
        margin-left: 1em;
        padding-left: 0px;
      `}
  `}
`,g=n.li`
  ${({theme:t})=>`
    ${t.fontStyles.pSmall}
    margin-bottom: ${t.spacing.xmedium};
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${t.palette.content.body};

    &:last-of-type {
      margin-bottom: 0;
    }
  `}
`,p=({children:t,dataTestId:e,listStyleType:o,hasMarginLeft:s,hasPaddingLeft:l,style:m})=>{const a=e??"list";return i.jsx(y,{"data-testid":a,hasMarginLeft:s,hasPaddingLeft:l,listStyleType:o,style:m,children:t})};p.Title=({children:t})=>i.jsx(r,{element:"h2",fontStyles:"pSmall",style:{marginTop:"16px",marginBottom:"16px",fontWeight:700},children:t});p.CounterListItem=({children:t})=>i.jsx(g,{children:t});export{p as L};
