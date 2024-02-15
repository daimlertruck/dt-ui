import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{r as n}from"./index-4g5l5LRQ.js";import{n as s}from"./emotion-styled.browser.esm-QTPHyGVR.js";import"./index-aMdyWyTB.js";import"./index-jmm5gWkb.js";import{b as C}from"./z-index-tR9610fR.js";const i={columnHeaderChildren:[],appendColumnHeader:()=>null,clearColumnHeaders:()=>null},p=n.createContext(i),m=({children:e})=>{const t=n.useRef(i.columnHeaderChildren),l={get columnHeaderChildren(){return t.current},appendColumnHeader:y=>{t.current.push(y)},clearColumnHeaders:()=>{t.current=[]}};return o.jsx(p.Provider,{value:l,children:e})},c=()=>{const e=n.useContext(p);if(!e)throw new Error("Table compound components cannot be rendered outside the Table component");return e},f=s.th`
  ${({theme:e,textAlign:t})=>`
    text-align: ${t};
    color: ${e.palette.content.heading};
    padding: 0 ${e.spacing["2xs"]} ${e.spacing["2xs"]};
    ${e.fontStyles.button3};
  `}
`,w=e=>n.isValidElement(e)&&b.toString()===e.type.toString(),b=({children:e,textAlign:t="left"})=>o.jsx(f,{textAlign:t,children:e}),H=s.tr`
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
`,u=e=>n.isValidElement(e)&&$.toString()===e.type.toString(),$=({children:e,onClick:t})=>{const a=!!t;return o.jsx(H,{...t&&{onClick:t},selectableRow:a,children:e})},T=s.thead`
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
          z-index: ${C};
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05)
        `}
    }
`}
`,S=(e,t)=>{const a=r=>{n.Children.forEach(r,l=>{w(l)&&t(l.props.children)})};n.Children.forEach(e,r=>{u(r)&&a(r.props.children)})},k=({children:e,hasFixedHeader:t=!1,dataTestId:a})=>{const r=c();return r.clearColumnHeaders(),S(e,l=>r.appendColumnHeader(l)),o.jsx(T,{"data-testid":a??"table-head",hasFixedHeader:t,children:e})},E=s.td`
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
`,j=s.div`
  ${({theme:e})=>`
    word-break: keep-all;
    color: ${e.palette.content.heading};
    ${e.fontStyles.button3};

    @media (min-width: ${e.breakpoints.m}) {
        display: none;
    }
  `}
`,x=({children:e,columnWidth:t,textAlign:a="left"})=>o.jsx(E,{columnWidth:t,textAlign:a,children:e}),h=({children:e})=>o.jsx(j,{className:"header-cell",children:e}),R=s.tbody`
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
`,D=e=>n.isValidElement(e)&&x.toString()===e.type.toString(),g=(e,t)=>n.cloneElement(e,{},t),V=(e,t)=>n.Children.map(e,(a,r)=>{if(D(a)){const l=t[r];return g(a,o.jsxs(o.Fragment,{children:[o.jsx(h,{children:l}),a.props.children]}))}return a}),v=(e,t)=>n.Children.map(e,a=>u(a)?g(a,V(a.props.children,t)):a),B=({children:e})=>{const t=c(),a=v(e,t.columnHeaderChildren);return o.jsx(R,{children:a})},A=s.table`
  ${({isFixed:e})=>`
    table-layout: ${e?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,d=({children:e,dataTestId:t,isFixed:a=!1})=>o.jsx(m,{children:o.jsx(A,{"data-testid":t??"table",isFixed:a,children:e})});d.Head=k;d.ColumnHeader=b;d.Body=B;d.Row=$;d.DataCell=x;export{d as T};
