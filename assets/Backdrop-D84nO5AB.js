import{j as s}from"./jsx-runtime-DMAvRu52.js";import{r as n}from"./index-Dl6G-zuu.js";import"./index-DgOuwafb.js";import"./index-DCrStp1_.js";import{B as p}from"./z-index-Ds5QkyqS.js";import{n as c}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const d=(t,r=1)=>{const[a,e,o]=(t.match(/\w\w/g)||[]).map(i=>parseInt(i,16));return`rgba(${a},${e},${o},${r})`},m={dark:.85,light:.2},l=c.div`
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
      z-index: ${p};
    `}
`,f={Dark:"dark",Light:"light"},$=n.forwardRef(({isOpen:t=!1,type:r=f.Dark,children:a,dataTestId:e},o)=>s.jsx(s.Fragment,{children:t?s.jsx(l,{"data-testid":e??"backdrop",ref:o,type:r,children:a}):null}));export{f as B,$ as a,d as h};
