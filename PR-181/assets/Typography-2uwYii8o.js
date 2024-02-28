import{j as f}from"./jsx-runtime-vNq4Oc-g.js";import{r as m}from"./index-4g5l5LRQ.js";import{n as d}from"./emotion-styled.browser.esm-QTPHyGVR.js";import"./MultiSelectProvider-vrdgqO57.js";import{u as l}from"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";const u=(s,o)=>{const[t,r]=s.split(".");return o.palette[t][r]},c=d.p`
  ${({theme:s,fontStyles:o,color:t})=>`
    ${s.fontStyles[o]};
    color: ${t==="unset"||t==="inherit"?t:s.colors[t]||u(t,s)};
   ${s.responsiveFontStyles[o]}
  `};
`,$=m.forwardRef(({children:s,element:o,fontStyles:t,color:r="grey_300",dataTestId:n,style:a},p)=>{const y=l(),e=o,i=t??(y.fontStyles[e]?e:"body1");return f.jsx(c,{as:o,color:r,"data-testid":n??"typography",fontStyles:i,ref:p,style:a,children:s})});export{$ as T,u as g};
