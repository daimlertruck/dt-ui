import{j as m}from"./jsx-runtime-CKrituN3.js";import{r as f}from"./index-CBqU2yxZ.js";import"./index-B6w6wOUX.js";import"./index-BtM5VmRH.js";import{n as d}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{u as l}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";const u=(o,s)=>{const[t,r]=o.split(".");return s.palette[t][r]},c=d.p`
  ${({theme:o,fontStyles:s,color:t})=>`
    ${o.fontStyles[s]};
    color: ${t==="unset"||t==="inherit"?t:o.colors[t]||u(t,o)};
   ${o.responsiveFontStyles[s]}
  `};
`,j=f.forwardRef(({children:o,element:s,fontStyles:t,color:r="grey_300",dataTestId:n,style:p},a)=>{const y=l(),e=s,i=t??(y.fontStyles[e]?e:"body1");return m.jsx(c,{as:s,color:r,"data-testid":n??"typography",fontStyles:i,ref:a,style:p,children:o})});export{j as T};
