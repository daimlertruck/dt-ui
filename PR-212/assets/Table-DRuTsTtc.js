import{j as m}from"./jsx-runtime-CKrituN3.js";import{r as a}from"./index-CBqU2yxZ.js";import"./index-Cf0MdtL9.js";import"./index-BtM5VmRH.js";import{b as R,c as N}from"./z-index-C-tE6wDk.js";import{n as w}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const H={columnsLength:0,setColumnsLength:()=>null,fixedColumnCount:0,fixedEndColumnCount:0,fixedColumns:[],setFixedColumns:()=>null,fixedEndColumns:[],setFixedEndColumns:()=>null,showBoxShadow:[],setShowBoxShadow:()=>null,isColumnsSticky:!1},v=a.createContext(H),I=({children:e,fixedColumnCount:n,fixedEndColumnCount:r,isColumnsSticky:l})=>{const s=a.useRef([]),t=a.useRef([]),o=a.useRef(0),u=a.useRef([]),x={get columnsLength(){return o.current},setColumnsLength:d=>{o.current=d},fixedColumnCount:n,fixedEndColumnCount:r,isColumnsSticky:l,get fixedColumns(){return s.current},setFixedColumns:d=>{s.current=d},get fixedEndColumns(){return t.current},setFixedEndColumns:d=>{t.current=d},get showBoxShadow(){return u.current},setShowBoxShadow:d=>{u.current=d}};return m.jsx(v.Provider,{value:x,children:e})},C=()=>{const e=a.useContext(v);if(!e)throw new Error("Table compound components cannot be rendered outside the Table component");return e},D=w.thead`
  ${({theme:e,hasFixedHeader:n})=>`
    display: table-header-group;
    ${n&&`
        position: sticky;
        top: 0;
        background-color: ${e.palette.base.default};
        z-index: ${R};
        box-shadow: ${e.shadows.xs};
      `}
