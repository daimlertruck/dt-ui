import{j as l}from"./jsx-runtime-CbCNBOXy.js";import{r as i}from"./index-IybTgENJ.js";import"./index-Hhmu2M5c.js";import{C as u}from"./Counter-LcUDb3Zd.js";import{T as m}from"./Typography-Bp0by5Aw.js";import{n as p,u as d}from"./emotion-styled.browser.esm-yeljtSWm.js";const h=e=>l.jsx("svg",{fill:"none",viewBox:"0 0 10 8",xmlns:"http://www.w3.org/2000/svg",...e,children:l.jsx("path",{d:"M1 4.818 3.857 7 9 1",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})}),x=p.li`
  display: flex;
  gap: 12px;
  align-items: center;
`,y=p.span`
  ${({theme:e,color:t})=>`
    ${e.fontStyles.pSmall};
    color: ${e.palette[t]};
  `}
`,c=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:o=!1,isError:n=!1})=>{const s=i.useMemo(()=>i.Children.map(e,a=>a&&i.cloneElement(a,{isActive:t,isCompleted:r,isDisabled:o,isError:n,...a.props})),[e,t,r,o,n]);return l.jsx(x,{children:s})},g=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:o=!1,isError:n=!1})=>{const s=d(),a=n?"error":o?"neutralLight_100":"primary",f=n?s.palette.errorLight_300:s.palette.primaryLight_300;return l.jsx(u,{color:a,isLarge:!0,outlined:!r,style:{borderWidth:1,...t&&{backgroundColor:f}},children:r?l.jsx(h,{height:8,width:10}):l.jsx(m,{color:a,element:"span",fontStyles:"pXXSmall",style:{fontWeight:700},children:e})})};c.Counter=g;const S=({isActive:e,isError:t,isDisabled:r,isCompleted:o})=>t?"error":e||o?"primary":r?"neutralLight_100":"neutral";c.Label=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:o=!1,isError:n=!1})=>{const s=S({isActive:t,isError:n,isDisabled:o,isCompleted:r});return l.jsx(y,{color:s,children:e})};const $=p.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  list-style: none;

  ${({theme:e,orientation:t="vertical"})=>`
    @media only screen and (min-width: ${e.breakpoints.md}) {
      flex-direction: ${t==="horizontal"?"row":"column"}
    }
  `}
`;export{$ as S,c as a};
