import{j as n}from"./jsx-runtime-CbCNBOXy.js";import{r as i}from"./index-IybTgENJ.js";import"./index-Hhmu2M5c.js";import{C as c}from"./Counter-hqYNwjyn.js";import{T as u}from"./Typography-qT9DMSUX.js";import{n as p,u as m}from"./emotion-styled.browser.esm-yeljtSWm.js";const x=e=>n.jsx("svg",{fill:"none",viewBox:"0 0 10 8",xmlns:"http://www.w3.org/2000/svg",...e,children:n.jsx("path",{d:"M1 4.818 3.857 7 9 1",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})}),y=p.li`
  display: flex;
  gap: 12px;
  align-items: center;
`,h=p.span`
  ${({theme:e,color:t})=>`
    ${e.fontStyles.pSmall};
    color: ${t==="disabled"?e.palette.text.disabled:e.palette[t].default};
  `}
`,d=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:l=!1,isError:o=!1})=>{const a=i.useMemo(()=>i.Children.map(e,s=>s&&i.cloneElement(s,{isActive:t,isCompleted:r,isDisabled:l,isError:o,...s.props})),[e,t,r,l,o]);return n.jsx(y,{children:a})},g=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:l=!1,isError:o=!1})=>{const a=m(),s=o?"error":l?"disabled":"primary",f=o?a.palette.error.light:a.palette.primary.light;return n.jsx(c,{color:s,isLarge:!0,outlined:!r,style:{borderWidth:1,...t&&{backgroundColor:f}},children:r?n.jsx(x,{height:8,width:10}):n.jsx(u,{color:s==="disabled"?"text.disabled":`${s}.default`,element:"span",fontStyles:"pXXSmall",style:{fontWeight:700},children:e})})};d.Counter=g;const S=({isActive:e,isError:t,isDisabled:r,isCompleted:l})=>t?"error":e||l?"primary":r?"disabled":"secondary";d.Label=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:l=!1,isError:o=!1})=>{const a=S({isActive:t,isError:o,isDisabled:l,isCompleted:r});return n.jsx(h,{color:a,children:e})};const L=p.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  list-style: none;

  ${({theme:e,orientation:t="vertical"})=>`
    @media only screen and (min-width: ${e.breakpoints.md}) {
      flex-direction: ${t==="horizontal"?"row":"column"}
    }
  `}
`;export{L as S,d as a};