`}
`,O=({style:e,dataTestId:n,children:r,hasFixedHeader:l=!1})=>{const{setColumnsLength:s}=C();return a.Children.map(r,t=>{var o;a.isValidElement(t)&&s(((o=t.props.children)==null?void 0:o.length)??0)}),m.jsx(D,{"data-testid":n??"table-head",hasFixedHeader:l,style:e,children:r})},A=w.th`
  ${({theme:e,textAlign:n,showBoxShadow:r=!1,fixed:l=!1,fixedEnd:s=!1,previousTotalWidth:t=0})=>`
    text-align: ${n};
    color: ${e.palette.content.heading};
    padding: 0 ${e.spacing["2xs"]} ${e.spacing["2xs"]};
    ${e.fontStyles.button3};

    ${(l||s)&&`
        left: ${l?`${t}px`:"unset"};
        right: ${s?`${t}px`:"unset"};
        position: sticky;
        z-index: ${R};
        background: ${e.palette.primary.contrast};
        box-shadow: ${r?`${s?"-1px":"1px"} 0 0 0 ${e.palette.border.light}`:"unset"};
      `}
  `}
`,P=({children:e,style:n,dataTestId:r,textAlign:l="left",...s})=>{const{fixedColumns:t,fixedEndColumns:o,showBoxShadow:u}=C(),p=Number(s["data-column-index"]),c=Number(s["data-previous-width"]),h=t.indexOf(p),f=o.indexOf(p);let x={};return(t!=null&&t.length||o!=null&&o.length)&&(x={fixed:h!==-1,fixedColumnIndex:h,fixedEnd:f!==-1,fixedEndColumnIndex:f,showBoxShadow:u.includes(p),previousTotalWidth:c}),m.jsx(A,{"data-testid":r??"table-column-header",style:n,textAlign:l,...x,...s,children:e})},U=w.tbody`
  ${({theme:e})=>`
    display: table-header-group;
    
    tr:hover td {
      background-color: ${e.palette.base.light};
    }
  `}
`,V=({children:e,style:n,dataTestId:r})=>m.jsx(U,{"data-testid":r??"table-body",style:n,children:e}),z=w.tr`
  ${({theme:e,selectableRow:n})=>`
    display: table-row;
    border-radius: ${e.radius.none};
    box-shadow: ${e.shadows.none};
    padding: ${e.spacing.none};
    width: 100%;
    background-color: ${e.palette.base.default};
    cursor: ${n?"pointer":"auto"};
  `}
`,M=({children:e,dataTestId:n,style:r,onClick:l})=>{const s=!!l,{columnsLength:t,setFixedColumns:o,setFixedEndColumns:u,fixedColumnCount:p,fixedEndColumnCount:c,isColumnsSticky:h,showBoxShadow:f}=C(),x=[],d=[],[y,B]=a.useState([]),S=a.useRef(null);a.useEffect(()=>{L()},[h]);const L=()=>{if(S.current){const i=[...S.current.children].map(b=>b.clientWidth);B(i)}},T=(i,b=!1)=>{let $;return b?$=y.reverse().slice(0,y.length-1-i):$=y.slice(0,i),$.length>0?$.reduce((j,_)=>j+_):0},k=i=>{if(i<p)return x.push(i),f.splice(0,1,i),T(i);if(i>=t-c)return d.length===0&&f.splice(1,1,i),d.unshift(i),T(i,!0)},F=p>0||c>0,W=()=>{const i=a.Children.map(e,(b,$)=>{if(a.isValidElement(b)&&F){const E=k($);return a.cloneElement(b,{...b.props,"data-column-index":$,"data-previous-width":E})}return b});return x.length&&o(x),d&&u(d),i};return m.jsx(z,{ref:S,...l&&{onClick:l},"data-testid":n??"table-row",selectableRow:s,style:r,children:h?W():e})},X=110,Z=w.td`
  ${({theme:e,columnWidth:n,textAlign:r,showBoxShadow:l=!1,fixed:s=!1,fixedEnd:t=!1,previousTotalWidth:o=0})=>`
    display: table-cell;
    min-width: ${X}px;
    word-break: break-word;
    border-top: 1px solid ${e.palette.border.light};
    padding: ${e.spacing["2xs"]};
    text-align: ${r};
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
        box-shadow: ${l?`${t?"-1px":"1px"} 0 0 0 ${e.palette.border.light}`:"unset"};
      `}
  `}
`,K=({children:e,columnWidth:n,style:r,dataTestId:l,textAlign:s="left",...t})=>{const{fixedColumns:o,fixedEndColumns:u,showBoxShadow:p}=C(),c=Number(t["data-column-index"]),h=Number(t["data-previous-width"]),f=o.indexOf(c),x=u.indexOf(c);let d={};return(o!=null&&o.length||u!=null&&u.length)&&(d={fixed:f!==-1,fixedColumnIndex:f,fixedEnd:x!==-1,fixedEndColumnIndex:x,showBoxShadow:p.includes(c),previousTotalWidth:h}),m.jsx(Z,{columnWidth:n,"data-testid":l??"table-data-cell",style:r,textAlign:s,...d,...t,children:e})},Y=w.table`
  ${({isFixed:e})=>`
    table-layout: ${e?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,g=({children:e,dataTestId:n,style:r,isFixed:l=!1,fixedColumnCount:s=0,fixedEndColumnCount:t=0})=>{const o=a.useRef(null),[u,p]=a.useState(!1);return a.useEffect(()=>{if(o.current){const c=new IntersectionObserver(([{isIntersecting:h}])=>{p(s>0||t>0&&!h)},{threshold:1});return c.observe(o.current),()=>c.disconnect()}},[s,t]),m.jsx(I,{fixedColumnCount:s,fixedEndColumnCount:t,isColumnsSticky:u,children:m.jsx(Y,{"data-testid":n??"table",isFixed:l,ref:o,style:r,children:e})})};g.Head=O;g.ColumnHeader=P;g.Body=V;g.Row=M;g.DataCell=K;export{g as T};
