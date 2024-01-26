import{j as n}from"./jsx-runtime-CbCNBOXy.js";import{r as o}from"./index-IybTgENJ.js";import"./index-Hhmu2M5c.js";import{A as x}from"./ArrowRight-CIKtTgQV.js";import{T as p}from"./Tooltip-UV5WzYwK.js";import{n as a,u as w}from"./emotion-styled.browser.esm-yeljtSWm.js";import"./TooltipProvider-e8-_owln.js";import{d as g}from"./debounce-hfrKQpz_.js";import{u as y}from"./useMedia-QA4teFwo.js";const v=e=>n.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...e,children:n.jsx("path",{d:"M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"})}),R=a.nav`
  ${({theme:e})=>`
    ${e.fontStyles.body2}
    color: ${e.palette.content.body};
    margin-bottom: ${e.spacing["3xs"]};
    overflow: hidden;
  `}
`,$=a.ul`
  padding: 0px;
  margin: 0px;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: ${({theme:e})=>e.spacing["4xs"]};
`,j=a.li`
  ${({theme:e})=>`
    display: flex;

    &:not(:last-child) {
      ${e.fontStyles.link2}
      color: ${e.palette.primary.default};
      cursor: pointer;

      svg {
        color: ${e.palette.primary.default};
      }
      
      & * {
        text-decoration: underline;
      }
      
      &:hover {
        color: ${e.palette.primary.dark};

        svg {
          color: ${e.palette.primary.dark};
        }
      }
    }

    a {
      color: inherit;
    }

    svg {
      color: ${e.palette.content.body};
    }

    &:last-child * {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  `}
`,B=a.div`
  ${({theme:e})=>`
    display: flex;
    align-items: center;
    gap: ${e.spacing["5xs"]};
  `}
`;function E(e,t=500){o.useEffect(()=>{const r=g(e,t);return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[e,t])}const T=(e,t)=>!!e.current&&!!t.current,S=e=>{const t=o.useRef(null),r=o.useRef(null),s=w(),i=y(`(min-width: ${s.breakpoints.m})`),[c,u]=o.useState(e),b=o.useCallback(()=>{if(i||!T(t,r)){u(e);return}const d=o.Children.toArray(e);if(r.current.scrollWidth>t.current.clientWidth){const l=d[d.length-1],C=[d[0],n.jsx(f.Item,{children:n.jsx(v,{})},"more-icon"),o.isValidElement(l)?o.cloneElement(l,{...l.props,style:{overflow:"hidden"}}):l];u(C)}},[e,i,t,r]);return E(b),{visibleChildren:c,breadcrumbRef:t,breadcrumbListRef:r}},m=30,f=({children:e,separator:t="slash"})=>{const{visibleChildren:r,breadcrumbRef:s,breadcrumbListRef:i}=S(e);return n.jsx(R,{"aria-label":"Breadcrumb","data-testid":"breadcrumb",ref:s,children:n.jsx($,{ref:i,children:I(r,t)})})},L=({children:e,style:t})=>{const{truncatedChildren:r,tooltip:s}=h(e);return n.jsx(j,{style:t,children:n.jsxs(p,{style:{overflow:"hidden"},children:[n.jsx(B,{children:r}),n.jsx(p.Content,{children:s})]})})},A=e=>e.length>=m?`${e.substring(0,m)}...`:e,h=e=>{let t="";return{truncatedChildren:o.Children.map(e,r=>{if(typeof r=="string"){const s=A(r);return t=s!==r?r:"",s}else if(o.isValidElement(r)){const{truncatedChildren:s,tooltip:i}=h(r.props.children);return t=i,o.cloneElement(r,{...r.props,children:s})}else return null}),tooltip:t}},I=(e,t)=>{const r=()=>({slash:n.jsx("span",{children:"/"}),arrow:n.jsx(x,{})})[t],s=i=>o.Children.count(e)-1===i;return o.Children.map(e,(i,c)=>n.jsxs(n.Fragment,{children:[i,!s(c)&&r()]}))};f.Item=L;export{f as B};
