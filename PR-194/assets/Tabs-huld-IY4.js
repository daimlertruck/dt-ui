import{j as p}from"./jsx-runtime-CKrituN3.js";import{B as w}from"./index-gq_RjDZX.js";import"./index-u8Tre6qU.js";import"./index-BtM5VmRH.js";import{r as a}from"./index-CBqU2yxZ.js";import{u as h}from"./useDebounceResize-Cg-w-8ih.js";import{I as y}from"./Icon-CHFlL13I.js";import{n as $}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const S=$.button`
  min-height: 50px;
  border: none;
  display: flex;
  align-items: center;

  ${({theme:t,active:o,disabled:n,variant:l})=>`

    ${o?t.fontStyles.body2Bold:t.fontStyles.body2}

    ${l==="book"?`
          background-color: transparent;
          border-bottom: ${o?`2px solid ${t.palette.primary.default}`:`1px solid ${t.palette.border.default}`};`:`
          background: ${o?`${t.palette.base.default}`:"transparent"};`}
    
    color: ${o?t.palette.primary.default:n?t.palette.content.disabled:t.palette.content.body};
    padding: ${t.spacing["3xs"]} ${t.spacing.s};
    cursor: ${o?"default":n?"not-allowed":"pointer"};
    white-space: nowrap;

    ${!o&&!n&&`
      &:hover {
        ${l==="book"?`color: ${t.palette.primary.dark};`:`background: ${t.palette.base.default};`}        
      `}

    ${n&&`
        opacity: 0.4;
  
        &:active {
          pointer-events: none; 
        }
     `};
  `}
`,k=({activeTab:t,children:o,dataTestId:n,isDisabled:l,index:s,variant:e="boxed",handleChange:u})=>{const r=a.useRef(null),b=()=>{if(!r||!r.current||!r.current.parentElement)return;const c=r.current.getBoundingClientRect(),d=r.current.parentElement.getBoundingClientRect();c.left<d.left&&r.current.parentElement.scroll({left:r.current.parentElement.scrollLeft-(d.left-c.left),behavior:"smooth"}),d.right<c.right&&r.current.parentElement.scroll({left:r.current.parentElement.scrollLeft+(c.right-d.right),behavior:"smooth"}),u(s)};return p.jsx(S,{active:t===s,"data-testid":n||`tab-item-${s}`,disabled:l,onClick:b,ref:r,role:"tab",tabIndex:t===s?0:-1,variant:e,children:o})},C=$.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`,x=120,E=.5,R=({children:t,dataTestId:o,style:n,activeTab:l,variant:s="boxed"})=>{const e=a.useRef(null),[u,r]=a.useState(!1),[b,c]=a.useState(!1),d=a.useMemo(()=>a.Children.map(t,i=>i&&a.cloneElement(i,{...i.props,activeTab:l,variant:s})),[t,l,s]),m=i=>{if(!e||!e.current)return;const f=e.current.scrollLeft+i;e.current.scroll({left:f,behavior:"smooth"}),g(f)},g=i=>{if(!e||!e.current)return;const f=i??e.current.scrollLeft;r(f>0),c(e.current.clientWidth+f+E<e.current.scrollWidth)};return h(()=>g()),p.jsxs(w,{style:{flexDirection:"row"},children:[p.jsx(y,{code:"keyboard_arrow_left",dataTestId:"left-arrow",onClick:()=>m(-x),style:{visibility:u?"visible":"hidden"}}),p.jsx(C,{"data-testid":o||"tabs",ref:e,role:"tablist",style:n,children:d}),p.jsx(y,{code:"keyboard_arrow_right",dataTestId:"right-arrow",onClick:()=>m(x),style:{visibility:b?"visible":"hidden"}})]})};R.Item=k;export{R as T};
