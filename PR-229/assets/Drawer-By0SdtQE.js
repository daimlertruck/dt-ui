import{j as n}from"./jsx-runtime-CKrituN3.js";import{c as w,G as f}from"./index-8Kg4V25X.js";import{r}from"./index-CBqU2yxZ.js";import{T as g}from"./Typography-C0EWJ3ZN.js";import{I as $}from"./IconButton-BS2RgPV3.js";import{C as h}from"./Close-CGHfkSk3.js";import{n as i}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import"./index-BtM5VmRH.js";import{a as y}from"./z-index-C-tE6wDk.js";import{u as b}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";const v=({title:e})=>n.jsx(g,{color:"content.heading",element:"h4",fontStyles:"h4",children:e}),D={handleClose:()=>null},m=r.createContext(D),S=({handleClose:e,children:s})=>n.jsx(m.Provider,{value:{handleClose:e},children:s}),j=()=>{const e=r.useContext(m);if(!e)throw new Error("Drawer compound components cannot be rendered outside the Drawer component");return e},C=i.header`
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
`,E=({children:e})=>{const{handleClose:s}=j();return n.jsxs(C,{"data-testid":"drawer-header",children:[n.jsx("div",{children:e}),n.jsx($,{color:"default",dataTestId:"drawer-close-button",onClick:s,children:n.jsx(h,{})})]})},k=i.section`
  ${({theme:e})=>`
    position: relative;
    overflow: auto;
    padding:  ${e.spacing["2xs"]} ${e.spacing.xs} 0;
    
    @media only screen and (min-width: ${e.breakpoints.s}) {
      padding:  ${e.spacing["2xs"]} ${e.spacing.s} 0;
    }
  `}
`,T=i.div`
  position: absolute;
  margin-top: ${({theme:e})=>e.spacing["4xs"]};
`,z=({children:e,style:s,dataTestId:l})=>{const t=r.useRef(null),d=o=>{const a=t.current.parentElement;o?a.classList.add("hasScroll"):a.classList.remove("hasScroll")};return r.useEffect(()=>{if(t.current){const o=new IntersectionObserver(([{isIntersecting:a}])=>d(!a));return o.observe(t.current),()=>o.disconnect()}},[t]),n.jsxs(k,{"data-testid":l??"drawer-body",style:s,children:[e,n.jsx(T,{ref:t})]})},I=w`
  body {
    overflow: hidden;
  }
`,F=i.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${y};
`,L=i.div`
  ${({theme:e,isVisible:s})=>`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: ${e.palette.base.dark};
    opacity: ${s?.2:0};
    transition: opacity ${e.animations.emphasizedDecelerate.duration}
      ${e.animations.emphasizedDecelerate.timingFunction};
  `}
`,R=i.div`
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
`,O=e=>parseFloat(e.replace(/[^\d.]/g,""))*1e3,p=({isVisible:e,setIsVisible:s,children:l,dataTestId:t})=>{const[d,o]=r.useState(!1),a=b(),c=r.useCallback(()=>{o(!1),setTimeout(()=>{s(!1)},O(a.animations.emphasizedDecelerate.timingFunction))},[s,a.animations.emphasizedDecelerate.timingFunction]);return r.useEffect(()=>{const u=x=>{x.key==="Escape"&&c()};return o(e),document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[c,e]),n.jsx(S,{handleClose:c,children:n.jsxs(F,{children:[e?n.jsx(f,{styles:I}):null,n.jsx(L,{"data-testid":"drawer-overlay",isVisible:d,onClick:c}),n.jsx(R,{"data-testid":t??"drawer-content-container",isVisible:d,children:l})]})})};p.Title=v;p.Header=E;p.Body=z;export{p as D};
