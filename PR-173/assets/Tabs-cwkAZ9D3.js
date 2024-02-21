import{j as s}from"./jsx-runtime-vNq4Oc-g.js";import{r as a}from"./index-4g5l5LRQ.js";import{n as l}from"./emotion-styled.browser.esm-QTPHyGVR.js";const d=l.div`
  display: flex;
  flex-direction: row;
`,i=l.button`
  border: none;
  display: flex;
  align-items: center;

  ${({theme:t,active:o,disabled:r})=>`

    ${o?t.fontStyles.body2Bold:t.fontStyles.body2}

    background-color: ${o?t.palette.base.default:"transparent"};
    color: ${o?t.palette.primary.default:r?t.palette.content.disabled:t.palette.content.body};
    padding: ${t.spacing["3xs"]} ${t.spacing.s};
    cursor: ${o?"default":r?"not-allowed":"pointer"};
    white-space: nowrap;

    ${!o&&!r&&`
      &:hover {
        background: ${t.palette.base.default};
      }
      `}

    ${r&&`
        opacity: 0.4;
  
        &:active {
          pointer-events: none; 
        }
     `};
  `}
`,c=({children:t,dataTestId:o,style:r})=>{const n=a.useMemo(()=>a.Children.map(t,e=>e&&a.cloneElement(e,e.props)),[t]);return s.jsx(d,{"data-testid":o||"tabs",role:"tablist",style:r,children:n})};c.Item=({activeTab:t,children:o,dataTestId:r,isDisabled:n,index:e,handleChange:p})=>s.jsx(i,{active:t===e,"data-testid":r||`tab-item-${e}`,disabled:n,onClick:()=>p(e),role:"tab",tabIndex:t===e?0:-1,children:o});export{c as T};
