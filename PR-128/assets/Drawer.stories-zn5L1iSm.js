import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{r as i}from"./index-4g5l5LRQ.js";import{c as b,G as h}from"./emotion-react.browser.esm-7R29exhq.js";import"./index-lb1Yyg-x.js";import{C as S}from"./Close-fCiS4iy8.js";import{T as j}from"./Typography-VWNkGQM0.js";import{n as t,u as v}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import{a as C}from"./z-index-n4kBdkOc.js";import{I as k}from"./IconButton.styled-QGcFIlZQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-E30VzY7q.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./TooltipProvider-y9Uc-rOM.js";const E=({title:e})=>r.jsx(j,{color:"textPrimary",element:"h4",fontStyles:"h4",children:e}),T=t.header`
  ${({theme:e})=>`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    padding: ${e.spacing.none} ${e.spacing.xs} ${e.spacing.xs}
      ${e.spacing.xs};
    background-color: ${e.colors.white};
    border-radius: ${e.radius["3xs"]} ${e.radius.none}
      ${e.radius.none} ${e.radius.none};

    @media only screen and (min-width: ${e.breakpoints.s}) {
      padding: ${e.spacing.none} ${e.spacing.s} ${e.spacing.s}
        ${e.spacing.s};
    }
  `}
`,I=({children:e})=>r.jsx(T,{children:e}),B=t.div`
  ${({theme:e})=>`
    padding: ${e.spacing.xs};

    @media only screen and (min-width: ${e.breakpoints.s}) {
      padding: ${e.spacing.s};
    }
  `}
`,V=({children:e})=>r.jsx(B,{children:e}),_=t.div`
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
`,z=t.div`
  ${({theme:e})=>`
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, ${e.colors.white}, transparent);
  `}
`,H=()=>r.jsx(_,{children:r.jsx(z,{})}),X=b`
  body {
    overflow: hidden;
  }
`,F=t.div`
  ${({isVisible:e,isTransformed:n})=>b`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${C};
    ${e&&"transform: translateX(0);"}
    ${!n&&"transform: translateX(100%);"}
  `}
`,O=t.div`
  ${({theme:e,isVisible:n})=>`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: ${e.colors.grey_90};
    opacity: ${n?.2:0};
    transition: opacity ${e.animations.emphasizedDecelerate.duration}
      ${e.animations.emphasizedDecelerate.timingFunction};
  `}
`,R=t.div`
  ${({theme:e,isVisible:n})=>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${e.colors.white};
    transform: ${n?"translateX(0)":"translateX(100%)"};
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
`,M=t(k)`
  ${({theme:e})=>`
    color: ${e.colors.grey_60};
  `}
`,P=e=>parseFloat(e.replace(/[^\d.]/g,""))*1e3,a=({isVisible:e,setIsVisible:n,children:d,dataTestId:p})=>{const[w,u]=i.useState(!1),g=i.useRef(null),$=v(),c=i.useCallback(()=>n(!1),[n]);return i.useEffect(()=>{let f;const D=l=>{l.key==="Escape"&&c()};return e?(u(!0),document.addEventListener("keydown",D)):f=setTimeout(()=>{const l=g.current;l&&(l.scrollTop=0),u(!1),document.removeEventListener("keydown",D)},P($.animations.emphasizedDecelerate.duration)),()=>clearTimeout(f)},[c,e,$.animations.emphasizedDecelerate.duration]),r.jsxs(F,{"data-testid":p??"drawer-container",isTransformed:w,isVisible:e,children:[e?r.jsx(h,{styles:X}):null,r.jsx(O,{"data-testid":"drawer-overlay",isVisible:e,onClick:c}),r.jsxs(R,{isVisible:e,children:[r.jsx(L,{children:r.jsx(M,{color:"neutralDark_700","data-testid":"drawer-close-button",onClick:c,children:r.jsx(S,{})})}),r.jsx(G,{ref:g,children:d})]})]})};a.Title=E;a.Header=I;a.ScrollEffectContainer=H;a.Body=V;const s=a,ie={title:"Data Display/Drawer",component:s},o=({...e})=>{const[n,d]=i.useState(e.isVisible),p=()=>{d(w=>!w)};return r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:p,type:"button",children:"Open Drawer"}),r.jsxs(s,{...e,isVisible:n,setIsVisible:d,children:[r.jsxs(s.Header,{children:[r.jsx(s.Title,{title:"Drawer title"}),r.jsx("div",{children:"Drawer header content here."})]}),r.jsx(s.ScrollEffectContainer,{}),r.jsx(s.Body,{children:r.jsx("div",{children:"Drawer body content here."})})]})]})};o.args={isVisible:!1};var y,x,m;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`({
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
}`,...(m=(x=o.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};const oe=["Default"];export{o as Default,oe as __namedExportsOrder,ie as default};
