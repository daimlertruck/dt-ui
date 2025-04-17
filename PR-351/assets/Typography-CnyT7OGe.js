import{j as m}from"./jsx-runtime-BTCK_S7S.js";import{r as d}from"./index-CBqU2yxZ.js";import"./index-6aypZpsd.js";import"./index-D_w70K-N.js";import{n as l,u}from"./emotion-styled.browser.esm-BiJbFOXH.js";const c=(s,o)=>{const[t,r]=s.split(".");return o.palette[t][r]},x=l.p`
  ${({theme:s,fontStyles:o,color:t})=>`
    ${s.fontStyles[o]};
    color: ${t==="unset"||t==="inherit"?t:s.colors[t]||c(t,s)};
   ${s.responsiveFontStyles[o]}
  `};
`,j=d.forwardRef(({children:s,element:o,fontStyles:t,color:r="grey_90",dataTestId:n,style:p,id:a},y)=>{const i=u(),e=o,f=t??(i.fontStyles[e]?e:"body1");return m.jsx(x,{as:o,color:r,"data-testid":n??"typography",fontStyles:f,id:a,ref:y,style:p,children:s})});export{j as T};
