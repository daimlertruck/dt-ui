import{j as r}from"./jsx-runtime-CKrituN3.js";import"./index-u8Tre6qU.js";import"./index-BtM5VmRH.js";import{b as x}from"./z-index-Bx-k-k_v.js";import{r as g}from"./index-CBqU2yxZ.js";import{n}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const f=n.thead`
  ${({theme:t,hasFixedHeader:a})=>`
    display: table-header-group;
    ${a&&`
        position: sticky;
        top: 0;
        background-color: ${t.palette.base.default};
        z-index: ${x};
        box-shadow: ${t.shadows.xs};
      `}
`}
`,w=({style:t,dataTestId:a,children:o,hasFixedHeader:e=!1})=>r.jsx(f,{"data-testid":a??"table-head",hasFixedHeader:e,style:t,children:o}),b=110,y=n.th`
  ${({theme:t,textAlign:a,showBoxShadow:o,sticky:e,stickyEnd:l,stickyColumnIndex:s,stickyEndColumnIndex:d})=>`
    text-align: ${a};
    color: ${t.palette.content.heading};
    padding: 0 ${t.spacing["2xs"]} ${t.spacing["2xs"]};
    ${t.fontStyles.button3};

    ${(e||l)&&`
        left: ${e?`${s*b}px`:"unset"};
        right: ${l?`${d*b}px`:"unset"};
        position: sticky;
        z-index: ${x};
        background: white;
        box-shadow: ${o?`${l?"-1px":"1px"} 0 0 0 ${t.palette.border.light}`:"unset"};
      `}
  `}
`,h=({children:t,style:a,dataTestId:o,textAlign:e="left",showBoxShadow:l=!1,sticky:s=!1,stickyEnd:d=!1,stickyColumnIndex:i=0,stickyEndColumnIndex:$=0})=>r.jsx(y,{"data-testid":o??"table-column-header",showBoxShadow:l,sticky:s,stickyColumnIndex:i,stickyEnd:d,stickyEndColumnIndex:$,style:a,textAlign:e,children:t}),T=n.tbody`
  ${({theme:t})=>`
    display: table-header-group;
    
    tr:hover {
      background-color: ${t.palette.base.light};
    }
  `}
`,S=({children:t,style:a,dataTestId:o})=>r.jsx(T,{"data-testid":o??"table-body",style:a,children:t}),j=n.tr`
  ${({theme:t,selectableRow:a})=>`
    display: table-row;
    border-radius: ${t.radius.none};
    box-shadow: ${t.shadows.none};
    padding: ${t.spacing.none};
    width: 100%;
    background-color: ${t.palette.base.default};
    cursor: ${a?"pointer":"auto"};
  `}
`,H=({children:t,dataTestId:a,style:o,onClick:e})=>{const l=!!e;return r.jsx(j,{...e&&{onClick:e},"data-testid":a??"table-row",selectableRow:l,style:o,children:t})},R=n.td`
  ${({theme:t,columnWidth:a,textAlign:o,showBoxShadow:e,sticky:l,stickyEnd:s,stickyColumnIndex:d,stickyEndColumnIndex:i})=>`
    display: table-cell;
    min-width: ${b}px;
    word-break: break-word;
    border-top: 1px solid ${t.palette.border.light};
    padding: ${t.spacing["2xs"]};
    text-align: ${o};
    color: ${t.palette.content.body};
    ${t.fontStyles.body2};

    &:first-of-type {
      padding-top: ${t.spacing["2xs"]};
      border-bottom: none;
    }

    ${!!a&&`
        width: ${a};
        max-width: ${a};
      `}

    ${(l||s)&&`
        left: ${l?`${d*b}px`:"unset"};
        right: ${s?`${i*b}px`:"unset"};
        position: sticky;
        z-index: ${x};
        background: white;
        box-shadow: ${e?`${s?"-1px":"1px"} 0 0 0 ${t.palette.border.light}`:"unset"};
      `}
  `}
`,B=g.forwardRef(({children:t,columnWidth:a,style:o,dataTestId:e,textAlign:l="left",showBoxShadow:s=!1,sticky:d=!1,stickyEnd:i=!1,stickyColumnIndex:$=0,stickyEndColumnIndex:c=0},u)=>r.jsx(R,{columnWidth:a,"data-testid":e??"table-data-cell",ref:u,showBoxShadow:s,sticky:d,stickyColumnIndex:$,stickyEnd:i,stickyEndColumnIndex:c,style:o,textAlign:l,children:t})),C=n.table`
  ${({isFixed:t})=>`
    table-layout: ${t?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,p=({children:t,dataTestId:a,style:o,isFixed:e=!1})=>r.jsx(C,{"data-testid":a??"table",isFixed:e,style:o,children:t});p.Head=w;p.ColumnHeader=h;p.Body=S;p.Row=H;p.DataCell=B;export{p as T};
