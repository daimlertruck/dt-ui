import{j as e}from"./jsx-runtime-DMAvRu52.js";import{B as m}from"./index-LNaMzCj1.js";import{T as d}from"./Typography-B8gEf_mp.js";import{k as x}from"./index-CvuylCeK.js";import{n as c,u}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const g=x`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`,s={"extra-small":"14px",small:"28px",medium:"42px",large:"50px","extra-large":"58px"},i={"extra-small":"2px",small:"4px",medium:"4px",large:"4px","extra-large":"4px"},p=t=>({positive:{main:t.palette.primary.default,background:t.palette.primary.contrast},negative:{main:t.palette.content.contrast,background:t.palette.content.medium}}),y=c.div`
  ${({theme:t,size:r,colorScheme:n})=>`
    width: ${s[r]};
    height: ${s[r]};
    border: ${i[r]} solid ${p(t)[n].background};
    border-radius: 50%;
    border-top: ${i[r]} solid ${p(t)[n].main};
  `};
  animation: ${g} 1s cubic-bezier(0.3, 0.1, 0.25, 0.65) 0s
    infinite normal none;
`,b={positive:"content.default",negative:"content.contrast"},f={"extra-small":"body4",small:"body4",medium:"body3",large:"body3","extra-large":"body2"},T=({style:t,dataTestId:r="spinner",size:n="medium",colorScheme:o="positive",loadingText:a})=>{const l=u();return e.jsxs(m,{dataTestId:r,style:{...t},children:[e.jsx(y,{colorScheme:o,size:n}),a?e.jsx(d,{color:b[o],fontStyles:f[n],style:{marginTop:l.spacing["3xs"]},children:a}):null]})};export{T as S};
