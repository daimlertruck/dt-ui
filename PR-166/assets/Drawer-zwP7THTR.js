import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{c as u,G as x}from"./emotion-react.browser.esm-OUs2k2GK.js";import{r as i}from"./index-4g5l5LRQ.js";import{C as w}from"./Close-fCiS4iy8.js";import{T as m}from"./Typography-D6FO4u36.js";import{n as a}from"./emotion-styled.browser.esm-QTPHyGVR.js";import"./index-gdlvxp3s.js";import"./index-jmm5gWkb.js";import{b}from"./z-index-zwCKGdcf.js";import{I as h}from"./IconButton.styled-B_RRHdai.js";import{u as S}from"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";const D=({title:n})=>t.jsx(m,{color:"content.heading",element:"h4",fontStyles:"h4",children:n}),j=a.header`
  ${({theme:n})=>`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    padding: ${n.spacing.none} ${n.spacing.xs} ${n.spacing.xs}
      ${n.spacing.xs};
    background-color: ${n.palette.base.default};
    border-radius: ${n.radius["3xs"]} ${n.radius.none}
      ${n.radius.none} ${n.radius.none};

    @media only screen and (min-width: ${n.breakpoints.s}) {
      padding: ${n.spacing.none} ${n.spacing.s} ${n.spacing.s}
        ${n.spacing.s};
    }
  `}
`,k=({children:n})=>t.jsx(j,{children:n}),v=a.div`
  ${({theme:n})=>`
    padding: ${n.spacing.xs};

    @media only screen and (min-width: ${n.breakpoints.s}) {
      padding: ${n.spacing.s};
    }
  `}
`,C=({children:n})=>t.jsx(v,{children:n}),E=a.div`
  ${({theme:n})=>`
    width: 100%;
    height: ${n.spacing.xs};
    position: fixed;
    padding: ${n.spacing.none} ${n.spacing.xs};
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: ${n.breakpoints.s}) {
      height: ${n.spacing.s};
      padding: ${n.spacing.none} ${n.spacing.s};
    }
  `}
`,T=a.div`
  ${({theme:n})=>`
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, ${n.palette.base.default}, transparent);
  `}
`,z=()=>t.jsx(E,{children:t.jsx(T,{})}),I=u`
  body {
    overflow: hidden;
  }
`,B=a.div`
  ${({isVisible:n,isTransformed:o})=>u`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${b};
    ${n&&"transform: translateX(0);"}
    ${!o&&"transform: translateX(100%);"}
  `}
`,X=a.div`
  ${({theme:n,isVisible:o})=>`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: ${n.palette.base.dark};
    opacity: ${o?.2:0};
    transition: opacity ${n.animations.emphasizedDecelerate.duration}
      ${n.animations.emphasizedDecelerate.timingFunction};
  `}
`,R=a.div`
  ${({theme:n,isVisible:o})=>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${n.palette.base.default};
    transform: ${o?"translateX(0)":"translateX(100%)"};
    transition: transform ${n.animations.emphasizedDecelerate.duration}
      ${n.animations.emphasizedDecelerate.timingFunction};

    @media only screen and (min-width: ${n.breakpoints.s}) {
      width: 500px;
      border-radius: ${n.radius["3xs"]} ${n.radius.none}
        ${n.radius.none} ${n.radius["3xs"]};
      box-shadow: ${n.shadows.s};
    }
  `}
`,F=a.div`
  position: relative;
  height: 100%;
  overflow: auto;
`,G=a.div`
  ${({theme:n})=>`
    width: 100%;
    padding: ${n.spacing.xs};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media only screen and (min-width: ${n.breakpoints.s}) {
      padding: ${n.spacing.s};
    }
  `}
`,H=a(h)`
  ${({theme:n})=>`
    color: ${n.palette.content.body};
  `}
`,L=n=>parseFloat(n.replace(/[^\d.]/g,""))*1e3,r=({isVisible:n,setIsVisible:o,children:f,dataTestId:g})=>{const[y,d]=i.useState(!1),c=i.useRef(null),l=S(),e=i.useCallback(()=>o(!1),[o]);return i.useEffect(()=>{let p;const $=s=>{s.key==="Escape"&&e()};return n?(d(!0),document.addEventListener("keydown",$)):p=setTimeout(()=>{const s=c.current;s&&(s.scrollTop=0),d(!1),document.removeEventListener("keydown",$)},L(l.animations.emphasizedDecelerate.duration)),()=>clearTimeout(p)},[e,n,l.animations.emphasizedDecelerate.duration]),t.jsxs(B,{"data-testid":g??"drawer-container",isTransformed:y,isVisible:n,children:[n?t.jsx(x,{styles:I}):null,t.jsx(X,{"data-testid":"drawer-overlay",isVisible:n,onClick:e}),t.jsxs(R,{isVisible:n,children:[t.jsx(G,{children:t.jsx(H,{color:"default","data-testid":"drawer-close-button",onClick:e,children:t.jsx(w,{})})}),t.jsx(F,{ref:c,children:f})]})]})};r.Title=D;r.Header=k;r.ScrollEffectContainer=z;r.Body=C;export{r as D};
