import{j as s}from"./jsx-runtime-vNq4Oc-g.js";import{T as p}from"./Tooltip-HGZMkqB_.js";import{r as o}from"./index-4g5l5LRQ.js";import{n as a}from"./emotion-styled.browser.esm-QTPHyGVR.js";import"./index-5j7WHYEJ.js";import"./index-jmm5gWkb.js";import{u as w}from"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";const x=e=>s.jsx("svg",{fill:"none",height:"12",viewBox:"0 0 8 12",width:"8",xmlns:"http://www.w3.org/2000/svg",...e,children:s.jsx("path",{clipRule:"evenodd",d:"M6.99468 4.99507C7.18215 5.1826 7.28747 5.4369 7.28747 5.70207C7.28747 5.96723 7.18215 6.22154 6.99468 6.40907L2.40168 11.0021C2.21539 11.1846 1.96458 11.2863 1.70375 11.285C1.44292 11.2837 1.19315 11.1795 1.00871 10.995C0.824278 10.8106 0.72008 10.5608 0.718763 10.3C0.717445 10.0392 0.819115 9.78836 1.00168 9.60207L4.90168 5.70207L1.00168 1.80207C0.819115 1.61578 0.717445 1.36497 0.718763 1.10414C0.72008 0.843312 0.824278 0.593541 1.00871 0.409105C1.19315 0.224668 1.44292 0.120471 1.70375 0.119153C1.96458 0.117836 2.21539 0.219506 2.40168 0.402069L6.99468 4.99507Z",fill:"currentColor",fillRule:"evenodd"})}),g=e=>s.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...e,children:s.jsx("path",{d:"M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"})}),v=(e,r)=>{let t;return function(...n){clearTimeout(t),t=setTimeout(()=>e.apply(this,n),r)}},y=e=>{const[r,t]=o.useState(!1);return o.useEffect(()=>{const n=window.matchMedia(e);n.matches!==r&&t(n.matches);const i=()=>t(n.matches);return n.addEventListener("change",i),()=>n.removeEventListener("change",i)},[e,r]),r};function R(e,r=500){o.useEffect(()=>{const t=v(e,r);return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[e,r])}const j=a.nav`
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
`,L=a.li`
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
`,E=(e,r)=>!!e.current&&!!r.current,T=e=>{const r=o.useRef(null),t=o.useRef(null),n=w(),i=y(`(min-width: ${n.breakpoints.m})`),[c,u]=o.useState(e),C=o.useCallback(()=>{if(i||!E(r,t)){u(e);return}const d=o.Children.toArray(e);if(t.current.scrollWidth>r.current.clientWidth){const l=d[d.length-1],b=[d[0],s.jsx(h.Item,{children:s.jsx(g,{})},"more-icon"),o.isValidElement(l)?o.cloneElement(l,{...l.props,style:{overflow:"hidden"}}):l];u(b)}},[e,i,r,t]);return R(C),{visibleChildren:c,breadcrumbRef:r,breadcrumbListRef:t}},m=30,h=({children:e,separator:r="slash"})=>{const{visibleChildren:t,breadcrumbRef:n,breadcrumbListRef:i}=T(e);return s.jsx(j,{"aria-label":"Breadcrumb","data-testid":"breadcrumb",ref:n,children:s.jsx($,{ref:i,children:I(t,r)})})},S=({children:e,style:r})=>{const{truncatedChildren:t,tooltip:n}=f(e);return s.jsx(L,{style:r,children:s.jsxs(p,{style:{overflow:"hidden"},children:[s.jsx(B,{children:t}),s.jsx(p.Content,{children:n})]})})},M=e=>e.length>=m?`${e.substring(0,m)}...`:e,f=e=>{let r="";return{truncatedChildren:o.Children.map(e,t=>{if(typeof t=="string"){const n=M(t);return r=n!==t?t:"",n}else if(o.isValidElement(t)){const{truncatedChildren:n,tooltip:i}=f(t.props.children);return r=i,o.cloneElement(t,{...t.props,children:n})}else return null}),tooltip:r}},I=(e,r)=>{const t=()=>({slash:s.jsx("span",{children:"/"}),arrow:s.jsx(x,{})})[r],n=i=>o.Children.count(e)-1===i;return o.Children.map(e,(i,c)=>s.jsxs(s.Fragment,{children:[i,!n(c)&&t()]}))};h.Item=S;export{x as A,h as B,v as d,y as u};
