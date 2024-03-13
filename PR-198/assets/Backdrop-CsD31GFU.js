import{j as o}from"./jsx-runtime-CKrituN3.js";import{r as s}from"./index-CBqU2yxZ.js";import"./index-BpxOyJIn.js";import"./index-BtM5VmRH.js";import{B as p}from"./z-index-Bx-k-k_v.js";import{h as d}from"./hexToRgba-DXb69hOD.js";import{n}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const c={dark:.85,light:.2},m=n.div`
  ${({theme:t,type:r})=>`
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${d(t.palette.base.dark,c[r])};
      z-index: ${p};
    `}
`,l={Dark:"dark",Light:"light"},j=s.forwardRef(({isOpen:t=!1,type:r=l.Dark,children:a,dataTestId:e},i)=>o.jsx(o.Fragment,{children:t?o.jsx(m,{"data-testid":e??"backdrop",ref:i,type:r,children:a}):null}));export{l as B,j as a};
