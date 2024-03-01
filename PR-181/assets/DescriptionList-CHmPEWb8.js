import{j as e}from"./jsx-runtime-CKrituN3.js";import"./DropdownProvider-D86Tot7W.js";import"./MultiSelectProvider-Cu0vsbwR.js";import{L as r}from"./constants-BPg6vsiE.js";import{n as s}from"./emotion-styled.browser.esm-CRzct0lr.js";const p=s.dl`
  ${({theme:t,listStyleType:i})=>`
    padding: ${t.spacing.none};
    padding-left: 10px;
    margin-left: 1em;
    list-style-type: ${i};
  `}
`,m=s.dt`
  ${({theme:t})=>t.fontStyles.pSmall};
  font-weight: 700;
  margin-bottom: 10px;
  display: list-item;
`,l=s.dd`
  margin-bottom: 10px;
  padding-left: 20px;
`,n=({children:t,dataTestId:i,listStyleType:o=r.None})=>e.jsx(p,{"data-testid":`${i?i+"-":""}description-list`,listStyleType:o,children:t});n.Term=({children:t})=>e.jsx(m,{children:t});n.Description=({children:t})=>e.jsx(l,{children:t});export{n as D};
