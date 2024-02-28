import{j as m}from"./jsx-runtime-vNq4Oc-g.js";import{r as f}from"./index-4g5l5LRQ.js";import"./index-5j7WHYEJ.js";import"./index-jmm5gWkb.js";import{n as d}from"./emotion-styled.browser.esm-QTPHyGVR.js";import{u as l}from"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";const u=(o,s)=>{const[t,r]=o.split(".");return s.palette[t][r]},c=d.p`
  ${({theme:o,fontStyles:s,color:t})=>`
    ${o.fontStyles[s]};
    color: ${t==="unset"||t==="inherit"?t:o.colors[t]||u(t,o)};
   ${o.responsiveFontStyles[s]}
  `};
`,j=f.forwardRef(({children:o,element:s,fontStyles:t,color:r="grey_300",dataTestId:n,style:p},a)=>{const y=l(),e=s,i=t??(y.fontStyles[e]?e:"body1");return m.jsx(c,{as:s,color:r,"data-testid":n??"typography",fontStyles:i,ref:a,style:p,children:o})});export{j as T};
