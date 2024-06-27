import{j as s}from"./jsx-runtime-CKrituN3.js";import{r as n}from"./index-CBqU2yxZ.js";import"./index-BUn_IA5M.js";import"./index-BtM5VmRH.js";import{B as p}from"./z-index-C-tE6wDk.js";import{n as d}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const c=(t,r=1)=>{const[a,e,o]=(t.match(/\w\w/g)||[]).map(i=>parseInt(i,16));return`rgba(${a},${e},${o},${r})`},m={dark:.85,light:.2},l=d.div`
  ${({theme:t,type:r})=>`
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${c(t.palette.base.dark,m[r])};
      z-index: ${p};
    `}
`,f={Dark:"dark",Light:"light"},b=n.forwardRef(({isOpen:t=!1,type:r=f.Dark,children:a,dataTestId:e},o)=>s.jsx(s.Fragment,{children:t?s.jsx(l,{"data-testid":e??"backdrop",ref:o,type:r,children:a}):null}));export{f as B,b as a,c as h};
