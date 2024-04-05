import{j as b}from"./jsx-runtime-CKrituN3.js";import{r as u}from"./index-CBqU2yxZ.js";import"./index-u8Tre6qU.js";import"./index-BtM5VmRH.js";import{b as g}from"./z-index-Bx-k-k_v.js";import{n as m}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const B={columnsLength:0,setColumnsLength:()=>null,fixedColumnCount:0,fixedEndColumnCount:0,fixedColumns:[],setFixedColumns:()=>null,fixedEndColumns:[],setFixedEndColumns:()=>null,showBoxShadow:[],setShowBoxShadow:()=>null},y=u.createContext(B),R=({children:e,fixedColumnCount:t,fixedEndColumnCount:d})=>{const s=u.useRef([]),n=u.useRef([]),o=u.useRef(0),l=u.useRef([]),f={get columnsLength(){return o.current},setColumnsLength:a=>{o.current=a},fixedColumnCount:t,fixedEndColumnCount:d,get fixedColumns(){return s.current},setFixedColumns:a=>{s.current=a},get fixedEndColumns(){return n.current},setFixedEndColumns:a=>{n.current=a},get showBoxShadow(){return l.current},setShowBoxShadow:a=>{l.current=a}};return b.jsx(y.Provider,{value:f,children:e})},C=()=>{const e=u.useContext(y);if(!e)throw new Error("Table compound components cannot be rendered outside the Table component");return e},L=m.thead`
  ${({theme:e,hasFixedHeader:t})=>`
    display: table-header-group;
    ${t&&`
        position: sticky;
        top: 0;
        background-color: ${e.palette.base.default};
        z-index: ${g};
        box-shadow: ${e.shadows.xs};
      `}
`}
`,F=({style:e,dataTestId:t,children:d,hasFixedHeader:s=!1})=>{const{setColumnsLength:n}=C();return u.Children.map(d,o=>{var l;u.isValidElement(o)&&n(((l=o.props.children)==null?void 0:l.length)??0)}),b.jsx(L,{"data-testid":t??"table-head",hasFixedHeader:s,style:e,children:d})},$=110,j=m.th`
  ${({theme:e,textAlign:t,showBoxShadow:d=!1,fixed:s=!1,fixedEnd:n=!1,fixedColumnIndex:o=0,fixedEndColumnIndex:l=0})=>`
    text-align: ${t};
    color: ${e.palette.content.heading};
    padding: 0 ${e.spacing["2xs"]} ${e.spacing["2xs"]};
    ${e.fontStyles.button3};

    ${(s||n)&&`
        left: ${s?`${o*$}px`:"unset"};
        right: ${n?`${l*$}px`:"unset"};
        position: sticky;
        z-index: ${g};
        background: ${e.palette.primary.contrast};
        box-shadow: ${d?`${n?"-1px":"1px"} 0 0 0 ${e.palette.border.light}`:"unset"};
      `}
  `}
`,I=({children:e,style:t,dataTestId:d,textAlign:s="left",...n})=>{const{fixedColumns:o,fixedEndColumns:l,showBoxShadow:r}=C(),x=Number(n["data-column-index"]),c=o.indexOf(x),p=l.indexOf(x);return b.jsx(j,{"data-testid":d??"table-column-header",fixed:c!==-1,fixedColumnIndex:c,fixedEnd:p!==-1,fixedEndColumnIndex:p,showBoxShadow:r==null?void 0:r.includes(x),style:t,textAlign:s,...n,children:e})},k=m.tbody`
  ${({theme:e})=>`
    display: table-header-group;
    
    tr:hover td {
      background-color: ${e.palette.base.light};
    }
  `}
`,H=({children:e,style:t,dataTestId:d})=>b.jsx(k,{"data-testid":d??"table-body",style:t,children:e}),D=m.tr`
  ${({theme:e,selectableRow:t})=>`
    display: table-row;
    border-radius: ${e.radius.none};
    box-shadow: ${e.shadows.none};
    padding: ${e.spacing.none};
    width: 100%;
    background-color: ${e.palette.base.default};
    cursor: ${t?"pointer":"auto"};
  `}
`,_=({children:e,dataTestId:t,style:d,onClick:s})=>{const n=!!s,{columnsLength:o,setFixedColumns:l,setFixedEndColumns:r,fixedColumnCount:x,fixedEndColumnCount:c,showBoxShadow:p}=C(),f=[],a=[],E=i=>{i<x&&(f.push(i),p.splice(0,1,i)),i>=o-c&&(a.length===0&&p.splice(1,1,i),a.unshift(i))},S=x>0||c>0,T=u.Children.map(e,(i,w)=>u.isValidElement(i)&&S?(E(w),u.cloneElement(i,{...i.props,"data-column-index":w})):i);return f.length&&l(f),a&&r(a),b.jsx(D,{...s&&{onClick:s},"data-testid":t??"table-row",selectableRow:n,style:d,children:T})},v=m.td`
  ${({theme:e,columnWidth:t,textAlign:d,showBoxShadow:s=!1,fixed:n=!1,fixedEnd:o=!1,fixedColumnIndex:l=0,fixedEndColumnIndex:r=0})=>`
    display: table-cell;
    min-width: ${$}px;
    word-break: break-word;
    border-top: 1px solid ${e.palette.border.light};
    padding: ${e.spacing["2xs"]};
    text-align: ${d};
    color: ${e.palette.content.body};
    ${e.fontStyles.body2};

    &:first-of-type {
      padding-top: ${e.spacing["2xs"]};
      border-bottom: none;
    }

    ${!!t&&`
        width: ${t};
        max-width: ${t};
      `}

    ${(n||o)&&`
        z-index: ${g};
        left: ${n?`${l*$}px`:"unset"};
        right: ${o?`${r*$}px`:"unset"};
        position: sticky;
        background: ${e.palette.primary.contrast};
        box-shadow: ${s?`${o?"-1px":"1px"} 0 0 0 ${e.palette.border.light}`:"unset"};
      `}
  `}
`,N=({children:e,columnWidth:t,style:d,dataTestId:s,textAlign:n="left",...o})=>{const{fixedColumns:l,fixedEndColumns:r,showBoxShadow:x}=C(),c=Number(o["data-column-index"]),p=l.indexOf(c),f=r.indexOf(c);let a={};return(l!=null&&l.length||r!=null&&r.length)&&(a={fixed:p!==-1,fixedColumnIndex:p,fixedEnd:f!==-1,fixedEndColumnIndex:f,showBoxShadow:x.includes(c)}),console.log(a),b.jsx(v,{columnWidth:t,"data-testid":s??"table-data-cell",style:d,textAlign:n,...a,...o,children:e})},O=m.table`
  ${({isFixed:e})=>`
    table-layout: ${e?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,h=({children:e,dataTestId:t,style:d,isFixed:s=!1,fixedColumnCount:n=0,fixedEndColumnCount:o=0})=>b.jsx(R,{fixedColumnCount:n,fixedEndColumnCount:o,children:b.jsx(O,{"data-testid":t??"table",isFixed:s,style:d,children:e})});h.Head=F;h.ColumnHeader=I;h.Body=H;h.Row=_;h.DataCell=N;export{h as T};
