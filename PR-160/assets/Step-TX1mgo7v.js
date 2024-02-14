import{j as l}from"./jsx-runtime-vNq4Oc-g.js";import{n as p}from"./emotion-styled.browser.esm-QTPHyGVR.js";import{r as i}from"./index-4g5l5LRQ.js";import{C as f}from"./Counter-LGyezUq9.js";import{T as u}from"./Typography-D6FO4u36.js";import{u as m}from"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";const x=e=>l.jsx("svg",{fill:"none",viewBox:"0 0 10 8",xmlns:"http://www.w3.org/2000/svg",...e,children:l.jsx("path",{d:"M1 4.818 3.857 7 9 1",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})}),y=p.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  list-style: none;

  ${({theme:e,orientation:t="vertical"})=>`
    @media only screen and (min-width: ${e.breakpoints.md}) {
      flex-direction: ${t==="horizontal"?"row":"column"}
    }
  `}
`,h=({children:e,dataTestId:t,orientation:r="vertical"})=>{const o=t??"default";return l.jsx(y,{"data-testid":`${o}-stepper`,orientation:r,children:e})},T=h,S=p.li`
  display: flex;
  gap: 12px;
  align-items: center;
`,g=p.span`
  ${({theme:e,color:t})=>`
    ${e.fontStyles.pSmall};
    color: ${t==="disabled"?e.palette.content.disabled:e.palette[t].default};
  `}
`,d=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:o=!1,isError:s=!1})=>{const a=i.useMemo(()=>i.Children.map(e,n=>n&&i.cloneElement(n,{isActive:t,isCompleted:r,isDisabled:o,isError:s,...n.props})),[e,t,r,o,s]);return l.jsx(S,{children:a})},b=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:o=!1,isError:s=!1})=>{const a=m(),n=s?"error":o?"disabled":"primary",c=s?a.palette.error.light:a.palette.primary.light;return l.jsx(f,{color:n,isLarge:!0,outlined:!r,style:{borderWidth:1,...t&&{backgroundColor:c}},children:r?l.jsx(x,{height:8,width:10}):l.jsx(u,{color:n==="disabled"?"content.disabled":`${n}.default`,element:"span",fontStyles:"pXXSmall",style:{fontWeight:700},children:e})})};d.Counter=b;const j=({isActive:e,isError:t,isDisabled:r,isCompleted:o})=>t?"error":e||o?"primary":r?"disabled":"secondary";d.Label=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:o=!1,isError:s=!1})=>{const a=j({isActive:t,isError:s,isDisabled:o,isCompleted:r});return l.jsx(g,{color:a,children:e})};export{T as S,d as a};
