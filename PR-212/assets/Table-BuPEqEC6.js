import{j as f}from"./jsx-runtime-CKrituN3.js";import{r as d}from"./index-CBqU2yxZ.js";import"./index-Cf0MdtL9.js";import"./index-BtM5VmRH.js";import{b as L,c as I}from"./z-index-C-tE6wDk.js";import{n as m}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const _={columnsLength:0,setColumnsLength:()=>null,fixedColumnCount:0,fixedEndColumnCount:0,fixedColumns:[],setFixedColumns:()=>null,fixedEndColumns:[],setFixedEndColumns:()=>null,showBoxShadow:[],setShowBoxShadow:()=>null,isColumnsFixed:!1},B=d.createContext(_),v=({children:e,fixedColumnCount:t,fixedEndColumnCount:n,isColumnsFixed:l})=>{const s=d.useRef([]),o=d.useRef([]),r=d.useRef(0),a=d.useRef([]),x={get columnsLength(){return r.current},setColumnsLength:i=>{r.current=i},fixedColumnCount:t,fixedEndColumnCount:n,isColumnsFixed:l,get fixedColumns(){return s.current},setFixedColumns:i=>{s.current=i},get fixedEndColumns(){return o.current},setFixedEndColumns:i=>{o.current=i},get showBoxShadow(){return a.current},setShowBoxShadow:i=>{a.current=i}};return f.jsx(B.Provider,{value:x,children:e})},C=()=>{const e=d.useContext(B);if(!e)throw new Error("Table compound components cannot be rendered outside the Table component");return e},H=m.thead`
  ${({theme:e,hasFixedHeader:t})=>`
    display: table-header-group;
    ${t&&`
        position: sticky;
        top: 0;
        background-color: ${e.palette.base.default};
        z-index: ${L};
        box-shadow: ${e.shadows.xs};
      `}
