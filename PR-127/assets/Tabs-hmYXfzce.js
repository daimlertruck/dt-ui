import{j as p}from"./jsx-runtime-CbCNBOXy.js";import{r as d}from"./index-IybTgENJ.js";import{n as s}from"./emotion-styled.browser.esm-yeljtSWm.js";import{c as n}from"./emotion-react.browser.esm-bvpyIPwg.js";const b=(a,t)=>({horizontal:n`
      flex-direction: row;
      gap: ${t.spacing["4xs"]};
      margin-bottom: 12px;
    `,vertical:n`
      flex-direction: column;
      gap: 10px;
    `})[a],x=(a,t,o,l,r)=>({horizontal:n`
      ${o&&!r?t.fontStyles.body2Bold:t.fontStyles.body2};
      background-color: ${o?t.palette.primary.default:t.palette.base.default};
      color: ${o?t.palette.text.contrast:t.palette.text.body};
      border-radius: ${t.spacing["5xs"]};
      padding: ${t.spacing["3xs"]} ${t.spacing.s};

      ${!o&&!r&&`
        &:hover {
          background: ${t.palette.primary.light};
        }
      `}
    `,vertical:n`
      padding: 16px 14px;
      background-color: ${t.palette.base.default};
      box-shadow: ${o?`inset 2px 0px 0px 0px ${l?t.palette.error.default:t.palette.primary.default}`:0};
      color: ${o&&l?t.palette.error.default:o?t.palette.primary.default:t.palette.text.body};
      max-width: 300px;
      overflow: hidden;
      text-align: start;

      ${!o&&`
        &:hover {
          background: ${t.palette.secondary.light};
        }
      `}
    `})[a],u=s.div`
  display: flex;
  flex-wrap: wrap;
  ${({orientation:a,theme:t})=>b(a,t)};
`,$=s.button`
  border: none;
  display: flex;
  align-items: center;

  ${({orientation:a,theme:t,active:o,hasError:l,disabled:r})=>x(a,t,o,l,r)};

  ${({disabled:a,active:t,theme:o})=>`
    cursor: ${a?"not-allowed":t?"default":"pointer"};
    ${a&&`
        background-color: ${o.palette.base.light};
        color: ${o.palette.text.disabled};
        opacity: 0.4;
        &:active {
          pointer-events: none; 
        }
     `};
  `}
`,g=s.div`
  ${({visible:a,theme:t})=>`
    background-color: ${t.palette.base.default};
    padding: 32px;
    width: 100%;
    ${!a&&`
        display : none;
      `};
  `}
`,f=s.div`
  display: grid;
  align-items: center;
  grid-template-columns: 190px auto;
  gap: 6px;
  overflow: hidden;
  overflow-wrap: break-word;
`,y=({children:a,dataTestId:t,orientation:o="horizontal",style:l})=>{const r=d.useMemo(()=>d.Children.map(a,e=>e&&d.cloneElement(e,{...e.props,orientation:o})),[a,o]);return p.jsx(u,{"data-testid":t||"tabs",orientation:o,role:"tablist",style:l,children:r})};y.Item=({activeTab:a,children:t,dataTestId:o,isDisabled:l,hasError:r,index:e,handleChange:i,orientation:c="horizontal"})=>p.jsx($,{active:a===e,"data-testid":o||`tab-item-${e}`,disabled:l,hasError:r,onClick:()=>i(e),orientation:c,role:"tab",tabIndex:a===e?0:-1,children:t});const w=({style:a,activeTab:t,children:o,dataTestId:l,index:r})=>p.jsx(g,{"data-testid":l||`tab-panel-${r}`,role:"tabpanel",style:a,tabIndex:t===r?0:-1,visible:t===r,children:o});w.Grid=({children:a,dataTestId:t})=>p.jsx(f,{"data-testid":t||"tab-panel-grid",children:a});export{y as T,w as a};
