import{j as s}from"./jsx-runtime-CbCNBOXy.js";import{T as a}from"./Typography-j_MlwlO0.js";import{n}from"./emotion-styled.browser.esm-yeljtSWm.js";import"./TooltipProvider-e8-_owln.js";import"./index-Hhmu2M5c.js";import"./index-IybTgENJ.js";import{L as d}from"./constants-libmexsO.js";const y=n.ul`
  ${({listStyleType:t=d.Disc,theme:e,hasMarginLeft:o,hasPaddingLeft:i=!0})=>`
    padding: ${e.spacing.none};
    padding-left: ${i?"50px":"unset"};
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
`,p=({children:t,dataTestId:e,listStyleType:o,hasMarginLeft:i,hasPaddingLeft:l,style:m})=>{const r=e??"list";return s.jsx(y,{"data-testid":r,hasMarginLeft:i,hasPaddingLeft:l,listStyleType:o,style:m,children:t})};p.Title=({children:t})=>s.jsx(a,{element:"h2",fontStyles:"pSmall",style:{marginTop:"16px",marginBottom:"16px",fontWeight:700},children:t});p.CounterListItem=({children:t})=>s.jsx(g,{children:t});export{p as L};
