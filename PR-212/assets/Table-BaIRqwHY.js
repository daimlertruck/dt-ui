import{j as m}from"./jsx-runtime-CKrituN3.js";import{r as a}from"./index-CBqU2yxZ.js";import"./index-Cf0MdtL9.js";import"./index-BtM5VmRH.js";import{b as B,c as N}from"./z-index-C-tE6wDk.js";import{n as w}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const H={columnsLength:0,setColumnsLength:()=>null,fixedColumnCount:0,fixedEndColumnCount:0,fixedColumns:[],setFixedColumns:()=>null,fixedEndColumns:[],setFixedEndColumns:()=>null,showBoxShadow:[],setShowBoxShadow:()=>null,isColumnsSticky:!1},R=a.createContext(H),I=({children:e,fixedColumnCount:n,fixedEndColumnCount:l,isColumnsSticky:r})=>{const s=a.useRef([]),t=a.useRef([]),o=a.useRef(0),u=a.useRef([]),f={get columnsLength(){return o.current},setColumnsLength:d=>{o.current=d},fixedColumnCount:n,fixedEndColumnCount:l,isColumnsSticky:r,get fixedColumns(){return s.current},setFixedColumns:d=>{s.current=d},get fixedEndColumns(){return t.current},setFixedEndColumns:d=>{t.current=d},get showBoxShadow(){return u.current},setShowBoxShadow:d=>{u.current=d}};return m.jsx(R.Provider,{value:f,children:e})},C=()=>{const e=a.useContext(R);if(!e)throw new Error("Table compound components cannot be rendered outside the Table component");return e},D=w.thead`
  ${({theme:e,hasFixedHeader:n})=>`
    display: table-header-group;
    ${n&&`
        position: sticky;
        top: 0;
        background-color: ${e.palette.base.default};
        z-index: ${B};
        box-shadow: ${e.shadows.xs};
      `}
