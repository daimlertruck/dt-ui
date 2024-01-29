import{j as i}from"./jsx-runtime-vNq4Oc-g.js";import{T as a}from"./Typography-_GTkkcG8.js";import{n}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./TooltipProvider-MBvKdTIL.js";import"./index-lb1Yyg-x.js";import"./index-4g5l5LRQ.js";import{L as g}from"./constants-libmexsO.js";const y=n.ul`
  ${({listStyleType:t=g.Disc,theme:o,hasMarginLeft:e,hasPaddingLeft:s=!0})=>`
    padding: ${o.spacing.none};
    padding-left: ${s?"50px":"unset"};
    list-style-type: ${t};

    ${e&&`
        margin-left: 1em;
        padding-left: 0px;
      `}
  `}
`,d=n.li`
  ${({theme:t})=>`
    ${t.fontStyles.pSmall}
    margin-bottom: ${t.spacing.xmedium};
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${t.colors.grey_300};

    &:last-of-type {
      margin-bottom: 0;
    }
  `}
`,p=({children:t,dataTestId:o,listStyleType:e,hasMarginLeft:s,hasPaddingLeft:r,style:l})=>{const m=o??"list";return i.jsx(y,{"data-testid":m,hasMarginLeft:s,hasPaddingLeft:r,listStyleType:e,style:l,children:t})};p.Title=({children:t})=>i.jsx(a,{element:"h2",fontStyles:"pSmall",style:{marginTop:"16px",marginBottom:"16px",fontWeight:700},children:t});p.CounterListItem=({children:t})=>i.jsx(d,{children:t});export{p as L};
