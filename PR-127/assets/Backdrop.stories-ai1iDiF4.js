import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{r as m}from"./index-4g5l5LRQ.js";import{B as c,a as r}from"./Backdrop-QFpTyuY_.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./z-index-n4kBdkOc.js";import"./typography-aU13o_mh.js";import"./index-lb1Yyg-x.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./hexToRgba-fpzAFQCT.js";const E={title:"Data Display/Backdrop",component:c,argTypes:{type:{mapping:r,options:Object.values(r).filter(o=>typeof o=="string"),control:{type:"inline-radio"}}}},k=({...o})=>{const[i,d]=m.useState(o.isOpen),n=()=>{d(l=>!l)};return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:n,type:"button",children:"Open Backdrop"}),t.jsxs(c,{...o,isOpen:i,children:[t.jsx(t.Fragment,{children:o.children}),t.jsx("button",{onClick:n,type:"button",children:"Close Backdrop"})]})]})},e=k.bind({});e.args={isOpen:!1,type:r.Dark,children:t.jsx("div",{children:"Example content."})};var p,s,a;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
