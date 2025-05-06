import{j as d}from"./jsx-runtime-DMAvRu52.js";import{B as S}from"./index-DECWwmT6.js";import"./index-DkxDMSYI.js";import"./index-DCrStp1_.js";import{r as s}from"./index-Dl6G-zuu.js";import{u as $}from"./useDebounceResize-v2436RYY.js";import{I as w}from"./Icon-B8gBCtaI.js";import{n as x,u as E}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const C=x.button`
  border: none;
  display: flex;
  align-items: center;

  ${({theme:t,active:o,disabled:n,variant:l})=>`
    ${o?t.fontStyles.body2Bold:t.fontStyles.body2}
    ${l==="default"?`
          background-color: transparent;
          ${o&&`border-bottom: 2px solid ${t.palette.accent.default};`}
          `:`
          background-color: ${o?t.palette.surface.contrast:"transparent"};`}
    
    color: ${n?t.palette.content.light:t.palette.accent.default};
    padding: ${t.spacing["3xs"]} ${t.spacing.s};
    cursor: ${o?"default":n?"not-allowed":"pointer"};
    white-space: nowrap;
    gap: ${t.spacing["4xs"]};
    
    ${!o&&!n&&`
        &:hover {
          background-color: ${t.palette.accent.light};
        }        
      `}
  `}
`,R=({activeTab:t,dataTestId:o,isDisabled:n,index:l,variant:u,label:p,icon:e,handleChange:m})=>{const r=s.useRef(null),g=()=>{if(!r||!r.current||!r.current.parentElement)return;const i=r.current.getBoundingClientRect(),f=r.current.parentElement.getBoundingClientRect();i.left<f.left&&r.current.parentElement.scroll({left:r.current.parentElement.scrollLeft-(f.left-i.left),behavior:"smooth"}),f.right<i.right&&r.current.parentElement.scroll({left:r.current.parentElement.scrollLeft+(i.right-f.right),behavior:"smooth"}),m(l)};return d.jsxs(C,{active:t===l,"data-testid":o||`tab-item-${l}`,disabled:n,onClick:g,ref:r,role:"tab",tabIndex:t===l?0:-1,variant:u,children:[e,p]})},I=x.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 100%;
  margin-bottom: -1px;
`,L=120,O=.5,k=({children:t,style:o,activeTab:n,dataTestId:l="tabs",variant:u="default",handleChange:p})=>{const e=s.useRef(null),[m,r]=s.useState(!1),[g,i]=s.useState(!1),f=E(),y=s.useMemo(()=>s.Children.map(t,(c,a)=>c&&s.cloneElement(c,{...c.props,activeTab:n,variant:u,index:a,handleChange:p})),[t,n,u,p]),h=c=>{if(!e||!e.current)return;const a=e.current.scrollLeft+c;e.current.scroll({left:a,behavior:"smooth"}),b(a)},b=c=>{if(!e||!e.current)return;const a=c??e.current.scrollLeft;r(a>0),i(e.current.clientWidth+a+O<e.current.scrollWidth)};return s.useEffect(()=>b(),[]),$(()=>b()),d.jsxs(S,{style:{flexDirection:"row",borderBottom:"1px solid",borderColor:f.palette.border.default},children:[d.jsx(w,{code:"keyboard_arrow_left",dataTestId:"left-arrow",onClick:()=>h(-120),style:{...!m&&{display:"none"}}}),d.jsx(I,{"data-testid":l,ref:e,role:"tablist",style:o,children:y}),d.jsx(w,{code:"keyboard_arrow_right",dataTestId:"right-arrow",onClick:()=>h(L),style:{...!g&&{display:"none"}}})]})};k.Item=R;export{k as T};
