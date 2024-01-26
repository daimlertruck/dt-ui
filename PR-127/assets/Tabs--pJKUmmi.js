import{j as p}from"./jsx-runtime-CbCNBOXy.js";import{r as d}from"./index-IybTgENJ.js";import{n as s}from"./emotion-styled.browser.esm-yeljtSWm.js";import{c as n}from"./emotion-react.browser.esm-bvpyIPwg.js";const b=(o,t)=>({horizontal:n`
      flex-direction: row;
      gap: ${t.spacing["4xs"]};
      margin-bottom: 12px;
    `,vertical:n`
      flex-direction: column;
      gap: 10px;
    `})[o],u=(o,t,a,l,r)=>({horizontal:n`
      ${a&&!r?t.fontStyles.body2Bold:t.fontStyles.body2};
      background-color: ${a?t.palette.primary.default:t.palette.base.default};
      color: ${a?t.palette.content.contrast:t.palette.content.body};
      border-radius: ${t.spacing["5xs"]};
      padding: ${t.spacing["3xs"]} ${t.spacing.s};

      ${!a&&!r&&`
        &:hover {
          background: ${t.palette.primary.light};
        }
      `}
    `,vertical:n`
      padding: 16px 14px;
      background-color: ${t.palette.base.default};
      box-shadow: ${a?`inset 2px 0px 0px 0px ${l?t.palette.error.default:t.palette.primary.default}`:0};
      color: ${a&&l?t.palette.error.default:a?t.palette.primary.default:t.palette.content.body};
      max-width: 300px;
      overflow: hidden;
      text-align: start;

      ${!a&&`
        &:hover {
          background: ${t.palette.secondary.light};
        }
      `}
    `})[o],x=s.div`
  display: flex;
  flex-wrap: wrap;
  ${({orientation:o,theme:t})=>b(o,t)};
`,$=s.button`
  border: none;
  display: flex;
  align-items: center;

  ${({orientation:o,theme:t,active:a,hasError:l,disabled:r})=>u(o,t,a,l,r)};

  ${({disabled:o,active:t,theme:a})=>`
    cursor: ${o?"not-allowed":t?"default":"pointer"};
    ${o&&`
        background-color: ${a.palette.base.light};
        color: ${a.palette.content.disabled};
        opacity: 0.4;
        &:active {
          pointer-events: none; 
        }
     `};
  `}
`,g=s.div`
  ${({visible:o,theme:t})=>`
    background-color: ${t.palette.base.default};
    padding: 32px;
    width: 100%;
    ${!o&&`
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
`,y=({children:o,dataTestId:t,orientation:a="horizontal",style:l})=>{const r=d.useMemo(()=>d.Children.map(o,e=>e&&d.cloneElement(e,{...e.props,orientation:a})),[o,a]);return p.jsx(x,{"data-testid":t||"tabs",orientation:a,role:"tablist",style:l,children:r})};y.Item=({activeTab:o,children:t,dataTestId:a,isDisabled:l,hasError:r,index:e,handleChange:i,orientation:c="horizontal"})=>p.jsx($,{active:o===e,"data-testid":a||`tab-item-${e}`,disabled:l,hasError:r,onClick:()=>i(e),orientation:c,role:"tab",tabIndex:o===e?0:-1,children:t});const w=({style:o,activeTab:t,children:a,dataTestId:l,index:r})=>p.jsx(g,{"data-testid":l||`tab-panel-${r}`,role:"tabpanel",style:o,tabIndex:t===r?0:-1,visible:t===r,children:a});w.Grid=({children:o,dataTestId:t})=>p.jsx(f,{"data-testid":t||"tab-panel-grid",children:o});export{y as T,w as a};
