import{j as f}from"./jsx-runtime-CKrituN3.js";import{r as m}from"./index-CBqU2yxZ.js";import"./index-DSxJN9E5.js";import"./index-BtM5VmRH.js";import{n as d,u as l}from"./emotion-styled.browser.esm-B1le5_Hy.js";const u=(s,o)=>{const[t,r]=s.split(".");return o.palette[t][r]},c=d.p`
  ${({theme:s,fontStyles:o,color:t})=>`
    ${s.fontStyles[o]};
    color: ${t==="unset"||t==="inherit"?t:s.colors[t]||u(t,s)};
   ${s.responsiveFontStyles[o]}
  `};
`,$=m.forwardRef(({children:s,element:o,fontStyles:t,color:r="grey_90",dataTestId:n,style:p},a)=>{const y=l(),e=o,i=t??(y.fontStyles[e]?e:"body1");return f.jsx(c,{as:o,color:r,"data-testid":n??"typography",fontStyles:i,ref:a,style:p,children:s})});export{$ as T};
