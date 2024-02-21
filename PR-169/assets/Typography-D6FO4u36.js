import{j as f}from"./jsx-runtime-vNq4Oc-g.js";import{r as m}from"./index-4g5l5LRQ.js";import{n as c}from"./emotion-styled.browser.esm-QTPHyGVR.js";import"./MultiSelectProvider-vrdgqO57.js";import{u as d}from"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";const l=(o,s)=>{const[t,r]=o.split(".");return s.palette[t][r]},u=c.p`
  ${({theme:o,fontStyles:s,color:t})=>`
    ${o.fontStyles[s]};
    color: ${t==="unset"||t==="inherit"?t:o.colors[t]||l(t,o)};
   ${o.responsiveFontStyles[s]}
  `};
`,g=m.forwardRef(({children:o,element:s,fontStyles:t,color:r="grey_300",dataTestId:n,style:p},a)=>{const y=d(),e=s,i=t??(y.fontStyles[e]?e:"body1");return f.jsx(u,{as:s,color:r,"data-testid":n??"typography",fontStyles:i,ref:a,style:p,children:o})}),j=g;export{j as T};
