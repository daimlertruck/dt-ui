import{j as b}from"./jsx-runtime-CKrituN3.js";import{r as i}from"./index-CBqU2yxZ.js";import"./index-Cf0MdtL9.js";import"./index-BtM5VmRH.js";import{b as T}from"./z-index-Bx-k-k_v.js";import{n as g}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const H={columnsLength:0,setColumnsLength:()=>null,fixedColumnCount:0,fixedEndColumnCount:0,fixedColumns:[],setFixedColumns:()=>null,fixedEndColumns:[],setFixedEndColumns:()=>null,showBoxShadow:[],setShowBoxShadow:()=>null},B=i.createContext(H),N=({children:t,fixedColumnCount:o,fixedEndColumnCount:l})=>{const a=i.useRef([]),n=i.useRef([]),e=i.useRef(0),s=i.useRef([]),x={get columnsLength(){return e.current},setColumnsLength:d=>{e.current=d},fixedColumnCount:o,fixedEndColumnCount:l,get fixedColumns(){return a.current},setFixedColumns:d=>{a.current=d},get fixedEndColumns(){return n.current},setFixedEndColumns:d=>{n.current=d},get showBoxShadow(){return s.current},setShowBoxShadow:d=>{s.current=d}};return b.jsx(B.Provider,{value:x,children:t})},y=()=>{const t=i.useContext(B);if(!t)throw new Error("Table compound components cannot be rendered outside the Table component");return t},D=g.thead`
  ${({theme:t,hasFixedHeader:o})=>`
    display: table-header-group;
    ${o&&`
        position: sticky;
        top: 0;
        background-color: ${t.palette.base.default};
        z-index: ${T};
        box-shadow: ${t.shadows.xs};
      `}
