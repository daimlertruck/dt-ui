import{j as u}from"./jsx-runtime-CKrituN3.js";import{B as h}from"./index-DMRWov4L.js";import"./index-BYYJHUbT.js";import"./index-BtM5VmRH.js";import{r as l}from"./index-CBqU2yxZ.js";import{u as w}from"./useDebounceResize-DUq0_gy5.js";import{I as y}from"./Icon-DOElHRRq.js";import{n as $}from"./emotion-styled.browser.esm-B1le5_Hy.js";const S=$.button`
  min-height: 50px;
  border: none;
  display: flex;
  align-items: center;

  ${({theme:t,active:o,disabled:n,variant:s})=>`

    ${o?t.fontStyles.body2Bold:t.fontStyles.body2}

    ${s==="book"?`
          background-color: transparent;
          border-bottom: ${o?`2px solid ${t.palette.primary.default}`:`1px solid ${t.palette.border.default}`};`:`
          background: ${o?`${t.palette.surface.contrast}`:"transparent"};`}
    
    color: ${o?t.palette.primary.default:n?t.palette.content.light:t.palette.content.default};
    padding: ${t.spacing["3xs"]} ${t.spacing.s};
    cursor: ${o?"default":n?"not-allowed":"pointer"};
    white-space: nowrap;

    ${!o&&!n&&`
      &:hover {
        ${s==="book"?`color: ${t.palette.primary.dark};`:`background: ${t.palette.surface.contrast};`}        
      `}

    ${n&&`
        opacity: 0.4;
  
        &:active {
          pointer-events: none; 
        }
     `};
  `}
`,E=({activeTab:t,children:o,dataTestId:n,isDisabled:s,index:i,variant:e="boxed",handleChange:p})=>{const r=l.useRef(null),b=()=>{if(!r||!r.current||!r.current.parentElement)return;const a=r.current.getBoundingClientRect(),f=r.current.parentElement.getBoundingClientRect();a.left<f.left&&r.current.parentElement.scroll({left:r.current.parentElement.scrollLeft-(f.left-a.left),behavior:"smooth"}),f.right<a.right&&r.current.parentElement.scroll({left:r.current.parentElement.scrollLeft+(a.right-f.right),behavior:"smooth"}),p(i)};return u.jsx(S,{active:t===i,"data-testid":n||`tab-item-${i}`,disabled:s,onClick:b,ref:r,role:"tab",tabIndex:t===i?0:-1,variant:e,children:o})},k=$.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`,x=120,C=.5,R=({children:t,dataTestId:o,style:n,activeTab:s,variant:i="boxed"})=>{const e=l.useRef(null),[p,r]=l.useState(!1),[b,a]=l.useState(!1),f=l.useMemo(()=>l.Children.map(t,c=>c&&l.cloneElement(c,{...c.props,activeTab:s,variant:i})),[t,s,i]),g=c=>{if(!e||!e.current)return;const d=e.current.scrollLeft+c;e.current.scroll({left:d,behavior:"smooth"}),m(d)},m=c=>{if(!e||!e.current)return;const d=c??e.current.scrollLeft;r(d>0),a(e.current.clientWidth+d+C<e.current.scrollWidth)};return l.useEffect(()=>m(),[]),w(()=>m()),u.jsxs(h,{style:{flexDirection:"row"},children:[u.jsx(y,{code:"keyboard_arrow_left",dataTestId:"left-arrow",onClick:()=>g(-x),style:{visibility:p?"visible":"hidden"}}),u.jsx(k,{"data-testid":o||"tabs",ref:e,role:"tablist",style:n,children:f}),u.jsx(y,{code:"keyboard_arrow_right",dataTestId:"right-arrow",onClick:()=>g(x),style:{visibility:b?"visible":"hidden"}})]})};R.Item=E;export{R as T};
