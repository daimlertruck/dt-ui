import{j as m}from"./jsx-runtime-vNq4Oc-g.js";import{r as c}from"./index-4g5l5LRQ.js";import{n as d}from"./emotion-styled.browser.esm-QTPHyGVR.js";import"./MultiSelectProvider-vrdgqO57.js";import{u as l}from"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";const u=(o,s)=>{const[t,r]=o.split(".");return s.palette[t][r]},g=d.p`
  ${({theme:o,fontStyles:s,color:t})=>`
    ${o.fontStyles[s]};
    color: ${t==="unset"||t==="inherit"?t:o.colors[t]||u(t,o)};
   ${o.responsiveFontStyles[s]}
  `};
`,x=c.forwardRef(({children:o,element:s,fontStyles:t,color:r="grey_300",dataTestId:n,style:p,id:a},y)=>{const i=l(),e=s,f=t??(i.fontStyles[e]?e:"body1");return m.jsx(g,{as:s,color:r,"data-testid":n??"typography",fontStyles:f,id:a,ref:y,style:p,children:o})}),w=x;export{w as T};
