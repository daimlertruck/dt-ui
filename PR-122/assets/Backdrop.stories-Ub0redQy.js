import{j as t}from"./jsx-runtime-CbCNBOXy.js";import{r as m}from"./index-IybTgENJ.js";import{B as c,a as r}from"./Backdrop-8Le5tyKs.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-styled.browser.esm-yeljtSWm.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./z-index-mmXzY7sY.js";import"./TooltipProvider-pK6yN7rV.js";import"./index-9BaFkuMC.js";import"./emotion-react.browser.esm-bvpyIPwg.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-HrY-sHGj.js";import"./hexToRgba-fpzAFQCT.js";const E={title:"Data Display/Backdrop",component:c,argTypes:{type:{mapping:r,options:Object.values(r).filter(o=>typeof o=="string"),control:{type:"inline-radio"}}}},k=({...o})=>{const[i,d]=m.useState(o.isOpen),n=()=>{d(l=>!l)};return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:n,type:"button",children:"Open Backdrop"}),t.jsxs(c,{...o,isOpen:i,children:[t.jsx(t.Fragment,{children:o.children}),t.jsx("button",{onClick:n,type:"button",children:"Close Backdrop"})]})]})},e=k.bind({});e.args={isOpen:!1,type:r.Dark,children:t.jsx("div",{children:"Example content."})};var p,s,a;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,E as default};
