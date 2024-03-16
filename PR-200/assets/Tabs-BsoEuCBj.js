import{j as p}from"./jsx-runtime-CKrituN3.js";import{r as s}from"./index-CBqU2yxZ.js";import{n as d}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const b=d.button`
  min-height: 50px;
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
`,i=({activeTab:o,children:t,dataTestId:r,isDisabled:e,index:n,variant:l="boxed",handleChange:a})=>p.jsx(b,{active:o===n,"data-testid":r||`tab-item-${n}`,disabled:e,onClick:()=>a(n),role:"tab",tabIndex:o===n?0:-1,variant:l,children:t}),$=d.div`
  display: flex;
  flex-direction: row;
`,c=({children:o,dataTestId:t,style:r,activeTab:e,variant:n="boxed"})=>{const l=s.useMemo(()=>s.Children.map(o,a=>a&&s.cloneElement(a,{...a.props,activeTab:e,variant:n})),[o,e,n]);return p.jsx($,{"data-testid":t||"tabs",role:"tablist",style:r,children:l})};c.Item=i;export{c as T};
