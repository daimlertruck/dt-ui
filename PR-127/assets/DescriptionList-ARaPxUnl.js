import{j as e}from"./jsx-runtime-CbCNBOXy.js";import"./TooltipProvider-e8-_owln.js";import"./index-Hhmu2M5c.js";import"./index-IybTgENJ.js";import{L as r}from"./constants-libmexsO.js";import{n as o}from"./emotion-styled.browser.esm-yeljtSWm.js";const p=o.dl`
  ${({theme:t,listStyleType:i})=>`
    padding: ${t.spacing.none};
    padding-left: 10px;
    margin-left: 1em;
    list-style-type: ${i};
  `}
`,m=o.dt`
  ${({theme:t})=>t.fontStyles.pSmall};
  font-weight: 700;
  margin-bottom: 10px;
  display: list-item;
`,l=o.dd`
  margin-bottom: 10px;
  padding-left: 20px;
`,s=({children:t,dataTestId:i,listStyleType:n=r.None})=>e.jsx(p,{"data-testid":`${i?i+"-":""}description-list`,listStyleType:n,children:t});s.Term=({children:t})=>e.jsx(m,{children:t});s.Description=({children:t})=>e.jsx(l,{children:t});export{s as D};
