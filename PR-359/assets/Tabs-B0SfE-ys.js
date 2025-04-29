import{j as d}from"./jsx-runtime-DMAvRu52.js";import{B as S}from"./index-DECWwmT6.js";import"./index-rTy_cqjn.js";import"./index-DCrStp1_.js";import{r as s}from"./index-Dl6G-zuu.js";import{u as $}from"./useDebounceResize-CWUxmx6Q.js";import{I as x}from"./Icon-B8gBCtaI.js";import{n as y}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const h=y.button`
  border: none;
  display: flex;
  align-items: center;

  ${({theme:t,active:o,disabled:n,variant:l})=>`

    ${o?t.fontStyles.body2Bold:t.fontStyles.body2}

    ${l==="default"?`
          background-color: transparent;
          border-bottom: ${o?`2px solid ${t.palette.accent.default}`:`1px solid ${t.palette.border.default}`};`:`
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
`,E=({activeTab:t,dataTestId:o,isDisabled:n,index:l,variant:u,label:p,icon:e,handleChange:g})=>{const r=s.useRef(null),m=()=>{if(!r||!r.current||!r.current.parentElement)return;const i=r.current.getBoundingClientRect(),f=r.current.parentElement.getBoundingClientRect();i.left<f.left&&r.current.parentElement.scroll({left:r.current.parentElement.scrollLeft-(f.left-i.left),behavior:"smooth"}),f.right<i.right&&r.current.parentElement.scroll({left:r.current.parentElement.scrollLeft+(i.right-f.right),behavior:"smooth"}),g(l)};return d.jsxs(h,{active:t===l,"data-testid":o||`tab-item-${l}`,disabled:n,onClick:m,ref:r,role:"tab",tabIndex:t===l?0:-1,variant:u,children:[e,p]})},R=y.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`,C=120,I=.5,L=({children:t,style:o,activeTab:n,dataTestId:l="tabs",variant:u="default",handleChange:p})=>{const e=s.useRef(null),[g,r]=s.useState(!1),[m,i]=s.useState(!1),f=s.useMemo(()=>s.Children.map(t,(c,a)=>c&&s.cloneElement(c,{...c.props,activeTab:n,variant:u,index:a,handleChange:p})),[t,n,u,p]),w=c=>{if(!e||!e.current)return;const a=e.current.scrollLeft+c;e.current.scroll({left:a,behavior:"smooth"}),b(a)},b=c=>{if(!e||!e.current)return;const a=c??e.current.scrollLeft;r(a>0),i(e.current.clientWidth+a+I<e.current.scrollWidth)};return s.useEffect(()=>b(),[]),$(()=>b()),d.jsxs(S,{style:{flexDirection:"row"},children:[d.jsx(x,{code:"keyboard_arrow_left",dataTestId:"left-arrow",onClick:()=>w(-120),style:{...!g&&{display:"none"}}}),d.jsx(R,{"data-testid":l,ref:e,role:"tablist",style:o,children:f}),d.jsx(x,{code:"keyboard_arrow_right",dataTestId:"right-arrow",onClick:()=>w(C),style:{...!m&&{display:"none"}}})]})};L.Item=E;export{L as T};
