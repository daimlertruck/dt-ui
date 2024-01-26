import{j as o}from"./jsx-runtime-CbCNBOXy.js";import{r as s}from"./index-IybTgENJ.js";import{n as p}from"./emotion-styled.browser.esm-yeljtSWm.js";import{B as n}from"./z-index-n4kBdkOc.js";import"./TooltipProvider-eIt6yA1p.js";import"./index-Hhmu2M5c.js";import{h as d}from"./hexToRgba-fpzAFQCT.js";const c={dark:.85,light:.2},m=p.div`
  ${({theme:t,type:r})=>`
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${d(t.colors.grey_90,c[r])};
      z-index: ${n};
    `}
`,l={Dark:"dark",Light:"light"},j=s.forwardRef(({isOpen:t=!1,type:r=l.Dark,children:a,dataTestId:e},i)=>o.jsx(o.Fragment,{children:t?o.jsx(m,{"data-testid":e??"backdrop",ref:i,type:r,children:a}):null}));export{j as B,l as a};
