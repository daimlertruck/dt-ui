import{j as d}from"./jsx-runtime-CKrituN3.js";import{B as $}from"./index-gq_RjDZX.js";import"./index-u8Tre6qU.js";import"./index-BtM5VmRH.js";import{r as l}from"./index-CBqU2yxZ.js";import{u as w}from"./useDebounceResize-Cg-w-8ih.js";import{I as g}from"./Icon-Ec8CY5p0.js";import{n as x}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const h=x.button`
  min-height: 50px;
  border: none;
  display: flex;
  align-items: center;

  ${({theme:e,active:o,disabled:n,variant:s})=>`

    ${o?e.fontStyles.body2Bold:e.fontStyles.body2}

    ${s==="book"?`
          background-color: transparent;
          border-bottom: ${o?`2px solid ${e.palette.primary.default}`:`1px solid ${e.palette.border.default}`};`:`
          background: ${o?`${e.palette.base.default}`:"transparent"};`}
    
    color: ${o?e.palette.primary.default:n?e.palette.content.disabled:e.palette.content.body};
    padding: ${e.spacing["3xs"]} ${e.spacing.s};
    cursor: ${o?"default":n?"not-allowed":"pointer"};
    white-space: nowrap;

    ${!o&&!n&&`
      &:hover {
        ${s==="book"?`color: ${e.palette.primary.dark};`:`background: ${e.palette.base.default};`}        
      `}

    ${n&&`
        opacity: 0.4;
  
        &:active {
          pointer-events: none; 
        }
     `};
  `}
`,S=({activeTab:e,children:o,dataTestId:n,isDisabled:s,index:i,variant:t="boxed",handleChange:u})=>{const r=l.useRef(null),p=()=>{if(!r||!r.current||!r.current.parentElement)return;const a=r.current.getBoundingClientRect(),c=r.current.parentElement.getBoundingClientRect();a.left<c.left&&r.current.parentElement.scroll({left:r.current.parentElement.scrollLeft-(c.left-a.left),behavior:"smooth"}),c.right<a.right&&r.current.parentElement.scroll({left:r.current.parentElement.scrollLeft+(a.right-c.right),behavior:"smooth"}),u(i)};return d.jsx(h,{active:e===i,"data-testid":n||`tab-item-${i}`,disabled:s,onClick:p,ref:r,role:"tab",tabIndex:e===i?0:-1,variant:t,children:o})},k=x.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`,y=120,C=.5,E=({children:e,dataTestId:o,style:n,activeTab:s,variant:i="boxed"})=>{const t=l.useRef(null),[u,r]=l.useState(!1),[p,a]=l.useState(!1),c=l.useMemo(()=>l.Children.map(e,f=>f&&l.cloneElement(f,{...f.props,activeTab:s,variant:i})),[e,s,i]),m=f=>{!t||!t.current||(t.current.scroll({left:t.current.scrollLeft+f,behavior:"smooth"}),b())},b=()=>{!t||!t.current||(r(t.current.scrollLeft>0),a(t.current.clientWidth+t.current.scrollLeft+C<t.current.scrollWidth))};return l.useEffect(b,[]),w(b),d.jsxs($,{style:{flexDirection:"row"},children:[d.jsx(g,{code:"keyboard_arrow_left",dataTestId:"left-arrow",onClick:()=>m(-y),style:{visibility:u?"visible":"hidden"}}),d.jsx(k,{"data-testid":o||"tabs",ref:t,role:"tablist",style:n,children:c}),d.jsx(g,{code:"keyboard_arrow_right",dataTestId:"right-arrow",onClick:()=>m(y),style:{visibility:p?"visible":"hidden"}})]})};E.Item=S;export{E as T};