`}
`,_=({style:t,dataTestId:o,children:l,hasFixedHeader:a=!1})=>{const{setColumnsLength:n}=y();return i.Children.map(l,e=>{var s;i.isValidElement(e)&&n(((s=e.props.children)==null?void 0:s.length)??0)}),b.jsx(D,{"data-testid":o??"table-head",hasFixedHeader:a,style:t,children:l})},O=g.th`
  ${({theme:t,textAlign:o,showBoxShadow:l=!1,fixed:a=!1,fixedEnd:n=!1,previousTotalWidth:e=0})=>`
    text-align: ${o};
    color: ${t.palette.content.heading};
    padding: 0 ${t.spacing["2xs"]} ${t.spacing["2xs"]};
    ${t.fontStyles.button3};

    ${(a||n)&&`
        left: ${a?`${e}px`:"unset"};
        right: ${n?`${e}px`:"unset"};
        position: sticky;
        z-index: ${T};
        background: ${t.palette.primary.contrast};
        box-shadow: ${l?`${n?"-1px":"1px"} 0 0 0 ${t.palette.border.light}`:"unset"};
      `}
  `}
`,P=({children:t,style:o,dataTestId:l,textAlign:a="left",...n})=>{const{fixedColumns:e,fixedEndColumns:s,showBoxShadow:p}=y(),u=Number(n["data-column-index"]),c=Number(n["data-previous-width"]),h=e.indexOf(u),x=s.indexOf(u);let d={};return(e!=null&&e.length||s!=null&&s.length)&&(d={fixed:h!==-1,fixedColumnIndex:h,fixedEnd:x!==-1,fixedEndColumnIndex:x,showBoxShadow:p.includes(u),previousTotalWidth:c}),b.jsx(O,{"data-testid":l??"table-column-header",style:o,textAlign:a,...d,...n,children:t})},A=g.tbody`
  ${({theme:t})=>`
    display: table-header-group;
    
    tr:hover td {
      background-color: ${t.palette.base.light};
    }
  `}
`,V=({children:t,style:o,dataTestId:l})=>b.jsx(A,{"data-testid":l??"table-body",style:o,children:t}),I=g.tr`
  ${({theme:t,selectableRow:o})=>`
    display: table-row;
    border-radius: ${t.radius.none};
    box-shadow: ${t.shadows.none};
    padding: ${t.spacing.none};
    width: 100%;
    background-color: ${t.palette.base.default};
    cursor: ${o?"pointer":"auto"};
  `}
`,U=({children:t,dataTestId:o,style:l,onClick:a})=>{const n=!!a,{columnsLength:e,setFixedColumns:s,setFixedEndColumns:p,fixedColumnCount:u,fixedEndColumnCount:c,showBoxShadow:h}=y(),x=[],d=[],[$,v]=i.useState([]),w=i.useRef(null);i.useEffect(()=>{if(w!=null&&w.current&&(u||c)){const r=[...w.current.children].map(f=>f.clientWidth);v(r)}},[u,c]);const S=(r,f=!1)=>{let m;return f?m=$.reverse().slice(0,$.length-1-r):m=$.slice(0,r),m.length>0?m.reduce((W,k)=>W+k):0},R=r=>{if(r<u)return x.push(r),h.splice(0,1,r),S(r);if(r>=e-c)return d.length===0&&h.splice(1,1,r),d.unshift(r),S(r,!0)},L=u>0||c>0,F=()=>{const r=i.Children.map(t,(f,m)=>{if(i.isValidElement(f)&&L){const E=R(m);return i.cloneElement(f,{...f.props,"data-column-index":m,"data-previous-width":E})}return f});return x.length&&s(x),d&&p(d),r},j=u>0||c>0;return b.jsx(I,{ref:w,...a&&{onClick:a},"data-testid":o??"table-row",selectableRow:n,style:l,children:j?F():t})},z=110,M=g.td`
  ${({theme:t,columnWidth:o,textAlign:l,showBoxShadow:a=!1,fixed:n=!1,fixedEnd:e=!1,previousTotalWidth:s=0})=>`
    display: table-cell;
    min-width: ${z}px;
    word-break: break-word;
    border-top: 1px solid ${t.palette.border.light};
    padding: ${t.spacing["2xs"]};
    text-align: ${l};
    color: ${t.palette.content.body};
    ${t.fontStyles.body2};

    &:first-of-type {
      padding-top: ${t.spacing["2xs"]};
      border-bottom: none;
    }

    ${o?`
        width: ${o};
        max-width: ${o};
      `:""}

    ${(n||e)&&`
        left: ${n?`${s}px`:"unset"};
        right: ${e?`${s}px`:"unset"};
        position: sticky;
        background: ${t.palette.primary.contrast};
        box-shadow: ${a?`${e?"-1px":"1px"} 0 0 0 ${t.palette.border.light}`:"unset"};
      `}
  `}
`,X=({children:t,columnWidth:o,style:l,dataTestId:a,textAlign:n="left",...e})=>{const{fixedColumns:s,fixedEndColumns:p,showBoxShadow:u}=y(),c=Number(e["data-column-index"]),h=Number(e["data-previous-width"]),x=s.indexOf(c),d=p.indexOf(c);let $={};return(s!=null&&s.length||p!=null&&p.length)&&($={fixed:x!==-1,fixedColumnIndex:x,fixedEnd:d!==-1,fixedEndColumnIndex:d,showBoxShadow:u.includes(c),previousTotalWidth:h}),b.jsx(M,{columnWidth:o,"data-testid":a??"table-data-cell",style:l,textAlign:n,...$,...e,children:t})},Z=g.table`
  ${({isFixed:t})=>`
    table-layout: ${t?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,C=({children:t,dataTestId:o,style:l,isFixed:a=!1,fixedColumnCount:n=0,fixedEndColumnCount:e=0})=>b.jsx(N,{fixedColumnCount:n,fixedEndColumnCount:e,children:b.jsx(Z,{"data-testid":o??"table",isFixed:a,style:l,children:t})});C.Head=_;C.ColumnHeader=P;C.Body=V;C.Row=U;C.DataCell=X;export{C as T};
