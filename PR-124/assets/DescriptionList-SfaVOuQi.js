import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import"./typography-KYNEswLX.js";import"./index-lb1Yyg-x.js";import"./index-4g5l5LRQ.js";import{L as r}from"./constants-libmexsO.js";import{n as o}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const p=o.dl`
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
