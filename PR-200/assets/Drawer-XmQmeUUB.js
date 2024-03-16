import{j as n}from"./jsx-runtime-CKrituN3.js";import{c as w,G as g}from"./index-DkmeO_0L.js";import{r}from"./index-CBqU2yxZ.js";import{T as $}from"./Typography-DreKLixn.js";import{I as h}from"./IconButton-BS2RgPV3.js";import{C as y}from"./Close-CGHfkSk3.js";import{n as i}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import"./index-BtM5VmRH.js";import{a as b}from"./z-index-Bx-k-k_v.js";import{u as v}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";const D=({title:e})=>n.jsx($,{color:"content.heading",element:"h4",fontStyles:"h4",children:e}),S={handleClose:()=>null},x=r.createContext(S),j=({handleClose:e,children:s})=>n.jsx(x.Provider,{value:{handleClose:e},children:s}),C=()=>{const e=r.useContext(x);if(!e)throw new Error("Drawer compound components cannot be rendered outside the Drawer component");return e},E=i.header`
  ${({theme:e})=>`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 ${e.spacing.xs} ${e.spacing["2xs"]};

    &:has(+.hasScroll) {
      box-shadow: ${e.shadows.xs};
    }

    @media only screen and (min-width: ${e.breakpoints.s}) {
      padding: 0 ${e.spacing.s} ${e.spacing["2xs"]};
    }
  `}
`,k=({children:e})=>{const{handleClose:s}=C();return n.jsxs(E,{"data-testid":"drawer-header",children:[n.jsx("div",{children:e}),n.jsx(h,{color:"default",dataTestId:"drawer-close-button",onClick:s,children:n.jsx(y,{})})]})},T=i.section`
  ${({theme:e})=>`
    position: relative;
    overflow: auto;
    padding:  ${e.spacing["2xs"]} ${e.spacing.xs} 0;
    
    @media only screen and (min-width: ${e.breakpoints.s}) {
      padding:  ${e.spacing["2xs"]} ${e.spacing.s} 0;
    }
  `}
`,z=i.div`
  position: absolute;
  margin-top: ${({theme:e})=>e.spacing["4xs"]};
`,I=({children:e,style:s,dataTestId:c})=>{const t=r.useRef(null),l=o=>{const a=t.current.parentElement;o?a.classList.add("hasScroll"):a.classList.remove("hasScroll")};return r.useEffect(()=>{if(t.current){const o=new IntersectionObserver(([{isIntersecting:a}])=>l(!a));return o.observe(t.current),()=>o.disconnect()}},[t]),n.jsxs(T,{"data-testid":c??"drawer-body",style:s,children:[e,n.jsx(z,{ref:t})]})},F=w`
  body {
    overflow: hidden;
  }
`,L=i.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${b};
`,R=i.div`
  ${({theme:e,isVisible:s})=>`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: ${e.palette.base.dark};
    opacity: ${s?.2:0};
    transition: opacity ${e.animations.emphasizedDecelerate.duration}
      ${e.animations.emphasizedDecelerate.timingFunction};
  `}
`,A=i.div`
  ${({theme:e,isVisible:s})=>`
    display: grid;
    grid-template-rows: auto 1fr;
    padding: ${e.spacing.xs} 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${e.palette.base.default};
    transform: ${s?"translateX(0)":"translateX(100%)"};
    transition: transform ${e.animations.emphasizedDecelerate.duration}
      ${e.animations.emphasizedDecelerate.timingFunction};

    @media only screen and (min-width: ${e.breakpoints.s}) {
      width: 500px;
      border-radius: ${e.radius["3xs"]} ${e.radius.none}
        ${e.radius.none} ${e.radius["3xs"]};
      box-shadow: ${e.shadows.s};
      padding: ${e.spacing.xs} 0;
    }
  `}
`,O=e=>parseFloat(e.replace(/[^\d.]/g,""))*1e3,p=({isVisible:e,setIsVisible:s,children:c,dataTestId:t})=>{const[l,o]=r.useState(!1),a=v(),d=r.useCallback(()=>{o(!1),setTimeout(()=>{s(!1)},O(a.animations.emphasizedDecelerate.timingFunction))},[s,a.animations.emphasizedDecelerate.timingFunction]);r.useEffect(()=>{const m=f=>{f.key==="Escape"&&d()};return o(e),document.addEventListener("keydown",m),()=>{document.removeEventListener("keydown",m)}},[d,e]);const u=l;return n.jsx(j,{handleClose:d,children:n.jsxs(L,{children:[e?n.jsx(g,{styles:F}):null,n.jsx(R,{"data-testid":"drawer-overlay",isVisible:u,onClick:d}),n.jsx(A,{"data-testid":t??"drawer-content-container",isVisible:u,children:c})]})})};p.Title=D;p.Header=k;p.Body=I;export{p as D};
