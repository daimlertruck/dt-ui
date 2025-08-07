import{j as s}from"./jsx-runtime-CB_V9I5Y.js";import{g as f,G as w}from"./index-DH0gh8dm.js";import{r as i}from"./index-CTjT7uj6.js";import{T as g}from"./Typography-DqiQHYtc.js";import{I as $}from"./IconButton-BBUlNHzM.js";import{C as y}from"./Close-BgpoXZkN.js";import{s as d,u as h}from"./emotion-styled.browser.esm-DuL_gwYN.js";import"./index-B_xFk7rk.js";import{D as b}from"./z-index-Ds5QkyqS.js";const v=({title:e})=>s.jsx(g,{color:"content.dark",element:"h4",fontStyles:"h4",children:e}),D={handleClose:()=>null},x=i.createContext(D),j=({handleClose:e,children:n})=>s.jsx(x.Provider,{value:{handleClose:e},children:n}),C=()=>{const e=i.useContext(x);if(!e)throw new Error("Drawer compound components cannot be rendered outside the Drawer component");return e},S=d.header`
  ${({theme:e})=>`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 ${e.spacing.xs} ${e.spacing["2xs"]};

    &:has(+.hasScroll) {
      box-shadow: ${e.shadows.xs};
    }

    @media only screen and (min-width: ${e.breakpoints.s}px) {
      padding: 0 ${e.spacing.s} ${e.spacing["2xs"]};
    }
  `}
`,E=({children:e})=>{const{handleClose:n}=C();return s.jsxs(S,{"data-testid":"drawer-header",children:[s.jsx("div",{children:e}),s.jsx($,{color:"default",dataTestId:"drawer-close-button",onClick:n,children:s.jsx(y,{})})]})},k=d.section`
  ${({theme:e})=>`
    position: relative;
    overflow: auto;
    padding:  ${e.spacing["2xs"]} ${e.spacing.xs} 0;
    
    @media only screen and (min-width: ${e.breakpoints.s}px) {
      padding:  ${e.spacing["2xs"]} ${e.spacing.s} 0;
    }
  `}
`,T=d.div`
  position: absolute;
  margin-top: ${({theme:e})=>e.spacing["4xs"]};
`,z=({children:e,style:n,dataTestId:l})=>{const o=i.useRef(null),c=r=>{var a;const t=(a=o.current)==null?void 0:a.parentElement;t&&(r?t.classList.add("hasScroll"):t.classList.remove("hasScroll"))};return i.useEffect(()=>{if(o.current){const r=new IntersectionObserver(([{isIntersecting:t}])=>c(!t));return r.observe(o.current),()=>r.disconnect()}},[o]),s.jsxs(k,{"data-testid":l??"drawer-body",style:n,children:[e,s.jsx(T,{ref:o})]})},I=f`
  body {
    overflow: hidden;
  }
`,F=d.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${b};
`,L=d.div`
  ${({theme:e,isVisible:n})=>`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: ${e.palette.surface.dark};
    opacity: ${n?.2:0};
    transition: opacity ${e.animations.emphasizedDecelerate.duration}
      ${e.animations.emphasizedDecelerate.timingFunction};
  `}
`,R=d.div`
  ${({theme:e,isVisible:n})=>`
    display: grid;
    grid-template-rows: auto 1fr;
    padding: ${e.spacing.xs} 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${e.palette.surface.contrast};
    transform: ${n?"translateX(0)":"translateX(100%)"};
    transition: transform ${e.animations.emphasizedDecelerate.duration}
      ${e.animations.emphasizedDecelerate.timingFunction};

    @media only screen and (min-width: ${e.breakpoints.s}px) {
      width: 500px;
      border-radius: ${e.radius["3xs"]} ${e.radius.none}
        ${e.radius.none} ${e.radius["3xs"]};
      box-shadow: ${e.shadows.s};
      padding: ${e.spacing.s} 0;
    }
  `}
`,O=e=>parseFloat(e.replace(/[^\d.]/g,""))*1e3,p=({isVisible:e,setIsVisible:n,children:l,dataTestId:o})=>{const[c,r]=i.useState(!1),t=h(),a=i.useCallback(()=>{r(!1),setTimeout(()=>{n(!1)},O(t.animations.emphasizedDecelerate.timingFunction))},[n,t.animations.emphasizedDecelerate.timingFunction]);return i.useEffect(()=>{const u=m=>{m.key==="Escape"&&a()};return r(e),document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[a,e]),s.jsx(j,{handleClose:a,children:s.jsxs(F,{children:[e?s.jsx(w,{styles:I}):null,s.jsx(L,{"data-testid":"drawer-overlay",isVisible:c,onClick:a}),s.jsx(R,{"data-testid":o??"drawer-content-container",isVisible:c,children:l})]})})};p.Title=v;p.Header=E;p.Body=z;export{p as D};
