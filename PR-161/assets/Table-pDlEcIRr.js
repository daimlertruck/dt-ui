import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{r as d}from"./index-4g5l5LRQ.js";import"./index-tGsFdLcJ.js";import"./index-jmm5gWkb.js";import{b as u}from"./z-index-tR9610fR.js";import{n as s}from"./emotion-styled.browser.esm-QTPHyGVR.js";const c={columnHeaderChildren:[],appendColumnHeaders:()=>null,clearColumnHeaders:()=>null},p=d.createContext(c),$=({children:e})=>{const t=d.useRef(c.columnHeaderChildren),o={get columnHeaderChildren(){return t.current},appendColumnHeaders:i=>{t.current=i},clearColumnHeaders:()=>{t.current=[]}};return r.jsx(p.Provider,{value:o,children:e})},b=()=>{const e=d.useContext(p);if(!e)throw new Error("Table compound components cannot be rendered outside the Table component");return e},x=s.thead`
  ${({theme:e,hasFixedHeader:t})=>`
    display: none;
    tr {
      background: transparent;
    }
    @media (min-width: ${e.breakpoints.m}) {
      display: table-header-group;
      ${t&&`
          position: sticky;
          top: 0;
          background-color: ${e.palette.base.default};
          z-index: ${u};
          box-shadow: ${e.shadows.xs};
        `}
    }
`}
`,g=e=>d.Children.toArray(e).reduce((t,a)=>d.isValidElement(a)?[...t,a.props.children]:t,[]),y=e=>d.isValidElement(e)?g(e.props.children):[],m=({style:e,dataTestId:t,children:a,hasFixedHeader:n=!1})=>{const o=b(),i=y(a);return o.clearColumnHeaders(),o.appendColumnHeaders(i),r.jsx(x,{"data-testid":t??"table-head",hasFixedHeader:n,style:e,children:a})},f=s.th`
  ${({theme:e,textAlign:t})=>`
    text-align: ${t};
    color: ${e.palette.content.heading};
    padding: 0 ${e.spacing["2xs"]} ${e.spacing["2xs"]};
    ${e.fontStyles.button3};
  `}
`,C=({children:e,style:t,dataTestId:a,textAlign:n="left"})=>r.jsx(f,{"data-testid":a??"table-column-header",style:t,textAlign:n,children:e}),w=s.tbody`
  ${({theme:e})=>`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${e.spacing["3xs"]};
    
    tr:hover {
      background-color: ${e.palette.base.light};
    }
    @media (min-width: ${e.breakpoints.s}) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: ${e.breakpoints.m}) {
      display: table-header-group;
    }
  `}
`,H=s.td`
  ${({theme:e,columnWidth:t,textAlign:a})=>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${e.spacing["3xs"]};
    padding: ${e.spacing["3xs"]} ${e.spacing["2xs"]};
    word-break: break-word;
    text-align: ${a};
    color: ${e.palette.content.body};
    ${e.fontStyles.body2};

    &:first-of-type {
      border-bottom: 1px solid ${e.palette.border.light};
      padding-top: 0;

      .header-cell {
        display: none;
      }
    }

    @media (min-width: ${e.breakpoints.m}) {
      display: table-cell;      
      border-top: 1px solid ${e.palette.border.light};
      padding: ${e.spacing["2xs"]};
      ${e.fontStyles.body2};
      
      &:first-of-type {
        color: ${e.palette.content.body};
        padding-top: ${e.spacing["2xs"]};
        border-bottom: none;
        ${e.fontStyles.body2};
      }

      word-break: break-word;

      ${!!t&&`
        width: ${t};
        max-width: ${t};
      `}
    }
  `}
`,T=s.div`
  ${({theme:e})=>`
    word-break: keep-all;
    color: ${e.palette.content.heading};
    ${e.fontStyles.button3};

    @media (min-width: ${e.breakpoints.m}) {
        display: none;
    }
  `}
`,h=({children:e,columnWidth:t,style:a,dataTestId:n,textAlign:o="left"})=>r.jsx(H,{columnWidth:t,"data-testid":n??"table-data-cell",style:a,textAlign:o,children:e}),k=({children:e})=>r.jsx(T,{className:"header-cell",children:e}),E=(e,t)=>d.Children.map(e,(a,n)=>{if(d.isValidElement(a)){const o=t[n];return d.cloneElement(a,{},r.jsxs(r.Fragment,{children:[r.jsx(k,{children:o}),a.props.children]}))}return a}),j=(e,t)=>d.Children.map(e,a=>d.isValidElement(a)?d.cloneElement(a,{},E(a.props.children,t)):a),S=({children:e,style:t,dataTestId:a})=>{const n=b(),o=j(e,n.columnHeaderChildren);return r.jsx(w,{"data-testid":a??"table-body",style:t,children:o})},D=s.tr`
  ${({theme:e,selectableRow:t=!0})=>`
    display: block;
    padding: ${e.spacing.xs};
    width: 100%;
    background-color: ${e.palette.base.default};
    border-radius: ${e.radius["4xs"]};
    box-shadow: ${e.shadows.s};
    cursor: ${t?"pointer":"auto"};
    flex: 1;
    @media (min-width: ${e.breakpoints.m}) {
      display: table-row;
      border-radius: ${e.radius.none};
      box-shadow: ${e.shadows.none};
      padding: ${e.spacing.none};
    }
  `}
`,R=({children:e,dataTestId:t,style:a,onClick:n})=>{const o=!!n;return r.jsx(D,{...n&&{onClick:n},"data-testid":t??"table-row",selectableRow:o,style:a,children:e})},v=s.table`
  ${({isFixed:e})=>`
    table-layout: ${e?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,l=({children:e,dataTestId:t,style:a,isFixed:n=!1})=>r.jsx($,{children:r.jsx(v,{"data-testid":t??"table",isFixed:n,style:a,children:e})});l.Head=m;l.ColumnHeader=C;l.Body=S;l.Row=R;l.DataCell=h;export{l as T};
