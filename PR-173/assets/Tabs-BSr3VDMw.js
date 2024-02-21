import{j as l}from"./jsx-runtime-vNq4Oc-g.js";import{r as a}from"./index-4g5l5LRQ.js";import{n as s}from"./emotion-styled.browser.esm-QTPHyGVR.js";const d=s.div`
  display: flex;
  flex-direction: row;
`,i=s.button`
  border: none;
  display: flex;
  align-items: center;
  background-color: transparent;

  ${({theme:t,active:o,disabled:r})=>`

    ${o?t.fontStyles.body2Bold:t.fontStyles.body2}

    border-bottom: ${o?`2px solid ${t.palette.primary.default}`:"1px solid theme.palette.border.default"};
    
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
`,b=({children:t,dataTestId:o,style:r})=>{const n=a.useMemo(()=>a.Children.map(t,e=>e&&a.cloneElement(e,e.props)),[t]);return l.jsx(d,{"data-testid":o||"tabs",role:"tablist",style:r,children:n})};b.Item=({activeTab:t,children:o,dataTestId:r,isDisabled:n,index:e,handleChange:p})=>l.jsx(i,{active:t===e,"data-testid":r||`tab-item-${e}`,disabled:n,onClick:()=>p(e),role:"tab",tabIndex:t===e?0:-1,children:o});export{b as T};
