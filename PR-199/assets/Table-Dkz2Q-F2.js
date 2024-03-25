import{j as r}from"./jsx-runtime-CKrituN3.js";import"./index-u8Tre6qU.js";import"./index-BtM5VmRH.js";import{b as f}from"./z-index-Bx-k-k_v.js";import{r as x}from"./index-CBqU2yxZ.js";import{n as b}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const j=b.thead`
  ${({theme:t,hasFixedHeader:e})=>`
    display: table-header-group;
    ${e&&`
        position: sticky;
        top: 0;
        background-color: ${t.palette.base.default};
        z-index: ${f};
        box-shadow: ${t.shadows.xs};
      `}
`}
`,k=({style:t,dataTestId:e,children:n,hasFixedHeader:a=!1})=>r.jsx(j,{"data-testid":e??"table-head",hasFixedHeader:a,style:t,children:n}),E={stickyColumns:[],stickyEndColumns:[],showBoxShadow:[],setShowBoxShadow:()=>null},h=x.createContext(E),C=({children:t,stickyColumns:e=[],stickyEndColumns:n=[]})=>{const[a,o]=x.useState([]),s={stickyColumns:e,stickyEndColumns:n.slice().reverse(),showBoxShadow:a,setShowBoxShadow:o};return r.jsx(h.Provider,{value:s,children:t})},g=()=>{const t=x.useContext(h);if(!t)throw new Error("Table compound components cannot be rendered outside the Table component");return t},p=110,I=b.th`
  ${({theme:t,textAlign:e,showBoxShadow:n,sticky:a=!1,stickyEnd:o=!1,stickyColumnIndex:s=0,stickyEndColumnIndex:d=0})=>`
    text-align: ${e};
    color: ${t.palette.content.heading};
    padding: 0 ${t.spacing["2xs"]} ${t.spacing["2xs"]};
    ${t.fontStyles.button3};

    ${(a||o)&&`
        left: ${a?`${s*p}px`:"unset"};
        right: ${o?`${d*p}px`:"unset"};
        position: sticky;
        z-index: ${f};
        background: white;
        box-shadow: ${n?`${o?"-1px":"1px"} 0 0 0 ${t.palette.border.light}`:"unset"};
      `}
  `}
`,H=({children:t,style:e,dataTestId:n,textAlign:a="left",columnName:o=""})=>{const{stickyColumns:s,stickyEndColumns:d,showBoxShadow:l,setShowBoxShadow:w}=g(),[$,S]=x.useState(!1),[y,T]=x.useState(!1),u=i=>i.length===i.indexOf(o)+1&&!l.includes(o)&&w(B=>[...B,o]);return x.useEffect(()=>{s!=null&&s.length&&(s.find(i=>o===i)&&S(!0),u(s)),d!=null&&d.length&&(d.find(i=>o===i)&&T(!0),u(d))},[]),r.jsx(I,{"data-testid":n??"table-column-header",showBoxShadow:l==null?void 0:l.includes(o),sticky:$,stickyColumnIndex:s==null?void 0:s.indexOf(o),stickyEnd:y,stickyEndColumnIndex:d==null?void 0:d.indexOf(o),style:e,textAlign:a,children:t})},v=b.tbody`
  ${({theme:t})=>`
    display: table-header-group;
    
    tr:hover {
      background-color: ${t.palette.base.light};
    }
  `}
`,D=({children:t,style:e,dataTestId:n})=>r.jsx(v,{"data-testid":n??"table-body",style:e,children:t}),O=b.tr`
  ${({theme:t,selectableRow:e})=>`
    display: table-row;
    border-radius: ${t.radius.none};
    box-shadow: ${t.shadows.none};
    padding: ${t.spacing.none};
    width: 100%;
    background-color: ${t.palette.base.default};
    cursor: ${e?"pointer":"auto"};
  `}
`,R=({children:t,dataTestId:e,style:n,onClick:a})=>{const o=!!a;return r.jsx(O,{...a&&{onClick:a},"data-testid":e??"table-row",selectableRow:o,style:n,children:t})},_=b.td`
  ${({theme:t,columnWidth:e,textAlign:n,showBoxShadow:a=!1,sticky:o=!1,stickyEnd:s=!1,stickyColumnIndex:d=0,stickyEndColumnIndex:l=0})=>`
    display: table-cell;
    min-width: ${p}px;
    word-break: break-word;
    border-top: 1px solid ${t.palette.border.light};
    padding: ${t.spacing["2xs"]};
    text-align: ${n};
    color: ${t.palette.content.body};
    ${t.fontStyles.body2};

    &:first-of-type {
      padding-top: ${t.spacing["2xs"]};
      border-bottom: none;
    }

    ${!!e&&`
        width: ${e};
        max-width: ${e};
      `}

    ${(o||s)&&`
        left: ${o?`${d*p}px`:"unset"};
        right: ${s?`${l*p}px`:"unset"};
        position: sticky;
        z-index: ${f};
        background: white;
        box-shadow: ${a?`${s?"-1px":"1px"} 0 0 0 ${t.palette.border.light}`:"unset"};
      `}
  `}
`,A=({children:t,columnName:e,columnWidth:n,style:a,dataTestId:o,textAlign:s="left"})=>{const{stickyColumns:d,stickyEndColumns:l,showBoxShadow:w}=g();let $={};return e&&(d!=null&&d.length||l!=null&&l.length)&&($={sticky:d.includes(e),stickyColumnIndex:d.indexOf(e),stickyEnd:l.includes(e),stickyEndColumnIndex:l.indexOf(e),showBoxShadow:w.includes(e)}),r.jsx(_,{columnWidth:n,"data-testid":o??"table-data-cell",style:a,textAlign:s,...$,children:t})},L=b.table`
  ${({isFixed:t})=>`
    table-layout: ${t?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,c=({children:t,dataTestId:e,style:n,isFixed:a=!1,stickyColumns:o=[],stickyEndColumns:s=[]})=>r.jsx(C,{stickyColumns:o,stickyEndColumns:s,children:r.jsx(L,{"data-testid":e??"table",isFixed:a,style:n,children:t})});c.Head=k;c.ColumnHeader=H;c.Body=D;c.Row=R;c.DataCell=A;export{c as T};
