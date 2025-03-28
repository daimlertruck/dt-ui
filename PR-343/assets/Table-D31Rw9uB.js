import{j as f}from"./jsx-runtime-CKrituN3.js";import{r as l}from"./index-CBqU2yxZ.js";import"./index-bKUcOz2Q.js";import"./index-BtM5VmRH.js";import{b as L,c as I}from"./z-index-Ds5QkyqS.js";import{n as m}from"./emotion-styled.browser.esm-B1le5_Hy.js";const v={columnsLength:0,setColumnsLength:()=>null,fixedColumnCount:0,fixedEndColumnCount:0,fixedColumns:[],setFixedColumns:()=>null,fixedEndColumns:[],setFixedEndColumns:()=>null,showBoxShadow:[],setShowBoxShadow:()=>null,isColumnsFixed:!1},B=l.createContext(v),_=({children:e,fixedColumnCount:o,fixedEndColumnCount:s,isColumnsFixed:r})=>{const n=l.useRef([]),t=l.useRef([]),d=l.useRef(0),a=l.useRef([]),x={get columnsLength(){return d.current},setColumnsLength:i=>{d.current=i},fixedColumnCount:o,fixedEndColumnCount:s,isColumnsFixed:r,get fixedColumns(){return n.current},setFixedColumns:i=>{n.current=i},get fixedEndColumns(){return t.current},setFixedEndColumns:i=>{t.current=i},get showBoxShadow(){return a.current},setShowBoxShadow:i=>{a.current=i}};return f.jsx(B.Provider,{value:x,children:e})},g=()=>{const e=l.useContext(B);if(!e)throw new Error("Table compound components cannot be rendered outside the Table component");return e},H=m.thead`
  ${({theme:e,hasFixedHeader:o})=>`
    display: table-header-group;
    ${o&&`
        position: sticky;
        top: 0;
        background-color: ${e.palette.surface.contrast};
        z-index: ${L};
        box-shadow: ${e.shadows.xs};
      `}
