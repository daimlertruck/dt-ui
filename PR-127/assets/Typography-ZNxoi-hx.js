import{j as i}from"./jsx-runtime-CbCNBOXy.js";import{r as f}from"./index-IybTgENJ.js";import{t as m}from"./index-PWMXJtKE.js";import{n as d}from"./emotion-styled.browser.esm-MfHNkeEy.js";import"./TooltipProvider--5O1-WdZ.js";import"./index-qqeelA58.js";const l=(o,s)=>{const[t,r]=o.split(".");return s.palette[t][r]},x=d.p`
  ${({theme:o,fontStyles:s,color:t})=>`
    ${o.fontStyles[s]};
    color: ${t==="unset"||t==="inherit"?t:o.colors[t]||l(t,o)};
   ${o.responsiveFontStyles[s]}
  `};
`,j=f.forwardRef(({children:o,element:s,fontStyles:t,color:r="grey_300",dataTestId:p,style:e},a)=>{const n=s,y=t??(m.fontStyles[n]?n:"body1");return i.jsx(x,{as:s,color:r,"data-testid":p??"typography",fontStyles:y,ref:a,style:e,children:o})});export{j as T};
