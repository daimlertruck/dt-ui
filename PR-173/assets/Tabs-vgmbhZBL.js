import{j as p}from"./jsx-runtime-vNq4Oc-g.js";import{r as s}from"./index-4g5l5LRQ.js";import{n as d}from"./emotion-styled.browser.esm-QTPHyGVR.js";const b=d.button`
  border: none;
  display: flex;
  align-items: center;

  ${({theme:o,active:t,disabled:r,variant:e})=>`

    ${t?o.fontStyles.body2Bold:o.fontStyles.body2}

    ${e==="book"?`
          background-color: transparent;
          border-bottom: ${t?`2px solid ${o.palette.primary.default}`:`1px solid ${o.palette.border.default}`};`:`
          background: ${t?`${o.palette.base.default}`:"transparent"};`}
    
    color: ${t?o.palette.primary.default:r?o.palette.content.disabled:o.palette.content.body};
    padding: ${o.spacing["3xs"]} ${o.spacing.s};
    cursor: ${t?"default":r?"not-allowed":"pointer"};
    white-space: nowrap;

    ${!t&&!r&&`
        &:hover {
          ${e==="book"?`color: ${o.palette.primary.dark};`:`background: ${o.palette.base.default};`}        
      `}

    ${r&&`
        opacity: 0.4;
  
        &:active {
          pointer-events: none; 
        }
     `};
  `}
`,$=({activeTab:o,children:t,dataTestId:r,isDisabled:e,index:n,variant:l,handleChange:a})=>p.jsx(b,{active:o===n,"data-testid":r||`tab-item-${n}`,disabled:e,onClick:()=>a(n),role:"tab",tabIndex:o===n?0:-1,variant:l,children:t}),c=d.div`
  display: flex;
  flex-direction: row;
`,i=({children:o,dataTestId:t,style:r,activeTab:e,variant:n="boxed"})=>{const l=s.useMemo(()=>s.Children.map(o,a=>a&&s.cloneElement(a,{...a.props,activeTab:e,variant:n})),[o,e,n]);return p.jsx(c,{"data-testid":t||"tabs",role:"tablist",style:r,children:l})};i.Item=$;export{i as T};