`}
`,N=({style:e,dataTestId:o,children:s,hasFixedHeader:r=!1})=>{const{setColumnsLength:n}=g();return l.Children.map(s,t=>{var d;l.isValidElement(t)&&n(((d=t.props.children)==null?void 0:d.length)??0)}),f.jsx(H,{"data-testid":o??"table-head",hasFixedHeader:r,style:e,children:s})},O=m.th`
  ${({theme:e,textAlign:o,showBoxShadow:s=!1,fixed:r=!1,fixedEnd:n=!1,fixedPosition:t=0})=>`
    text-align: ${o};
    color: ${e.palette.content.dark};
    padding: 0 ${e.spacing["2xs"]} ${e.spacing["2xs"]};
    ${e.fontStyles.button3};

    ${(r||n)&&`
        left: ${r?`${t}px`:"unset"};
        right: ${n?`${t}px`:"unset"};
        position: sticky;
        z-index: ${L};
        background: ${e.palette.primary.contrast};
        box-shadow: ${s?`${n?"-1px":"1px"} 0 0 0 ${e.palette.border.light}`:"unset"};
      `}
  `}
`,P=({children:e,style:o,dataTestId:s,textAlign:r="left",...n})=>{const{fixedColumns:t,fixedEndColumns:d,showBoxShadow:a}=g(),u=Number(n["data-column-index"]),c=Number(n["data-fixed-position"]),b=t.indexOf(u),h=d.indexOf(u);let x={};return(t!=null&&t.length||d!=null&&d.length)&&(x={fixed:b!==-1,fixedEnd:h!==-1,showBoxShadow:a.includes(u),fixedPosition:c}),f.jsx(O,{"data-testid":s??"table-column-header",style:o,textAlign:r,...x,...n,children:e})},j=m.tbody`
  ${({theme:e})=>`
    display: table-header-group;
    
    tr:hover td {
      background-color: ${e.palette.surface.light};
    }
  `}
`,W=({children:e,style:o,dataTestId:s})=>f.jsx(j,{"data-testid":s??"table-body",style:o,children:e}),k=(e,o,s,r)=>{const n=new IntersectionObserver(([{isIntersecting:t}])=>{r((o>0||s>0)&&!t)},{threshold:1});return e.current&&n.observe(e.current),n},D=(e,o)=>l.Children.map(e,(s,r)=>l.isValidElement(s)?o(s,r):s),A=e=>[...e.children].map(s=>s.clientWidth),U=(e,o)=>o.slice(0,e).reduce((n,t)=>n+t,0),M=(e,o)=>o.slice(e+1).reduce((n,t)=>n+t,0),V=m.tr`
  ${({theme:e,selectableRow:o})=>`
    display: table-row;
    border-radius: ${e.radius.none};
    box-shadow: ${e.shadows.none};
    padding: ${e.spacing.none};
    width: 100%;
    background-color: ${e.palette.surface.contrast};
    cursor: ${o?"pointer":"auto"};
  `}
`,z=0,X=1,Z=({children:e,dataTestId:o,style:s,onClick:r})=>{const n=!!r,{columnsLength:t,setFixedColumns:d,setFixedEndColumns:a,fixedColumnCount:u,fixedEndColumnCount:c,isColumnsFixed:b,setShowBoxShadow:h}=g(),x=l.useRef(null);let i=e;if(b&&x.current){const y=[],E=[],C=[],T=A(x.current);i=D(e,(w,p)=>{let S=0;const R=p<u,F=p>=t-c;return R&&(S=U(p,T),y.push(p),C[z]=p),F&&(S=M(p,T),E.unshift(p),C[X]=C[1]??p),R||F?l.cloneElement(w,{...w.props,"data-column-index":p,"data-fixed-position":S}):w}),d(y),a(E),h(C)}return f.jsx(V,{ref:x,...r&&{onClick:r},"data-testid":o??"table-row",selectableRow:n,style:s,children:i})},G=110,K=m.td`
  ${({theme:e,columnWidth:o,textAlign:s,showBoxShadow:r=!1,fixed:n=!1,fixedEnd:t=!1,fixedPosition:d=0})=>`
    display: table-cell;
    min-width: ${G}px;
    word-break: break-word;
    border-top: 1px solid ${e.palette.border.light};
    padding: ${e.spacing["2xs"]};
    text-align: ${s};
    color: ${e.palette.content.default};
    ${e.fontStyles.body2};

    &:first-of-type {
      padding-top: ${e.spacing["2xs"]};
      border-bottom: none;
    }

    ${o?`
        width: ${o};
        max-width: ${o};
      `:""}

    ${(n||t)&&`
        left: ${n?`${d}px`:"unset"};
        right: ${t?`${d}px`:"unset"};
        position: sticky;
        z-index: ${I};
        background: ${e.palette.primary.contrast};
        box-shadow: ${r?`${t?"-1px":"1px"} 0 0 0 ${e.palette.border.light}`:"unset"};
      `}
  `}
`,Y=({children:e,columnWidth:o,style:s,dataTestId:r,textAlign:n="left",...t})=>{const{fixedColumns:d,fixedEndColumns:a,showBoxShadow:u}=g(),c=Number(t["data-column-index"]),b=Number(t["data-fixed-position"]),h=d.indexOf(c),x=a.indexOf(c);let i={};return(d!=null&&d.length||a!=null&&a.length)&&(i={fixed:h!==-1,fixedEnd:x!==-1,showBoxShadow:u.includes(c),fixedPosition:b}),f.jsx(K,{columnWidth:o,"data-testid":r??"table-data-cell",style:s,textAlign:n,...i,...t,children:e})},q=m.table`
  ${({isFixed:e})=>`
    table-layout: ${e?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,$=({children:e,dataTestId:o,style:s,isFixed:r=!1,fixedColumnCount:n=0,fixedEndColumnCount:t=0})=>{const d=l.useRef(null),[a,u]=l.useState(!1);return l.useEffect(()=>{const c=k(d,n,t,u);return()=>c.disconnect()},[n,t]),f.jsx(_,{fixedColumnCount:n,fixedEndColumnCount:t,isColumnsFixed:a,children:f.jsx(q,{"data-testid":o??"table",isFixed:r,ref:d,style:s,children:e})})};$.Head=N;$.ColumnHeader=P;$.Body=W;$.Row=Z;$.DataCell=Y;export{$ as T};
