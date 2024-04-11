import{j as f}from"./jsx-runtime-CKrituN3.js";import{r as c}from"./index-CBqU2yxZ.js";import"./index-Cf0MdtL9.js";import"./index-BtM5VmRH.js";import{b as w}from"./z-index-Bx-k-k_v.js";import{n as h}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const B={columnsLength:0,setColumnsLength:()=>null,fixedColumnCount:0,fixedEndColumnCount:0,fixedColumns:[],setFixedColumns:()=>null,fixedEndColumns:[],setFixedEndColumns:()=>null,showBoxShadow:[],setShowBoxShadow:()=>null},y=c.createContext(B),R=({children:e,fixedColumnCount:t,fixedEndColumnCount:l})=>{const a=c.useRef([]),s=c.useRef([]),o=c.useRef(0),n=c.useRef([]),i={get columnsLength(){return o.current},setColumnsLength:d=>{o.current=d},fixedColumnCount:t,fixedEndColumnCount:l,get fixedColumns(){return a.current},setFixedColumns:d=>{a.current=d},get fixedEndColumns(){return s.current},setFixedEndColumns:d=>{s.current=d},get showBoxShadow(){return n.current},setShowBoxShadow:d=>{n.current=d}};return f.jsx(y.Provider,{value:i,children:e})},g=()=>{const e=c.useContext(y);if(!e)throw new Error("Table compound components cannot be rendered outside the Table component");return e},L=h.thead`
  ${({theme:e,hasFixedHeader:t})=>`
    display: table-header-group;
    ${t&&`
        position: sticky;
        top: 0;
        background-color: ${e.palette.base.default};
        z-index: ${w};
        box-shadow: ${e.shadows.xs};
      `}
`}
`,F=({style:e,dataTestId:t,children:l,hasFixedHeader:a=!1})=>{const{setColumnsLength:s}=g();return c.Children.map(l,o=>{var n;c.isValidElement(o)&&s(((n=o.props.children)==null?void 0:n.length)??0)}),f.jsx(L,{"data-testid":t??"table-head",hasFixedHeader:a,style:e,children:l})},$=110,j=h.th`
  ${({theme:e,textAlign:t,showBoxShadow:l=!1,fixed:a=!1,fixedEnd:s=!1,fixedColumnIndex:o=0,fixedEndColumnIndex:n=0})=>`
    text-align: ${t};
    color: ${e.palette.content.heading};
    padding: 0 ${e.spacing["2xs"]} ${e.spacing["2xs"]};
    ${e.fontStyles.button3};

    ${(a||s)&&`
        left: ${a?`${o*$}px`:"unset"};
        right: ${s?`${n*$}px`:"unset"};
        position: sticky;
        z-index: ${w};
        background: ${e.palette.primary.contrast};
        box-shadow: ${l?`${s?"-1px":"1px"} 0 0 0 ${e.palette.border.light}`:"unset"};
      `}
  `}
`,k=({children:e,style:t,dataTestId:l,textAlign:a="left",...s})=>{const{fixedColumns:o,fixedEndColumns:n,showBoxShadow:r}=g(),p=Number(s["data-column-index"]),x=o.indexOf(p),b=n.indexOf(p);let i={};return(o!=null&&o.length||n!=null&&n.length)&&(i={fixed:x!==-1,fixedColumnIndex:x,fixedEnd:b!==-1,fixedEndColumnIndex:b,showBoxShadow:r.includes(p)}),f.jsx(j,{"data-testid":l??"table-column-header",style:t,textAlign:a,...i,...s,children:e})},H=h.tbody`
  ${({theme:e})=>`
    display: table-header-group;
    
    tr:hover td {
      background-color: ${e.palette.base.light};
    }
  `}
`,D=({children:e,style:t,dataTestId:l})=>f.jsx(H,{"data-testid":l??"table-body",style:t,children:e}),_=h.tr`
  ${({theme:e,selectableRow:t})=>`
    display: table-row;
    border-radius: ${e.radius.none};
    box-shadow: ${e.shadows.none};
    padding: ${e.spacing.none};
    width: 100%;
    background-color: ${e.palette.base.default};
    cursor: ${t?"pointer":"auto"};
  `}
`,v=({children:e,dataTestId:t,style:l,onClick:a})=>{const s=!!a,{columnsLength:o,setFixedColumns:n,setFixedEndColumns:r,fixedColumnCount:p,fixedEndColumnCount:x,showBoxShadow:b}=g(),i=[],d=[],S=u=>{u<p&&(i.push(u),b.splice(0,1,u)),u>=o-x&&(d.length===0&&b.splice(1,1,u),d.unshift(u))},E=p>0||x>0,T=c.Children.map(e,(u,C)=>c.isValidElement(u)&&E?(S(C),c.cloneElement(u,{...u.props,"data-column-index":C})):u);return i.length&&n(i),d&&r(d),f.jsx(_,{...a&&{onClick:a},"data-testid":t??"table-row",selectableRow:s,style:l,children:T})},I=h.td`
  ${({theme:e,columnWidth:t,textAlign:l,showBoxShadow:a=!1,fixed:s=!1,fixedEnd:o=!1,fixedColumnIndex:n=0,fixedEndColumnIndex:r=0})=>`
    display: table-cell;
    min-width: ${$}px;
    word-break: break-word;
    border-top: 1px solid ${e.palette.border.light};
    padding: ${e.spacing["2xs"]};
    text-align: ${l};
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

    ${(s||o)&&`
        z-index: ${w};
        left: ${s?`${n*$}px`:"unset"};
        right: ${o?`${r*$}px`:"unset"};
        position: sticky;
        background: ${e.palette.primary.contrast};
        box-shadow: ${a?`${o?"-1px":"1px"} 0 0 0 ${e.palette.border.light}`:"unset"};
      `}
  `}
`,N=({children:e,columnWidth:t,style:l,dataTestId:a,textAlign:s="left",...o})=>{const{fixedColumns:n,fixedEndColumns:r,showBoxShadow:p}=g(),x=Number(o["data-column-index"]),b=n.indexOf(x),i=r.indexOf(x);let d={};return(n!=null&&n.length||r!=null&&r.length)&&(d={fixed:b!==-1,fixedColumnIndex:b,fixedEnd:i!==-1,fixedEndColumnIndex:i,showBoxShadow:p.includes(x)}),f.jsx(I,{columnWidth:t,"data-testid":a??"table-data-cell",style:l,textAlign:s,...d,...o,children:e})},O=h.table`
  ${({isFixed:e})=>`
    table-layout: ${e?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,m=({children:e,dataTestId:t,style:l,isFixed:a=!1,fixedColumnCount:s=0,fixedEndColumnCount:o=0})=>f.jsx(R,{fixedColumnCount:s,fixedEndColumnCount:o,children:f.jsx(O,{"data-testid":t??"table",isFixed:a,style:l,children:e})});m.Head=F;m.ColumnHeader=k;m.Body=D;m.Row=v;m.DataCell=N;export{m as T};
