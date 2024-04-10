import{j as n}from"./jsx-runtime-CKrituN3.js";import{T as u}from"./Tooltip-CJo5Yl2a.js";import{r as s}from"./index-CBqU2yxZ.js";import{A as x}from"./ArrowRight-Bcd3dS55.js";import{n as a}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import"./index-Cf0MdtL9.js";import"./index-BtM5VmRH.js";import{u as g}from"./useMedia-BZw1ksCX.js";import{u as y}from"./useDebounceResize-W6SBNGgx.js";import{u as w}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";const v=e=>n.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...e,children:n.jsx("path",{d:"M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"})}),$=a.nav`
  ${({theme:e})=>`
    ${e.fontStyles.body2}
    color: ${e.palette.content.body};
    margin-bottom: ${e.spacing["3xs"]};
    overflow: hidden;
  `}
`,j=a.ul`
  padding: 0px;
  margin: 0px;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: ${({theme:e})=>e.spacing["4xs"]};
`,R=a.li`
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
`,T=(e,t)=>!!e.current&&!!t.current,S=e=>{const t=s.useRef(null),r=s.useRef(null),o=w(),i=g(`(min-width: ${o.breakpoints.m})`),[c,p]=s.useState(e),b=s.useCallback(()=>{if(i||!T(t,r)){p(e);return}const d=s.Children.toArray(e);if(r.current.scrollWidth>t.current.clientWidth){const l=d[d.length-1],C=[d[0],n.jsx(f.Item,{children:n.jsx(v,{})},"more-icon"),s.isValidElement(l)?s.cloneElement(l,{...l.props,style:{overflow:"hidden"}}):l];p(C)}},[e,i,t,r]);return y(b),{visibleChildren:c,breadcrumbRef:t,breadcrumbListRef:r}},m=30,f=({children:e,separator:t="slash"})=>{const{visibleChildren:r,breadcrumbRef:o,breadcrumbListRef:i}=S(e);return n.jsx($,{"aria-label":"Breadcrumb","data-testid":"breadcrumb",ref:o,children:n.jsx(j,{ref:i,children:I(r,t)})})},E=({children:e,style:t})=>{const{truncatedChildren:r,tooltip:o}=h(e);return n.jsx(R,{style:t,children:n.jsxs(u,{style:{overflow:"hidden"},children:[n.jsx(B,{children:r}),n.jsx(u.Content,{children:o})]})})},A=e=>e.length>=m?`${e.substring(0,m)}...`:e,h=e=>{let t="";return{truncatedChildren:s.Children.map(e,r=>{if(typeof r=="string"){const o=A(r);return t=o!==r?r:"",o}else if(s.isValidElement(r)){const{truncatedChildren:o,tooltip:i}=h(r.props.children);return t=i,s.cloneElement(r,{...r.props,children:o})}else return null}),tooltip:t}},I=(e,t)=>{const r=()=>({slash:n.jsx("span",{children:"/"}),arrow:n.jsx(x,{})})[t],o=i=>s.Children.count(e)-1===i;return s.Children.map(e,(i,c)=>n.jsxs(n.Fragment,{children:[i,!o(c)&&r()]}))};f.Item=E;export{f as B};
