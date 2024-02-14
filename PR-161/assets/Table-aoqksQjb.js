import{j as a}from"./jsx-runtime-vNq4Oc-g.js";import{r as n}from"./index-4g5l5LRQ.js";import{n as s}from"./emotion-styled.browser.esm-QTPHyGVR.js";import"./index-aMdyWyTB.js";import"./index-jmm5gWkb.js";import{b as y}from"./z-index-tR9610fR.js";const N=e=>a.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...e,children:a.jsx("path",{d:"M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"})}),i={columnHeaderChildren:[],appendColumnHeader:()=>null,clearColumnHeaders:()=>null},p=n.createContext(i),m=({children:e})=>{const t=n.useRef(i.columnHeaderChildren),l={get columnHeaderChildren(){return t.current},appendColumnHeader:C=>{t.current.push(C)},clearColumnHeaders:()=>{t.current=[]}};return a.jsx(p.Provider,{value:l,children:e})},c=()=>{const e=n.useContext(p);if(!e)throw new Error("Table compound components cannot be rendered outside the Table component");return e},w=s.th`
  ${({theme:e,textAlign:t})=>`
    text-align: ${t};
    color: ${e.palette.content.heading};
    padding: 0 ${e.spacing["2xs"]} ${e.spacing["2xs"]};
    ${e.fontStyles.button3};
  `}
`,f=e=>n.isValidElement(e)&&b.toString()===e.type.toString(),b=({children:e,textAlign:t="left"})=>a.jsx(w,{textAlign:t,children:e}),H=s.tr`
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
`,u=e=>n.isValidElement(e)&&x.toString()===e.type.toString(),x=({children:e,onClick:t})=>{const o=!!t;return a.jsx(H,{...t&&{onClick:t},selectableRow:o,children:e})},T=s.thead`
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
          z-index: ${y};
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05)
        `}
    }
`}
`,S=(e,t)=>{const o=r=>{n.Children.forEach(r,l=>{f(l)&&t(l.props.children)})};n.Children.forEach(e,r=>{u(r)&&o(r.props.children)})},h=({children:e,hasFixedHeader:t=!1,dataTestId:o})=>{const r=c();return r.clearColumnHeaders(),S(e,l=>r.appendColumnHeader(l)),a.jsx(T,{"data-testid":o??"table-head",hasFixedHeader:t,children:e})},j=s.td`
  ${({theme:e,columnWidth:t,textAlign:o})=>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${e.spacing["3xs"]};
    padding: ${e.spacing["3xs"]} ${e.spacing["2xs"]};
    word-break: break-word;
    text-align: ${o};
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
`,k=s.div`
  ${({theme:e})=>`
    word-break: keep-all;
    color: ${e.palette.content.heading};
    ${e.fontStyles.button3};

    @media (min-width: ${e.breakpoints.m}) {
        display: none;
    }
  `}
`,g=({children:e,columnWidth:t,textAlign:o="left"})=>a.jsx(j,{columnWidth:t,textAlign:o,children:e}),E=({children:e})=>a.jsx(k,{className:"header-cell",children:e}),V=s.tbody`
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
`,R=e=>n.isValidElement(e)&&g.toString()===e.type.toString(),$=(e,t)=>n.cloneElement(e,{},t),v=(e,t)=>n.Children.map(e,(o,r)=>{if(R(o)){const l=t[r];return $(o,a.jsxs(a.Fragment,{children:[a.jsx(E,{children:l}),o.props.children]}))}return o}),D=(e,t)=>n.Children.map(e,o=>u(o)?$(o,v(o.props.children,t)):o),B=({children:e})=>{const t=c(),o=D(e,t.columnHeaderChildren);return a.jsx(V,{children:o})},Z=s.table`
  ${({isFixed:e})=>`
    table-layout: ${e?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,d=({children:e,dataTestId:t,isFixed:o=!1})=>a.jsx(m,{children:a.jsx(Z,{"data-testid":t??"table",isFixed:o,children:e})});d.Head=h;d.ColumnHeader=b;d.Body=B;d.Row=x;d.DataCell=g;export{N as I,d as T};
