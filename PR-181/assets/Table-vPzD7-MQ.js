import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{r}from"./index-4g5l5LRQ.js";import"./index-5j7WHYEJ.js";import"./index-jmm5gWkb.js";import{a as u}from"./z-index-Gl5ZkgZ3.js";import{n as d}from"./emotion-styled.browser.esm-QTPHyGVR.js";const _=e=>o.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...e,children:o.jsx("path",{d:"M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"})}),i={columnHeadersChildren:[],appendColumnHeaders:()=>null},c=r.createContext(i),x=({children:e})=>{const t=r.useRef(i.columnHeadersChildren),n={get columnHeadersChildren(){return t.current},appendColumnHeaders:s=>{t.current=s}};return o.jsx(c.Provider,{value:n,children:e})},p=()=>{const e=r.useContext(c);if(!e)throw new Error("Table compound components cannot be rendered outside the Table component");return e},$=d.thead`
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
`,g=e=>r.Children.toArray(e).reduce((t,a)=>r.isValidElement(a)?[...t,a.props.children]:t,[]),y=e=>r.isValidElement(e)?g(e.props.children):[],C=({style:e,dataTestId:t,children:a,hasFixedHeader:n=!1})=>{const s=p(),b=y(a);return s.appendColumnHeaders(b),o.jsx($,{"data-testid":t??"table-head",hasFixedHeader:n,style:e,children:a})},f=d.th`
  ${({theme:e,textAlign:t})=>`
    text-align: ${t};
    color: ${e.palette.content.heading};
    padding: 0 ${e.spacing["2xs"]} ${e.spacing["2xs"]};
    ${e.fontStyles.button3};
  `}
`,w=({children:e,style:t,dataTestId:a,textAlign:n="left"})=>o.jsx(f,{"data-testid":a??"table-column-header",style:t,textAlign:n,children:e}),m=d.tbody`
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
`,H=d.td`
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
`,h=d.div`
  ${({theme:e})=>`
    word-break: keep-all;
    color: ${e.palette.content.heading};
    ${e.fontStyles.button3};

    @media (min-width: ${e.breakpoints.m}) {
        display: none;
    }
  `}
`,T=({children:e,columnWidth:t,style:a,dataTestId:n,textAlign:s="left"})=>o.jsx(H,{columnWidth:t,"data-testid":n??"table-data-cell",style:a,textAlign:s,children:e}),j=({children:e})=>o.jsx(h,{className:"header-cell",children:e}),k=(e,t)=>r.Children.map(e,(a,n)=>{if(r.isValidElement(a)){const s=t[n];return r.cloneElement(a,{},o.jsxs(o.Fragment,{children:[o.jsx(j,{children:s}),a.props.children]}))}return a}),E=(e,t)=>r.Children.map(e,a=>r.isValidElement(a)?r.cloneElement(a,{},k(a.props.children,t)):a),S=({children:e,style:t,dataTestId:a})=>{const n=p(),s=E(e,n.columnHeadersChildren);return o.jsx(m,{"data-testid":a??"table-body",style:t,children:s})},V=d.tr`
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
`,v=({children:e,dataTestId:t,style:a,onClick:n})=>{const s=!!n;return o.jsx(V,{...n&&{onClick:n},"data-testid":t??"table-row",selectableRow:s,style:a,children:e})},D=d.table`
  ${({isFixed:e})=>`
    table-layout: ${e?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,l=({children:e,dataTestId:t,style:a,isFixed:n=!1})=>o.jsx(x,{children:o.jsx(D,{"data-testid":t??"table",isFixed:n,style:a,children:e})});l.Head=C;l.ColumnHeader=w;l.Body=S;l.Row=v;l.DataCell=T;export{_ as I,l as T};