`}
`,O=({style:e,dataTestId:n,children:l,hasFixedHeader:r=!1})=>{const{setColumnsLength:s}=C();return a.Children.map(l,t=>{var o;a.isValidElement(t)&&s(((o=t.props.children)==null?void 0:o.length)??0)}),m.jsx(D,{"data-testid":n??"table-head",hasFixedHeader:r,style:e,children:l})},A=w.th`
  ${({theme:e,textAlign:n,showBoxShadow:l=!1,fixed:r=!1,fixedEnd:s=!1,previousTotalWidth:t=0})=>`
    text-align: ${n};
    color: ${e.palette.content.heading};
    padding: 0 ${e.spacing["2xs"]} ${e.spacing["2xs"]};
    ${e.fontStyles.button3};

    ${(r||s)&&`
        left: ${r?`${t}px`:"unset"};
        right: ${s?`${t}px`:"unset"};
        position: sticky;
        z-index: ${B};
        background: ${e.palette.primary.contrast};
        box-shadow: ${l?`${s?"-1px":"1px"} 0 0 0 ${e.palette.border.light}`:"unset"};
      `}
  `}
`,P=({children:e,style:n,dataTestId:l,textAlign:r="left",...s})=>{const{fixedColumns:t,fixedEndColumns:o,showBoxShadow:u}=C(),p=Number(s["data-column-index"]),c=Number(s["data-previous-width"]),x=t.indexOf(p),h=o.indexOf(p);let f={};return(t!=null&&t.length||o!=null&&o.length)&&(f={fixed:x!==-1,fixedColumnIndex:x,fixedEnd:h!==-1,fixedEndColumnIndex:h,showBoxShadow:u.includes(p),previousTotalWidth:c}),m.jsx(A,{"data-testid":l??"table-column-header",style:n,textAlign:r,...f,...s,children:e})},U=w.tbody`
  ${({theme:e})=>`
    display: table-header-group;
    
    tr:hover td {
      background-color: ${e.palette.base.light};
    }
  `}
`,V=({children:e,style:n,dataTestId:l})=>m.jsx(U,{"data-testid":l??"table-body",style:n,children:e}),z=w.tr`
  ${({theme:e,selectableRow:n})=>`
    display: table-row;
    border-radius: ${e.radius.none};
    box-shadow: ${e.shadows.none};
    padding: ${e.spacing.none};
    width: 100%;
    background-color: ${e.palette.base.default};
    cursor: ${n?"pointer":"auto"};
  `}
`,M=({children:e,dataTestId:n,style:l,onClick:r})=>{const s=!!r,{columnsLength:t,setFixedColumns:o,setFixedEndColumns:u,fixedColumnCount:p,fixedEndColumnCount:c,isColumnsSticky:x,showBoxShadow:h}=C(),f=[],d=[],[y,v]=a.useState([]),S=a.useRef(null);a.useEffect(()=>{k()},[x]);const k=()=>{if(S.current){const i=[...S.current.children].map(b=>b.clientWidth);v(i)}},T=(i,b=!1)=>{let $;return b?$=y.reverse().slice(0,y.length-1-i):$=y.slice(0,i),$.length>0?$.reduce((j,_)=>j+_):0},L=i=>{if(i<p)return f.push(i),h.splice(0,1,i),T(i);if(i>=t-c)return d.length===0&&h.splice(1,1,i),d.unshift(i),T(i,!0)},F=p>0||c>0,W=()=>{const i=a.Children.map(e,(b,$)=>{if(a.isValidElement(b)&&F){const E=L($);return a.cloneElement(b,{...b.props,"data-column-index":$,"data-previous-width":E})}return b});return f.length&&o(f),d&&u(d),i};return m.jsx(z,{ref:S,...r&&{onClick:r},"data-testid":n??"table-row",selectableRow:s,style:l,children:x?W():e})},X=110,Z=w.td`
  ${({theme:e,columnWidth:n,textAlign:l,showBoxShadow:r=!1,fixed:s=!1,fixedEnd:t=!1,previousTotalWidth:o=0})=>`
    display: table-cell;
    min-width: ${X}px;
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

    ${n?`
        width: ${n};
        max-width: ${n};
      `:""}

    ${(s||t)&&`
        left: ${s?`${o}px`:"unset"};
        right: ${t?`${o}px`:"unset"};
        position: sticky;
        z-index: ${N};
        background: ${e.palette.primary.contrast};
        box-shadow: ${r?`${t?"-1px":"1px"} 0 0 0 ${e.palette.border.light}`:"unset"};
      `}
  `}
`,K=({children:e,columnWidth:n,style:l,dataTestId:r,textAlign:s="left",...t})=>{const{fixedColumns:o,fixedEndColumns:u,showBoxShadow:p}=C(),c=Number(t["data-column-index"]),x=Number(t["data-previous-width"]),h=o.indexOf(c),f=u.indexOf(c);let d={};return(o!=null&&o.length||u!=null&&u.length)&&(d={fixed:h!==-1,fixedColumnIndex:h,fixedEnd:f!==-1,fixedEndColumnIndex:f,showBoxShadow:p.includes(c),previousTotalWidth:x}),m.jsx(Z,{columnWidth:n,"data-testid":r??"table-data-cell",style:l,textAlign:s,...d,...t,children:e})},Y=w.table`
  ${({isFixed:e})=>`
    table-layout: ${e?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,g=({children:e,dataTestId:n,style:l,isFixed:r=!1,fixedColumnCount:s=0,fixedEndColumnCount:t=0})=>{const o=a.useRef(null),[u,p]=a.useState(!1),c=a.useCallback(()=>{if(o.current){const x=new IntersectionObserver(([{isIntersecting:h}])=>{p(s>0||t>0&&!h)},{threshold:1});return x.observe(o.current),()=>x.disconnect()}},[s,t]);return a.useEffect(()=>{c()},[c]),m.jsx(I,{fixedColumnCount:s,fixedEndColumnCount:t,isColumnsSticky:u,children:m.jsx(Y,{"data-testid":n??"table",isFixed:r,ref:o,style:l,children:e})})};g.Head=O;g.ColumnHeader=P;g.Body=V;g.Row=M;g.DataCell=K;export{g as T};
