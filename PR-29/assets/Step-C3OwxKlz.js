import{s as i,u as f}from"./emotion-styled.browser.esm-DuL_gwYN.js";import{j as s}from"./jsx-runtime-CB_V9I5Y.js";import{I as u}from"./Icon-XPmSDfR_.js";import{T as x}from"./Typography-DqiQHYtc.js";import{r as p}from"./index-CTjT7uj6.js";const I=i.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  list-style: none;

  ${({theme:e,orientation:t="vertical"})=>`
    @media only screen and (min-width: ${e.breakpoints.md}px) {
      flex-direction: ${t==="horizontal"?"row":"column"}
    }
  `}
`,y=i.span`
  ${({theme:e,color:t,outlined:l,isLarge:a})=>`
    ${e.fontStyles.tag}
    color: ${e.palette.content.contrast};
    border: ${e.spacing.none};
    align-items: center;
    justify-content: center;
    display: flex;
    width: ${a?"24px":"16px"};
    height: ${a?"24px":"16px"};
    border-radius: 50%;
    background-color: ${t==="disabled"?e.palette.content.default:e.palette[t].default};

    ${l&&`
        border: 2px solid ${t==="disabled"?e.palette.content.light:e.palette[t].default};
        color: ${t==="disabled"?e.palette.content.light:e.palette[t].default};
        background-color: ${e.palette.surface.contrast}
      `};
  `}
`,g=({children:e,color:t="informative",dataTestId:l,style:a,outlined:n=!1,isLarge:r=!1})=>s.jsx(y,{color:t,"data-testid":l??"counter",isLarge:r,outlined:n,style:a,children:e}),b=i.li`
  display: flex;
  gap: 12px;
  align-items: center;
`,m=i.span`
  ${({theme:e,color:t})=>`
    ${e.fontStyles.pSmall};
    color: ${t==="disabled"?e.palette.content.light:e.palette[t].default};
  `}
`,d=({children:e,isActive:t=!1,isCompleted:l=!1,isDisabled:a=!1,isError:n=!1})=>{const r=p.useMemo(()=>p.Children.map(e,o=>o&&p.cloneElement(o,{isActive:t,isCompleted:l,isDisabled:a,isError:n,...o.props})),[e,t,l,a,n]);return s.jsx(b,{children:r})},$=({children:e,isActive:t=!1,isCompleted:l=!1,isDisabled:a=!1,isError:n=!1})=>{const r=f(),o=n?"error":a?"disabled":"primary",c=n?r.palette.error.light:r.palette.primary.light;return s.jsx(g,{color:o,isLarge:!0,outlined:!l,style:{borderWidth:1,...t&&{backgroundColor:c}},children:l?s.jsx(u,{code:"check",color:r.palette.surface.light,size:"s"}):s.jsx(x,{color:o==="disabled"?"content.light":`${o}.default`,element:"span",fontStyles:"pXXSmall",style:{fontWeight:700,width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center"},children:e})})};d.Counter=$;const S=({isActive:e,isError:t,isDisabled:l,isCompleted:a})=>t?"error":e||a?"primary":l?"disabled":"secondary";d.Label=({children:e,isActive:t=!1,isCompleted:l=!1,isDisabled:a=!1,isError:n=!1})=>{const r=S({isActive:t,isError:n,isDisabled:a,isCompleted:l});return s.jsx(m,{color:r,children:e})};export{I as S,d as a};
