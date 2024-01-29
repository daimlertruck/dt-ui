import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{r as s}from"./index-4g5l5LRQ.js";import{c as b,G as h}from"./emotion-react.browser.esm-OUs2k2GK.js";import"./index-NFQKXe9b.js";import{C as S}from"./Close-fCiS4iy8.js";import{T as j}from"./Typography-8sSoJOlL.js";import{n as t}from"./emotion-styled.browser.esm-QTPHyGVR.js";import{a as v}from"./z-index-n4kBdkOc.js";import{I as C}from"./IconButton.styled-B_RRHdai.js";import{u as k}from"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-E30VzY7q.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./index-i4R6vv1G.js";import"./TooltipProvider-dYtCL4NP.js";const E=({title:e})=>n.jsx(j,{color:"content.heading",element:"h4",fontStyles:"h4",children:e}),T=t.header`
  ${({theme:e})=>`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    padding: ${e.spacing.none} ${e.spacing.xs} ${e.spacing.xs}
      ${e.spacing.xs};
    background-color: ${e.palette.base.default};
    border-radius: ${e.radius["3xs"]} ${e.radius.none}
      ${e.radius.none} ${e.radius.none};

    @media only screen and (min-width: ${e.breakpoints.s}) {
      padding: ${e.spacing.none} ${e.spacing.s} ${e.spacing.s}
        ${e.spacing.s};
    }
  `}
`,I=({children:e})=>n.jsx(T,{children:e}),B=t.div`
  ${({theme:e})=>`
    padding: ${e.spacing.xs};

    @media only screen and (min-width: ${e.breakpoints.s}) {
      padding: ${e.spacing.s};
    }
  `}
`,V=({children:e})=>n.jsx(B,{children:e}),z=t.div`
  ${({theme:e})=>`
    width: 100%;
    height: ${e.spacing.xs};
    position: fixed;
    padding: ${e.spacing.none} ${e.spacing.xs};
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: ${e.breakpoints.s}) {
      height: ${e.spacing.s};
      padding: ${e.spacing.none} ${e.spacing.s};
    }
  `}
`,H=t.div`
  ${({theme:e})=>`
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, ${e.palette.base.default}, transparent);
  `}
`,X=()=>n.jsx(z,{children:n.jsx(H,{})}),_=b`
  body {
    overflow: hidden;
  }
`,F=t.div`
  ${({isVisible:e,isTransformed:r})=>b`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${v};
    ${e&&"transform: translateX(0);"}
    ${!r&&"transform: translateX(100%);"}
  `}
`,O=t.div`
  ${({theme:e,isVisible:r})=>`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: ${e.palette.base.dark};
    opacity: ${r?.2:0};
    transition: opacity ${e.animations.emphasizedDecelerate.duration}
      ${e.animations.emphasizedDecelerate.timingFunction};
  `}
`,R=t.div`
  ${({theme:e,isVisible:r})=>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${e.palette.base.default};
    transform: ${r?"translateX(0)":"translateX(100%)"};
    transition: transform ${e.animations.emphasizedDecelerate.duration}
      ${e.animations.emphasizedDecelerate.timingFunction};

    @media only screen and (min-width: ${e.breakpoints.s}) {
      width: 500px;
      border-radius: ${e.radius["3xs"]} ${e.radius.none}
        ${e.radius.none} ${e.radius["3xs"]};
      box-shadow: ${e.shadows.s};
    }
  `}
`,G=t.div`
  position: relative;
  height: 100%;
  overflow: auto;
`,L=t.div`
  ${({theme:e})=>`
    width: 100%;
    padding: ${e.spacing.xs};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media only screen and (min-width: ${e.breakpoints.s}) {
      padding: ${e.spacing.s};
    }
  `}
`,M=t(C)`
  ${({theme:e})=>`
    color: ${e.palette.content.body};
  `}
`,A=e=>parseFloat(e.replace(/[^\d.]/g,""))*1e3,o=({isVisible:e,setIsVisible:r,children:d,dataTestId:p})=>{const[u,w]=s.useState(!1),f=s.useRef(null),$=k(),l=s.useCallback(()=>r(!1),[r]);return s.useEffect(()=>{let g;const D=c=>{c.key==="Escape"&&l()};return e?(w(!0),document.addEventListener("keydown",D)):g=setTimeout(()=>{const c=f.current;c&&(c.scrollTop=0),w(!1),document.removeEventListener("keydown",D)},A($.animations.emphasizedDecelerate.duration)),()=>clearTimeout(g)},[l,e,$.animations.emphasizedDecelerate.duration]),n.jsxs(F,{"data-testid":p??"drawer-container",isTransformed:u,isVisible:e,children:[e?n.jsx(h,{styles:_}):null,n.jsx(O,{"data-testid":"drawer-overlay",isVisible:e,onClick:l}),n.jsxs(R,{isVisible:e,children:[n.jsx(L,{children:n.jsx(M,{color:"default","data-testid":"drawer-close-button",onClick:l,children:n.jsx(S,{})})}),n.jsx(G,{ref:f,children:d})]})]})};o.Title=E;o.Header=I;o.ScrollEffectContainer=X;o.Body=V;const a=o,oe={title:"Data Display/Drawer",component:a},i=({...e})=>{const[r,d]=s.useState(e.isVisible),p=()=>{d(u=>!u)};return n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:p,type:"button",children:"Open Drawer"}),n.jsxs(a,{...e,isVisible:r,setIsVisible:d,children:[n.jsxs(a.Header,{children:[n.jsx(a.Title,{title:"Drawer title"}),n.jsx("div",{children:"Drawer header content here."})]}),n.jsx(a.ScrollEffectContainer,{}),n.jsx(a.Body,{children:n.jsx("div",{children:"Drawer body content here."})})]})]})};i.args={isVisible:!1};var y,x,m;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`({
  ...props
}: DrawerStoryProps) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(props.isVisible);
  const toggleDrawer = () => {
    setIsDrawerVisible(prevState => !prevState);
  };
  return <>
      <button onClick={toggleDrawer} type='button'>
        Open Drawer
      </button>

      <Drawer {...props} isVisible={isDrawerVisible} setIsVisible={setIsDrawerVisible}>
        <Drawer.Header>
          <Drawer.Title title='Drawer title' />
          <div>Drawer header content here.</div>
        </Drawer.Header>
        <Drawer.ScrollEffectContainer />
        <Drawer.Body>
          <div>Drawer body content here.</div>
        </Drawer.Body>
      </Drawer>
    </>;
}`,...(m=(x=i.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};const de=["Default"];export{i as Default,de as __namedExportsOrder,oe as default};
