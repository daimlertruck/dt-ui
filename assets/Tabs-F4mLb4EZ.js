import{j as s}from"./jsx-runtime-CbCNBOXy.js";import{r as i}from"./index-IybTgENJ.js";import{n as p}from"./emotion-styled.browser.esm-yeljtSWm.js";import{c as e}from"./emotion-react.browser.esm-bvpyIPwg.js";const x=(o,r)=>({horizontal:e`
      flex-direction: row;
      gap: ${r.spacing["4xs"]};
      margin-bottom: 12px;
    `,vertical:e`
      flex-direction: column;
      gap: 10px;
    `})[o],$=(o,r,t,l,a)=>({horizontal:e`
      ${t&&!a?r.fontStyles.body2Bold:r.fontStyles.body2};
      background-color: ${t?r.palette.primary:r.colors.white};
      color: ${t?r.colors.white:r.palette.textSecondary};
      border-radius: ${r.spacing["5xs"]};
      padding: ${r.spacing["3xs"]} ${r.spacing.s};

      ${!t&&!a&&`
        &:hover {
          background: ${r.palette.primaryLight_300};
          color: ${r.palette.textPrimary};
        }
      `}
    `,vertical:e`
      padding: 16px 14px;
      background-color: ${r.colors.white};
      box-shadow: ${t?`inset 2px 0px 0px 0px ${l?r.palette.error:r.palette.primary}`:0};
      color: ${t&&l?r.palette.error:t?r.palette.primary:r.colors.grey_100};
      max-width: 300px;
      overflow: hidden;
      text-align: start;

      ${!t&&`
        &:hover {
          background: ${r.colors.grey_70};
        }
      `}
    `})[o],g=p.div`
  display: flex;
  flex-wrap: wrap;
  ${({orientation:o,theme:r})=>x(o,r)};
`,b=p.button`
  border: none;
  display: flex;
  align-items: center;

  ${({orientation:o,theme:r,active:t,hasError:l,disabled:a})=>$(o,r,t,l,a)};

  ${({disabled:o,active:r,theme:t})=>`
    cursor: ${o?"not-allowed":r?"default":"pointer"};
    ${o&&`
        background-color: ${t.palette.neutral};
        color: ${t.palette.textTertiary};
        opacity: 0.4;
        &:active {
          pointer-events: none; 
        }
     `};
  `}
`,y=p.div`
  ${({visible:o,theme:r})=>`
    background-color: ${r.colors.white};
    padding: 32px;
    width: 100%;
    ${!o&&`
        display : none;
      `};
  `}
`,u=p.div`
  display: grid;
  align-items: center;
  grid-template-columns: 190px auto;
  gap: 6px;
  overflow: hidden;
  overflow-wrap: break-word;
`,w=({children:o,dataTestId:r,orientation:t="horizontal",style:l})=>{const a=i.useMemo(()=>i.Children.map(o,n=>n&&i.cloneElement(n,{...n.props,orientation:t})),[o,t]);return s.jsx(g,{"data-testid":r||"tabs",orientation:t,role:"tablist",style:l,children:a})};w.Item=({activeTab:o,children:r,dataTestId:t,isDisabled:l,hasError:a,index:n,handleChange:d,orientation:c="horizontal"})=>s.jsx(b,{active:o===n,"data-testid":t||`tab-item-${n}`,disabled:l,hasError:a,onClick:()=>d(n),orientation:c,role:"tab",tabIndex:o===n?0:-1,children:r});const f=({style:o,activeTab:r,children:t,dataTestId:l,index:a})=>s.jsx(y,{"data-testid":l||`tab-panel-${a}`,role:"tabpanel",style:o,tabIndex:r===a?0:-1,visible:r===a,children:t});f.Grid=({children:o,dataTestId:r})=>s.jsx(u,{"data-testid":r||"tab-panel-grid",children:o});export{w as T,f as a};
