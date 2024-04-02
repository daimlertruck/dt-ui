import{j as x}from"./jsx-runtime-CKrituN3.js";import"./index-u8Tre6qU.js";import"./index-BtM5VmRH.js";import{b as y}from"./z-index-Bx-k-k_v.js";import{r as b}from"./index-CBqU2yxZ.js";import{n as $}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const B=$.thead`
  ${({theme:t,hasFixedHeader:o})=>`
    display: table-header-group;
    ${o&&`
        position: sticky;
        top: 0;
        background-color: ${t.palette.base.default};
        z-index: ${y};
        box-shadow: ${t.shadows.xs};
      `}
`}
`,j=({style:t,dataTestId:o,children:s,hasFixedHeader:n=!1})=>x.jsx(B,{"data-testid":o??"table-head",hasFixedHeader:n,style:t,children:s}),k={columnsLength:0,fixedColumnCount:0,fixedEndColumnCount:0,fixedColumns:[],setFixedColumns:()=>null,fixedEndColumns:[],setFixedEndColumns:()=>null,showBoxShadow:[],setShowBoxShadow:()=>null},E=b.createContext(k),H=({children:t,columnsLength:o,fixedColumnCount:s,fixedEndColumnCount:n})=>{const[e,a]=b.useState([]),[d,l]=b.useState([]),[i,f]=b.useState([]),c={columnsLength:o,fixedColumnCount:s,fixedEndColumnCount:n,fixedColumns:e,setFixedColumns:a,fixedEndColumns:d,setFixedEndColumns:l,showBoxShadow:i,setShowBoxShadow:f};return x.jsx(E.Provider,{value:c,children:t})},T=()=>{const t=b.useContext(E);if(!t)throw new Error("Table compound components cannot be rendered outside the Table component");return t},w=110,F=$.th`
  ${({theme:t,textAlign:o,showBoxShadow:s=!1,fixed:n=!1,fixedEnd:e=!1,fixedColumnIndex:a=0,fixedEndColumnIndex:d=0})=>`
    text-align: ${o};
    color: ${t.palette.content.heading};
    padding: 0 ${t.spacing["2xs"]} ${t.spacing["2xs"]};
    ${t.fontStyles.button3};

    ${(n||e)&&`
        left: ${n?`${a*w}px`:"unset"};
        right: ${e?`${d*w}px`:"unset"};
        position: sticky;
        z-index: ${y};
        background: ${t.palette.primary.contrast};
        box-shadow: ${s?`${e?"-1px":"1px"} 0 0 0 ${t.palette.border.light}`:"unset"};
      `}
  `}
`,L=({children:t,style:o,dataTestId:s,textAlign:n="left",columnIndex:e=-1})=>{const{fixedColumnCount:a,fixedEndColumnCount:d,fixedColumns:l,setFixedColumns:i,fixedEndColumns:f,setFixedEndColumns:c,showBoxShadow:p,setShowBoxShadow:m,columnsLength:S}=T(),g=S-1-e,h=S-(e+1)<d?e:-1,r=e<a?e:-1;return b.useEffect(()=>{r!==-1&&l.indexOf(r)===-1&&(i(u=>[...u,r]),a-1===r&&m(u=>[...u,r])),h!==-1&&f.indexOf(g)===-1&&(c(u=>[...u,g]),d-1===g&&m(u=>[...u,h]))},[]),x.jsx(F,{"data-testid":s??"table-column-header",fixed:r!==-1,fixedColumnIndex:r,fixedEnd:h!==-1,fixedEndColumnIndex:g,showBoxShadow:p==null?void 0:p.includes(r!==-1?r:h),style:o,textAlign:n,children:t})},D=$.tbody`
  ${({theme:t})=>`
    display: table-header-group;
    
    tr:hover {
      background-color: ${t.palette.base.light};
    }
  `}
`,R=({children:t,style:o,dataTestId:s})=>x.jsx(D,{"data-testid":s??"table-body",style:o,children:t}),_=$.tr`
  ${({theme:t,selectableRow:o})=>`
    display: table-row;
    border-radius: ${t.radius.none};
    box-shadow: ${t.shadows.none};
    padding: ${t.spacing.none};
    width: 100%;
    background-color: ${t.palette.base.default};
    cursor: ${o?"pointer":"auto"};
  `}
`,v=({children:t,dataTestId:o,style:s,onClick:n})=>{const e=!!n;return x.jsx(_,{...n&&{onClick:n},"data-testid":o??"table-row",selectableRow:e,style:s,children:t})},A=$.td`
  ${({theme:t,columnWidth:o,textAlign:s,showBoxShadow:n=!1,fixed:e=!1,fixedEnd:a=!1,fixedColumnIndex:d=0,fixedEndColumnIndex:l=0})=>`
    display: table-cell;
    min-width: ${w}px;
    word-break: break-word;
    border-top: 1px solid ${t.palette.border.light};
    padding: ${t.spacing["2xs"]};
    text-align: ${s};
    color: ${t.palette.content.body};
    ${t.fontStyles.body2};

    &:first-of-type {
      padding-top: ${t.spacing["2xs"]};
      border-bottom: none;
    }

    ${!!o&&`
        width: ${o};
        max-width: ${o};
      `}

    ${(e||a)&&`
        z-index: ${y};
        left: ${e?`${d*w}px`:"unset"};
        right: ${a?`${l*w}px`:"unset"};
        position: sticky;
        background: ${t.palette.primary.contrast};
        box-shadow: ${n?`${a?"-1px":"1px"} 0 0 0 ${t.palette.border.light}`:"unset"};
      `}
  `}
`,z=({children:t,columnWidth:o,style:s,dataTestId:n,columnIndex:e=-1,textAlign:a="left"})=>{const{columnsLength:d,fixedColumns:l,fixedEndColumns:i,showBoxShadow:f}=T(),c=d-1-e;let p={};return e!==-1&&(l!=null&&l.length||i!=null&&i.length)&&(p={fixed:l.includes(e),fixedColumnIndex:e,fixedEnd:i.includes(c),fixedEndColumnIndex:c,showBoxShadow:f.includes(e)}),x.jsx(A,{columnWidth:o,"data-testid":n??"table-data-cell",style:s,textAlign:a,...p,children:t})},I=$.table`
  ${({isFixed:t})=>`
    table-layout: ${t?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,C=({children:t,dataTestId:o,style:s,isFixed:n=!1,fixedColumnCount:e=0,fixedEndColumnCount:a=0,columnsLength:d=0})=>x.jsx(H,{columnsLength:d,fixedColumnCount:e,fixedEndColumnCount:a,children:x.jsx(I,{"data-testid":o??"table",isFixed:n,style:s,children:t})});C.Head=j;C.ColumnHeader=L;C.Body=R;C.Row=v;C.DataCell=z;export{C as T};
