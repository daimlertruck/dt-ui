import{j as f}from"./jsx-runtime-vNq4Oc-g.js";import{r as c}from"./index-4g5l5LRQ.js";import{n as d,u as l}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./MultiSelectProvider-vrdgqO57.js";const m=(s,o)=>{const[t,r]=s.split(".");return o.palette[t][r]},u=d.p`
  ${({theme:s,fontStyles:o,color:t})=>`
    ${s.fontStyles[o]};
    color: ${t==="unset"||t==="inherit"?t:s.colors[t]||m(t,s)};
   ${s.responsiveFontStyles[o]}
  `};
`,g=c.forwardRef(({children:s,element:o,fontStyles:t,color:r="grey_300",dataTestId:n,style:p},a)=>{const y=l(),e=o,i=t??(y.fontStyles[e]?e:"body1");return f.jsx(u,{as:o,color:r,"data-testid":n??"typography",fontStyles:i,ref:a,style:p,children:s})}),$=g;export{$ as T};
