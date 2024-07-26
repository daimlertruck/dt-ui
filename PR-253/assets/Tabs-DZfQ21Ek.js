import{j as p}from"./jsx-runtime-CKrituN3.js";import{B as w}from"./index-gq_RjDZX.js";import"./index-DWb54gmw.js";import"./index-BtM5VmRH.js";import{r as l}from"./index-CBqU2yxZ.js";import{u as h}from"./useDebounceResize-D1V6jlPZ.js";import{I as y}from"./Icon-CHFlL13I.js";import{n as $}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const S=$.button`
  min-height: 50px;
  border: none;
  display: flex;
  align-items: center;

  ${({theme:t,active:o,disabled:n,variant:s})=>`

    ${o?t.fontStyles.body2Bold:t.fontStyles.body2}

    ${s==="book"?`
          background-color: transparent;
          border-bottom: ${o?`2px solid ${t.palette.primary.default}`:`1px solid ${t.palette.border.default}`};`:`
          background: ${o?`${t.palette.base.default}`:"transparent"};`}
    
    color: ${o?t.palette.primary.default:n?t.palette.content.disabled:t.palette.content.body};
    padding: ${t.spacing["3xs"]} ${t.spacing.s};
    cursor: ${o?"default":n?"not-allowed":"pointer"};
    white-space: nowrap;

    ${!o&&!n&&`
      &:hover {
        ${s==="book"?`color: ${t.palette.primary.dark};`:`background: ${t.palette.base.default};`}        
      `}

    ${n&&`
        opacity: 0.4;
  
        &:active {
          pointer-events: none; 
        }
     `};
  `}
`,E=({activeTab:t,children:o,dataTestId:n,isDisabled:s,index:i,variant:e="boxed",handleChange:u})=>{const r=l.useRef(null),b=()=>{if(!r||!r.current||!r.current.parentElement)return;const a=r.current.getBoundingClientRect(),f=r.current.parentElement.getBoundingClientRect();a.left<f.left&&r.current.parentElement.scroll({left:r.current.parentElement.scrollLeft-(f.left-a.left),behavior:"smooth"}),f.right<a.right&&r.current.parentElement.scroll({left:r.current.parentElement.scrollLeft+(a.right-f.right),behavior:"smooth"}),u(i)};return p.jsx(S,{active:t===i,"data-testid":n||`tab-item-${i}`,disabled:s,onClick:b,ref:r,role:"tab",tabIndex:t===i?0:-1,variant:e,children:o})},k=$.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`,x=120,C=.5,R=({children:t,dataTestId:o,style:n,activeTab:s,variant:i="boxed"})=>{const e=l.useRef(null),[u,r]=l.useState(!1),[b,a]=l.useState(!1),f=l.useMemo(()=>l.Children.map(t,c=>c&&l.cloneElement(c,{...c.props,activeTab:s,variant:i})),[t,s,i]),g=c=>{if(!e||!e.current)return;const d=e.current.scrollLeft+c;e.current.scroll({left:d,behavior:"smooth"}),m(d)},m=c=>{if(!e||!e.current)return;const d=c??e.current.scrollLeft;r(d>0),a(e.current.clientWidth+d+C<e.current.scrollWidth)};return l.useEffect(()=>m(),[]),h(()=>m()),p.jsxs(w,{style:{flexDirection:"row"},children:[p.jsx(y,{code:"keyboard_arrow_left",dataTestId:"left-arrow",onClick:()=>g(-x),style:{visibility:u?"visible":"hidden"}}),p.jsx(k,{"data-testid":o||"tabs",ref:e,role:"tablist",style:n,children:f}),p.jsx(y,{code:"keyboard_arrow_right",dataTestId:"right-arrow",onClick:()=>g(x),style:{visibility:b?"visible":"hidden"}})]})};R.Item=E;export{R as T};
