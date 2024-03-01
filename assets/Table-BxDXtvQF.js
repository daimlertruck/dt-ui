import{j as o}from"./jsx-runtime-CKrituN3.js";import{r}from"./index-CBqU2yxZ.js";import"./index-C91dZ4Gr.js";import"./index-BtM5VmRH.js";import{b as u}from"./z-index-Bx-k-k_v.js";import{n as s}from"./emotion-styled.browser.esm-CRzct0lr.js";const i={columnHeadersChildren:[],appendColumnHeaders:()=>null},c=r.createContext(i),$=({children:e})=>{const t=r.useRef(i.columnHeadersChildren),n={get columnHeadersChildren(){return t.current},appendColumnHeaders:d=>{t.current=d}};return o.jsx(c.Provider,{value:n,children:e})},p=()=>{const e=r.useContext(c);if(!e)throw new Error("Table compound components cannot be rendered outside the Table component");return e},x=s.thead`
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
`,g=e=>r.Children.toArray(e).reduce((t,a)=>r.isValidElement(a)?[...t,a.props.children]:t,[]),y=e=>r.isValidElement(e)?g(e.props.children):[],f=({style:e,dataTestId:t,children:a,hasFixedHeader:n=!1})=>{const d=p(),b=y(a);return d.appendColumnHeaders(b),o.jsx(x,{"data-testid":t??"table-head",hasFixedHeader:n,style:e,children:a})},m=s.th`
  ${({theme:e,textAlign:t})=>`
    text-align: ${t};
    color: ${e.palette.content.heading};
    padding: 0 ${e.spacing["2xs"]} ${e.spacing["2xs"]};
    ${e.fontStyles.button3};
  `}
`,w=({children:e,style:t,dataTestId:a,textAlign:n="left"})=>o.jsx(m,{"data-testid":a??"table-column-header",style:t,textAlign:n,children:e}),C=s.tbody`
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
`,h=({children:e,columnWidth:t,style:a,dataTestId:n,textAlign:d="left"})=>o.jsx(H,{columnWidth:t,"data-testid":n??"table-data-cell",style:a,textAlign:d,children:e}),k=({children:e})=>o.jsx(T,{className:"header-cell",children:e}),E=(e,t)=>r.Children.map(e,(a,n)=>{if(r.isValidElement(a)){const d=t[n];return r.cloneElement(a,{},o.jsxs(o.Fragment,{children:[o.jsx(k,{children:d}),a.props.children]}))}return a}),j=(e,t)=>r.Children.map(e,a=>r.isValidElement(a)?r.cloneElement(a,{},E(a.props.children,t)):a),S=({children:e,style:t,dataTestId:a})=>{const n=p(),d=j(e,n.columnHeadersChildren);return o.jsx(C,{"data-testid":a??"table-body",style:t,children:d})},D=s.tr`
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
`,R=({children:e,dataTestId:t,style:a,onClick:n})=>{const d=!!n;return o.jsx(D,{...n&&{onClick:n},"data-testid":t??"table-row",selectableRow:d,style:a,children:e})},v=s.table`
  ${({isFixed:e})=>`
    table-layout: ${e?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,l=({children:e,dataTestId:t,style:a,isFixed:n=!1})=>o.jsx($,{children:o.jsx(v,{"data-testid":t??"table",isFixed:n,style:a,children:e})});l.Head=f;l.ColumnHeader=w;l.Body=S;l.Row=R;l.DataCell=h;export{l as T};
