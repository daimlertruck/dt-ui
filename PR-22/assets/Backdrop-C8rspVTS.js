import{j as s}from"./jsx-runtime-CB_V9I5Y.js";import{r as p}from"./index-CTjT7uj6.js";import"./index-DLSYJ5rV.js";import"./index-B_xFk7rk.js";import{B as n}from"./z-index-Ds5QkyqS.js";import{s as c}from"./emotion-styled.browser.esm-DuL_gwYN.js";const d=(t,r=1)=>{const[a,o,e]=(t.match(/\w\w/g)||[]).map(i=>parseInt(i,16));return`rgba(${a},${o},${e},${r})`},m={dark:.85,light:.2},l=c.div`
  ${({theme:t,type:r})=>`
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${d(t.palette.surface.dark,m[r])};
      z-index: ${n};
    `}
`,f={Dark:"dark",Light:"light"},$=p.forwardRef(({isOpen:t=!1,type:r=f.Dark,children:a,dataTestId:o},e)=>s.jsx(s.Fragment,{children:t?s.jsx(l,{"data-testid":o??"backdrop",ref:e,type:r,children:a}):null}));export{f as B,$ as a,d as h};
