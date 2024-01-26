import{j as s}from"./jsx-runtime-CbCNBOXy.js";import{T as a}from"./Typography-qT9DMSUX.js";import{n as p}from"./emotion-styled.browser.esm-yeljtSWm.js";import"./TooltipProvider-Z8-dQ5a2.js";import"./index-Hhmu2M5c.js";import"./index-IybTgENJ.js";import{L as d}from"./constants-libmexsO.js";const y=p.ul`
  ${({listStyleType:t=d.Disc,theme:e,hasMarginLeft:o,hasPaddingLeft:i=!0})=>`
    padding: ${e.spacing.none};
    padding-left: ${i?"50px":"unset"};
    list-style-type: ${t};

    ${o&&`
        margin-left: 1em;
        padding-left: 0px;
      `}
  `}
`,g=p.li`
  ${({theme:t})=>`
    ${t.fontStyles.pSmall}
    margin-bottom: ${t.spacing.xmedium};
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${t.palette.text.body};

    &:last-of-type {
      margin-bottom: 0;
    }
  `}
`,n=({children:t,dataTestId:e,listStyleType:o,hasMarginLeft:i,hasPaddingLeft:l,style:m})=>{const r=e??"list";return s.jsx(y,{"data-testid":r,hasMarginLeft:i,hasPaddingLeft:l,listStyleType:o,style:m,children:t})};n.Title=({children:t})=>s.jsx(a,{element:"h2",fontStyles:"pSmall",style:{marginTop:"16px",marginBottom:"16px",fontWeight:700},children:t});n.CounterListItem=({children:t})=>s.jsx(g,{children:t});export{n as L};
