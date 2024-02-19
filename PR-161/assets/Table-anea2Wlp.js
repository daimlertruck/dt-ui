import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{r as o}from"./index-4g5l5LRQ.js";import"./index-tGsFdLcJ.js";import"./index-jmm5gWkb.js";import{b as $}from"./z-index-tR9610fR.js";import{n as d}from"./emotion-styled.browser.esm-QTPHyGVR.js";const i={columnHeaderChildren:[],appendColumnHeader:()=>null,clearColumnHeaders:()=>null},p=o.createContext(i),x=({children:e})=>{const a=o.useRef(i.columnHeaderChildren),l={get columnHeaderChildren(){return a.current},appendColumnHeader:u=>{a.current.push(u)},clearColumnHeaders:()=>{a.current=[]}};return n.jsx(p.Provider,{value:l,children:e})},c=()=>{const e=o.useContext(p);if(!e)throw new Error("Table compound components cannot be rendered outside the Table component");return e},g=d.thead`
  ${({theme:e,hasFixedHeader:a})=>`
    display: none;
    tr {
      background: transparent;
    }
    @media (min-width: ${e.breakpoints.m}) {
      display: table-header-group;
      ${a&&`
          position: sticky;
          top: 0;
          background-color: ${e.palette.base.default};
          z-index: ${$};
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05)
        `}
    }
`}
`,m=(e,a)=>{const t=r=>{o.Children.forEach(r,l=>{o.isValidElement(l)&&a(l.props.children)})};o.Children.forEach(e,r=>{o.isValidElement(r)&&t(r.props.children)})},y=({children:e,hasFixedHeader:a=!1,dataTestId:t})=>{const r=c();return r.clearColumnHeaders(),m(e,l=>r.appendColumnHeader(l)),n.jsx(g,{"data-testid":t??"table-head",hasFixedHeader:a,children:e})},C=d.th`
  ${({theme:e,textAlign:a})=>`
    text-align: ${a};
    color: ${e.palette.content.heading};
    padding: 0 ${e.spacing["2xs"]} ${e.spacing["2xs"]};
    ${e.fontStyles.button3};
  `}
`,f=({children:e,textAlign:a="left"})=>n.jsx(C,{textAlign:a,children:e}),w=d.td`
  ${({theme:e,columnWidth:a,textAlign:t})=>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${e.spacing["3xs"]};
    padding: ${e.spacing["3xs"]} ${e.spacing["2xs"]};
    word-break: break-word;
    text-align: ${t};
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

      ${!!a&&`
        width: ${a};
        max-width: ${a};
      `}
    }
  `}
`,H=d.div`
  ${({theme:e})=>`
    word-break: keep-all;
    color: ${e.palette.content.heading};
    ${e.fontStyles.button3};

    @media (min-width: ${e.breakpoints.m}) {
        display: none;
    }
  `}
`,T=({children:e,columnWidth:a,textAlign:t="left"})=>n.jsx(w,{columnWidth:a,textAlign:t,children:e}),k=({children:e})=>n.jsx(H,{className:"header-cell",children:e}),E=d.tbody`
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
`,b=(e,a)=>o.cloneElement(e,{},a),h=(e,a)=>o.Children.map(e,(t,r)=>{if(o.isValidElement(t)){const l=a[r];return b(t,n.jsxs(n.Fragment,{children:[n.jsx(k,{children:l}),t.props.children]}))}return t}),j=(e,a)=>o.Children.map(e,t=>o.isValidElement(t)?b(t,h(t.props.children,a)):t),S=({children:e})=>{const a=c(),t=j(e,a.columnHeaderChildren);return n.jsx(E,{children:t})},R=d.tr`
  ${({theme:e,selectableRow:a=!0})=>`
    display: block;
    padding: ${e.spacing.xs};
    width: 100%;
    background-color: ${e.palette.base.default};
    border-radius: ${e.radius["4xs"]};
    box-shadow: ${e.shadows.s};
    cursor: ${a?"pointer":"auto"};
    flex: 1;
    @media (min-width: ${e.breakpoints.m}) {
      display: table-row;
      border-radius: ${e.radius.none};
      box-shadow: ${e.shadows.none};
      padding: ${e.spacing.none};
    }
  `}
`,D=({children:e,onClick:a})=>{const t=!!a;return n.jsx(R,{...a&&{onClick:a},selectableRow:t,children:e})},v=d.table`
  ${({isFixed:e})=>`
    table-layout: ${e?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,s=({children:e,dataTestId:a,isFixed:t=!1})=>n.jsx(x,{children:n.jsx(v,{"data-testid":a??"table",isFixed:t,children:e})});s.Head=y;s.ColumnHeader=f;s.Body=S;s.Row=D;s.DataCell=T;export{s as T};