`}
`,N=({style:e,dataTestId:t,children:n,hasFixedHeader:l=!1})=>{const{setColumnsLength:s}=C();return d.Children.map(n,o=>{var r;d.isValidElement(o)&&s(((r=o.props.children)==null?void 0:r.length)??0)}),f.jsx(H,{"data-testid":t??"table-head",hasFixedHeader:l,style:e,children:n})},O=m.th`
  ${({theme:e,textAlign:t,showBoxShadow:n=!1,fixed:l=!1,fixedEnd:s=!1,fixedPosition:o=0})=>`
    text-align: ${t};
    color: ${e.palette.content.heading};
    padding: 0 ${e.spacing["2xs"]} ${e.spacing["2xs"]};
    ${e.fontStyles.button3};

    ${(l||s)&&`
        left: ${l?`${o}px`:"unset"};
        right: ${s?`${o}px`:"unset"};
        position: sticky;
        z-index: ${L};
        background: ${e.palette.primary.contrast};
        box-shadow: ${n?`${s?"-1px":"1px"} 0 0 0 ${e.palette.border.light}`:"unset"};
      `}
  `}
`,P=({children:e,style:t,dataTestId:n,textAlign:l="left",...s})=>{const{fixedColumns:o,fixedEndColumns:r,showBoxShadow:a}=C(),u=Number(s["data-column-index"]),c=Number(s["data-fixed-position"]),b=o.indexOf(u),h=r.indexOf(u);let x={};return(o!=null&&o.length||r!=null&&r.length)&&(x={fixed:b!==-1,fixedEnd:h!==-1,showBoxShadow:a.includes(u),fixedPosition:c}),f.jsx(O,{"data-testid":n??"table-column-header",style:t,textAlign:l,...x,...s,children:e})},j=m.tbody`
  ${({theme:e})=>`
    display: table-header-group;
    
    tr:hover td {
      background-color: ${e.palette.base.light};
    }
  `}
`,D=({children:e,style:t,dataTestId:n})=>f.jsx(j,{"data-testid":n??"table-body",style:t,children:e}),k=(e,t,n,l)=>{const s=new IntersectionObserver(([{isIntersecting:o}])=>{l((t>0||n>0)&&!o)},{threshold:1});return e.current&&s.observe(e.current),s},A=(e,t)=>d.Children.map(e,(n,l)=>d.isValidElement(n)?t(n,l):n),W=e=>[...e.children].map(n=>n.clientWidth),U=(e,t)=>{const n=t.slice(0,e);return n.length>0?n.reduce((s,o)=>s+o):0},M=(e,t)=>{const n=t.slice(e+1,t.length);return n.length>0?n.reduce((s,o)=>s+o):0},V=m.tr`
  ${({theme:e,selectableRow:t})=>`
    display: table-row;
    border-radius: ${e.radius.none};
    box-shadow: ${e.shadows.none};
    padding: ${e.spacing.none};
    width: 100%;
    background-color: ${e.palette.base.default};
    cursor: ${t?"pointer":"auto"};
  `}
`,z=0,X=1,Z=({children:e,dataTestId:t,style:n,onClick:l})=>{const s=!!l,{columnsLength:o,setFixedColumns:r,setFixedEndColumns:a,fixedColumnCount:u,fixedEndColumnCount:c,isColumnsFixed:b,setShowBoxShadow:h}=C(),x=d.useRef(null);let i=e;if(b&&x.current){const y=[],E=[],$=[],T=W(x.current);i=A(e,(w,p)=>{let S=0;const R=p<u,F=p>=o-c;return R&&(S=U(p,T),y.push(p),$[z]=p),F&&(S=M(p,T),E.unshift(p),$[X]=$[1]??p),R||F?d.cloneElement(w,{...w.props,"data-column-index":p,"data-fixed-position":S}):w}),r(y),a(E),h($)}return f.jsx(V,{ref:x,...l&&{onClick:l},"data-testid":t??"table-row",selectableRow:s,style:n,children:i})},G=110,K=m.td`
  ${({theme:e,columnWidth:t,textAlign:n,showBoxShadow:l=!1,fixed:s=!1,fixedEnd:o=!1,fixedPosition:r=0})=>`
    display: table-cell;
    min-width: ${G}px;
    word-break: break-word;
    border-top: 1px solid ${e.palette.border.light};
    padding: ${e.spacing["2xs"]};
    text-align: ${n};
    color: ${e.palette.content.body};
    ${e.fontStyles.body2};

    &:first-of-type {
      padding-top: ${e.spacing["2xs"]};
      border-bottom: none;
    }

    ${t?`
        width: ${t};
        max-width: ${t};
      `:""}

    ${(s||o)&&`
        left: ${s?`${r}px`:"unset"};
        right: ${o?`${r}px`:"unset"};
        position: sticky;
        z-index: ${I};
        background: ${e.palette.primary.contrast};
        box-shadow: ${l?`${o?"-1px":"1px"} 0 0 0 ${e.palette.border.light}`:"unset"};
      `}
  `}
`,Y=({children:e,columnWidth:t,style:n,dataTestId:l,textAlign:s="left",...o})=>{const{fixedColumns:r,fixedEndColumns:a,showBoxShadow:u}=C(),c=Number(o["data-column-index"]),b=Number(o["data-fixed-position"]),h=r.indexOf(c),x=a.indexOf(c);let i={};return(r!=null&&r.length||a!=null&&a.length)&&(i={fixed:h!==-1,fixedEnd:x!==-1,showBoxShadow:u.includes(c),fixedPosition:b}),f.jsx(K,{columnWidth:t,"data-testid":l??"table-data-cell",style:n,textAlign:s,...i,...o,children:e})},q=m.table`
  ${({isFixed:e})=>`
    table-layout: ${e?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,g=({children:e,dataTestId:t,style:n,isFixed:l=!1,fixedColumnCount:s=0,fixedEndColumnCount:o=0})=>{const r=d.useRef(null),[a,u]=d.useState(!1);return d.useEffect(()=>{const c=k(r,s,o,u);return()=>c.disconnect()},[s,o]),f.jsx(v,{fixedColumnCount:s,fixedEndColumnCount:o,isColumnsFixed:a,children:f.jsx(q,{"data-testid":t??"table",isFixed:l,ref:r,style:n,children:e})})};g.Head=N;g.ColumnHeader=P;g.Body=D;g.Row=Z;g.DataCell=Y;export{g as T};
