import{n as p,u as f}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import{j as s}from"./jsx-runtime-vNq4Oc-g.js";import{r as i}from"./index-4g5l5LRQ.js";import"./index-lb1Yyg-x.js";import{C as u}from"./Counter-aYlenIO8.js";import{T as m}from"./Typography-KfkZJNal.js";const x=e=>s.jsx("svg",{fill:"none",viewBox:"0 0 10 8",xmlns:"http://www.w3.org/2000/svg",...e,children:s.jsx("path",{d:"M1 4.818 3.857 7 9 1",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})}),L=p.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  list-style: none;

  ${({theme:e,orientation:t="vertical"})=>`
    @media only screen and (min-width: ${e.breakpoints.md}) {
      flex-direction: ${t==="horizontal"?"row":"column"}
    }
  `}
`,y=p.li`
  display: flex;
  gap: 12px;
  align-items: center;
`,h=p.span`
  ${({theme:e,color:t})=>`
    ${e.fontStyles.pSmall};
    color: ${t==="disabled"?e.palette.content.disabled:e.palette[t].default};
  `}
`,d=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:o=!1,isError:l=!1})=>{const a=i.useMemo(()=>i.Children.map(e,n=>n&&i.cloneElement(n,{isActive:t,isCompleted:r,isDisabled:o,isError:l,...n.props})),[e,t,r,o,l]);return s.jsx(y,{children:a})},g=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:o=!1,isError:l=!1})=>{const a=f(),n=l?"error":o?"disabled":"primary",c=l?a.palette.error.light:a.palette.primary.light;return s.jsx(u,{color:n,isLarge:!0,outlined:!r,style:{borderWidth:1,...t&&{backgroundColor:c}},children:r?s.jsx(x,{height:8,width:10}):s.jsx(m,{color:n==="disabled"?"content.disabled":`${n}.default`,element:"span",fontStyles:"pXXSmall",style:{fontWeight:700},children:e})})};d.Counter=g;const S=({isActive:e,isError:t,isDisabled:r,isCompleted:o})=>t?"error":e||o?"primary":r?"disabled":"secondary";d.Label=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:o=!1,isError:l=!1})=>{const a=S({isActive:t,isError:l,isDisabled:o,isCompleted:r});return s.jsx(h,{color:a,children:e})};export{L as S,d as a};
