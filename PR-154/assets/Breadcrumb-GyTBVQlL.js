import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{T as p}from"./Tooltip-X3IACSlU.js";import{r as s}from"./index-4g5l5LRQ.js";import"./index-lb1Yyg-x.js";import{A as x}from"./ArrowRight-R00SQyn0.js";import{n as l,u as w}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./typography-TwTgPMES.js";import{d as g}from"./debounce-hfrKQpz_.js";const v=e=>o.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...e,children:o.jsx("path",{d:"M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"})}),y=e=>{const[r,t]=s.useState(!1);return s.useEffect(()=>{const n=window.matchMedia(e);n.matches!==r&&t(n.matches);const i=()=>t(n.matches);return n.addEventListener("change",i),()=>n.removeEventListener("change",i)},[e,r]),r};function R(e,r=500){s.useEffect(()=>{const t=g(e,r);return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[e,r])}const $=l.nav`
  ${({theme:e})=>`
    ${e.fontStyles.body2}
    color: ${e.palette.content.body};
    margin-bottom: ${e.spacing["3xs"]};
    overflow: hidden;
  `}
`,j=l.ul`
  padding: 0px;
  margin: 0px;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: ${({theme:e})=>e.spacing["4xs"]};
`,E=l.li`
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
`,B=l.div`
  ${({theme:e})=>`
    display: flex;
    align-items: center;
    gap: ${e.spacing["5xs"]};
  `}
`,L=(e,r)=>!!e.current&&!!r.current,S=e=>{const r=s.useRef(null),t=s.useRef(null),n=w(),i=y(`(min-width: ${n.breakpoints.m})`),[c,u]=s.useState(e),b=s.useCallback(()=>{if(i||!L(r,t)){u(e);return}const d=s.Children.toArray(e);if(t.current.scrollWidth>r.current.clientWidth){const a=d[d.length-1],C=[d[0],o.jsx(h.Item,{children:o.jsx(v,{})},"more-icon"),s.isValidElement(a)?s.cloneElement(a,{...a.props,style:{overflow:"hidden"}}):a];u(C)}},[e,i,r,t]);return R(b),{visibleChildren:c,breadcrumbRef:r,breadcrumbListRef:t}},m=30,h=({children:e,separator:r="slash"})=>{const{visibleChildren:t,breadcrumbRef:n,breadcrumbListRef:i}=S(e);return o.jsx($,{"aria-label":"Breadcrumb","data-testid":"breadcrumb",ref:n,children:o.jsx(j,{ref:i,children:A(t,r)})})},T=({children:e,style:r})=>{const{truncatedChildren:t,tooltip:n}=f(e);return o.jsx(E,{style:r,children:o.jsxs(p,{style:{overflow:"hidden"},children:[o.jsx(B,{children:t}),o.jsx(p.Content,{children:n})]})})},M=e=>e.length>=m?`${e.substring(0,m)}...`:e,f=e=>{let r="";return{truncatedChildren:s.Children.map(e,t=>{if(typeof t=="string"){const n=M(t);return r=n!==t?t:"",n}else if(s.isValidElement(t)){const{truncatedChildren:n,tooltip:i}=f(t.props.children);return r=i,s.cloneElement(t,{...t.props,children:n})}else return null}),tooltip:r}},A=(e,r)=>{const t=()=>({slash:o.jsx("span",{children:"/"}),arrow:o.jsx(x,{})})[r],n=i=>s.Children.count(e)-1===i;return s.Children.map(e,(i,c)=>o.jsxs(o.Fragment,{children:[i,!n(c)&&t()]}))};h.Item=T;export{h as B,y as u};
