import{j as u}from"./jsx-runtime-DMAvRu52.js";import{B as y}from"./index-LNaMzCj1.js";import"./index-DgNVVcXf.js";import"./index-DCrStp1_.js";import{r as s}from"./index-Dl6G-zuu.js";import{u as S}from"./useDebounceResize-CxRRopKS.js";import{I as w}from"./Icon-B8gBCtaI.js";import{n as x,u as E}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const R=x.button`
  border: none;
  display: flex;
  align-items: center;

  ${({theme:t,active:o,disabled:n,variant:l})=>`
    ${o?t.fontStyles.body2Bold:t.fontStyles.body2}
    ${l==="default"?`
          background-color: transparent;
          ${o?`border-bottom: 2px solid ${t.palette.accent.default};`:""}
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
`,C=({activeTab:t,dataTestId:o,isDisabled:n,index:l,variant:i,label:p,icon:e,handleChange:m})=>{const r=s.useRef(null),g=()=>{if(!r||!r.current||!r.current.parentElement)return;const f=r.current.getBoundingClientRect(),d=r.current.parentElement.getBoundingClientRect();f.left<d.left&&r.current.parentElement.scroll({left:r.current.parentElement.scrollLeft-(d.left-f.left),behavior:"smooth"}),d.right<f.right&&r.current.parentElement.scroll({left:r.current.parentElement.scrollLeft+(f.right-d.right),behavior:"smooth"}),m(l)};return u.jsxs(R,{active:t===l,"data-testid":o||`tab-item-${l}`,disabled:n,onClick:g,ref:r,role:"tab",tabIndex:t===l?0:-1,variant:i,children:[e,p]})},I=x.div`
  ${({variant:t})=>`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    width: 100%;
    ${t==="default"&&"margin-bottom: -1px;"}
  `};
`,L=120,O=.5,k=({children:t,style:o,activeTab:n,dataTestId:l="tabs",variant:i="default",handleChange:p})=>{const e=s.useRef(null),[m,r]=s.useState(!1),[g,f]=s.useState(!1),d=E(),$=s.useMemo(()=>s.Children.map(t,(c,a)=>c&&s.cloneElement(c,{...c.props,activeTab:n,variant:i,index:a,handleChange:p})),[t,n,i,p]),h=c=>{if(!e||!e.current)return;const a=e.current.scrollLeft+c;e.current.scroll({left:a,behavior:"smooth"}),b(a)},b=c=>{if(!e||!e.current)return;const a=c??e.current.scrollLeft;r(a>0),f(e.current.clientWidth+a+O<e.current.scrollWidth)};return s.useEffect(()=>b(),[]),S(()=>b()),u.jsxs(y,{style:{flexDirection:"row",...i==="default"&&{borderBottom:`1px solid ${d.palette.border.default}`}},children:[u.jsx(w,{code:"keyboard_arrow_left",dataTestId:"left-arrow",onClick:()=>h(-120),style:{...!m&&{display:"none"}}}),u.jsx(I,{"data-testid":l,ref:e,role:"tablist",style:o,variant:i,children:$}),u.jsx(w,{code:"keyboard_arrow_right",dataTestId:"right-arrow",onClick:()=>h(L),style:{...!g&&{display:"none"}}})]})};k.Item=C;export{k as T};
