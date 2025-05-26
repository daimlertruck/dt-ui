import{j as e}from"./jsx-runtime-DMAvRu52.js";import{B as m}from"./index-LNaMzCj1.js";import{T as d}from"./Typography-Dk9s_ZNT.js";import{k as x}from"./index-DcqZAc_6.js";import{n as c,u}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const g=x`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`,a={"extra-small":"14px",small:"28px",medium:"42px",large:"50px","extra-large":"58px"},i={"extra-small":"2px",small:"4px",medium:"4px",large:"4px","extra-large":"4px"},p=r=>({positive:{main:r.palette.primary.default,background:r.colors.grey_00},negative:{main:r.palette.content.contrast,background:r.palette.content.medium}}),y=c.div`
  ${({theme:r,size:t,colorScheme:n})=>`
    width: ${a[t]};
    height: ${a[t]};
    border: ${i[t]} solid ${p(r)[n].background};
    border-radius: 50%;
    border-top: ${i[t]} solid ${p(r)[n].main};
  `};
  animation: ${g} 1s cubic-bezier(0.3, 0.1, 0.25, 0.65) 0s
    infinite normal none;
`,b={positive:"content.default",negative:"content.contrast"},f={"extra-small":"body4",small:"body4",medium:"body3",large:"body3","extra-large":"body2"},T=({style:r,dataTestId:t="spinner",size:n="medium",colorScheme:o="positive",loadingText:s})=>{const l=u();return e.jsxs(m,{dataTestId:t,style:{...r},children:[e.jsx(y,{colorScheme:o,size:n}),s?e.jsx(d,{color:b[o],fontStyles:f[n],style:{marginTop:l.spacing["3xs"]},children:s}):null]})};export{T as S};
