import{j as n}from"./jsx-runtime-CKrituN3.js";import{c as f,G as w}from"./index-DWb54gmw.js";import{r as i}from"./index-CBqU2yxZ.js";import{T as g}from"./Typography-AgncjmvB.js";import{I as $}from"./IconButton-BS2RgPV3.js";import{C as h}from"./Close-CGHfkSk3.js";import{n as d}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import"./index-BtM5VmRH.js";import{a as y}from"./z-index-CJ_zK2y_.js";import{u as b}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";const v=({title:e})=>n.jsx(g,{color:"content.heading",element:"h4",fontStyles:"h4",children:e}),D={handleClose:()=>null},m=i.createContext(D),S=({handleClose:e,children:s})=>n.jsx(m.Provider,{value:{handleClose:e},children:s}),j=()=>{const e=i.useContext(m);if(!e)throw new Error("Drawer compound components cannot be rendered outside the Drawer component");return e},C=d.header`
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
`,E=({children:e})=>{const{handleClose:s}=j();return n.jsxs(C,{"data-testid":"drawer-header",children:[n.jsx("div",{children:e}),n.jsx($,{color:"default",dataTestId:"drawer-close-button",onClick:s,children:n.jsx(h,{})})]})},k=d.section`
  ${({theme:e})=>`
    position: relative;
    overflow: auto;
    padding:  ${e.spacing["2xs"]} ${e.spacing.xs} 0;
    
    @media only screen and (min-width: ${e.breakpoints.s}) {
      padding:  ${e.spacing["2xs"]} ${e.spacing.s} 0;
    }
  `}
`,T=d.div`
  position: absolute;
  margin-top: ${({theme:e})=>e.spacing["4xs"]};
`,z=({children:e,style:s,dataTestId:l})=>{const o=i.useRef(null),c=a=>{var r;const t=(r=o.current)==null?void 0:r.parentElement;t&&(a?t.classList.add("hasScroll"):t.classList.remove("hasScroll"))};return i.useEffect(()=>{if(o.current){const a=new IntersectionObserver(([{isIntersecting:t}])=>c(!t));return a.observe(o.current),()=>a.disconnect()}},[o]),n.jsxs(k,{"data-testid":l??"drawer-body",style:s,children:[e,n.jsx(T,{ref:o})]})},I=f`
  body {
    overflow: hidden;
  }
`,F=d.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${y};
`,L=d.div`
  ${({theme:e,isVisible:s})=>`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: ${e.palette.base.dark};
    opacity: ${s?.2:0};
    transition: opacity ${e.animations.emphasizedDecelerate.duration}
      ${e.animations.emphasizedDecelerate.timingFunction};
  `}
`,R=d.div`
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
      padding: ${e.spacing.s} 0;
    }
  `}
`,O=e=>parseFloat(e.replace(/[^\d.]/g,""))*1e3,p=({isVisible:e,setIsVisible:s,children:l,dataTestId:o})=>{const[c,a]=i.useState(!1),t=b(),r=i.useCallback(()=>{a(!1),setTimeout(()=>{s(!1)},O(t.animations.emphasizedDecelerate.timingFunction))},[s,t.animations.emphasizedDecelerate.timingFunction]);return i.useEffect(()=>{const u=x=>{x.key==="Escape"&&r()};return a(e),document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[r,e]),n.jsx(S,{handleClose:r,children:n.jsxs(F,{children:[e?n.jsx(w,{styles:I}):null,n.jsx(L,{"data-testid":"drawer-overlay",isVisible:c,onClick:r}),n.jsx(R,{"data-testid":o??"drawer-content-container",isVisible:c,children:l})]})})};p.Title=v;p.Header=E;p.Body=z;export{p as D};
