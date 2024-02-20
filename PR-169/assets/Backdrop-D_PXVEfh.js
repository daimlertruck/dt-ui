import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{r as s}from"./index-4g5l5LRQ.js";import"./index-LonLnBAn.js";import"./index-jmm5gWkb.js";import"./Icon.styled-_wbYwLP-.js";import{B as p}from"./z-index-zwCKGdcf.js";import{h as d}from"./hexToRgba-fpzAFQCT.js";import{n}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const m={dark:.85,light:.2},c=n.div`
  ${({theme:t,type:r})=>`
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${d(t.palette.base.dark,m[r])};
      z-index: ${p};
    `}
`,l={Dark:"dark",Light:"light"},u=s.forwardRef(({isOpen:t=!1,type:r=l.Dark,children:a,dataTestId:e},i)=>o.jsx(o.Fragment,{children:t?o.jsx(c,{"data-testid":e??"backdrop",ref:i,type:r,children:a}):null}));export{l as B,u as a};
