import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{r as s}from"./index-4g5l5LRQ.js";import{n as p}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import{B as d}from"./z-index-n4kBdkOc.js";import"./typography-aU13o_mh.js";import"./index-lb1Yyg-x.js";import{h as n}from"./hexToRgba-fpzAFQCT.js";const c={dark:.85,light:.2},m=p.div`
  ${({theme:t,type:r})=>`
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${n(t.palette.base.dark,c[r])};
      z-index: ${d};
    `}
`,l={Dark:"dark",Light:"light"},j=s.forwardRef(({isOpen:t=!1,type:r=l.Dark,children:a,dataTestId:e},i)=>o.jsx(o.Fragment,{children:t?o.jsx(m,{"data-testid":e??"backdrop",ref:i,type:r,children:a}):null}));export{j as B,l as a};
