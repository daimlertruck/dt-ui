import{j as t}from"./jsx-runtime-CbCNBOXy.js";import{r as m}from"./index-IybTgENJ.js";import{B as c,a as e}from"./Backdrop-eNr6x6p_.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-styled.browser.esm-MfHNkeEy.js";import"./emotion-element-c39617d8.browser.esm-HJoeL-IU.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./z-index-n4kBdkOc.js";import"./TooltipProvider--5O1-WdZ.js";import"./index-qqeelA58.js";import"./emotion-react.browser.esm-jJwm7MoD.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-HrY-sHGj.js";import"./hexToRgba-fpzAFQCT.js";const I={title:"Data Display/Backdrop",component:c,argTypes:{type:{mapping:e,options:Object.values(e).filter(o=>typeof o=="string"),control:{type:"inline-radio"}}}},k=({...o})=>{const[i,d]=m.useState(o.isOpen),n=()=>{d(l=>!l)};return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:n,type:"button",children:"Open Backdrop"}),t.jsxs(c,{...o,isOpen:i,children:[t.jsx(t.Fragment,{children:o.children}),t.jsx("button",{onClick:n,type:"button",children:"Close Backdrop"})]})]})},r=k.bind({});r.args={isOpen:!1,type:e.Dark,children:t.jsx("div",{children:"Example content."})};var p,s,a;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`({
  ...props
}) => {
  const [isBackdropOpen, setIsBackdropOpen] = useState(props.isOpen);
  const toggleBackdrop = () => {
    setIsBackdropOpen(prevState => !prevState);
  };
  return <>
      <button onClick={toggleBackdrop} type='button'>
        Open Backdrop
      </button>
      <Backdrop {...props} isOpen={isBackdropOpen}>
        <>{props.children}</>
        <button onClick={toggleBackdrop} type='button'>
          Close Backdrop
        </button>
      </Backdrop>
    </>;
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const T=["Default"];export{r as Default,T as __namedExportsOrder,I as default};
