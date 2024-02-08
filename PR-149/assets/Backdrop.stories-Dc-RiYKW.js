import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{r as l}from"./index-4g5l5LRQ.js";import{B as i,a as r}from"./Backdrop-uNKucweT.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./z-index-zwCKGdcf.js";import"./typography-TwTgPMES.js";import"./index-lb1Yyg-x.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./hexToRgba-fpzAFQCT.js";const T={title:"Data Display/Backdrop",component:i,argTypes:{type:{mapping:r,options:Object.values(r).filter(o=>typeof o=="string"),control:{type:"inline-radio"}},children:{table:{disable:!0}},isOpen:{table:{disable:!0}}}},e=({...o})=>{const[n,d]=l.useState(!1),p=()=>d(!n);return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:p,type:"button",children:"Open Backdrop"}),t.jsxs(i,{...o,isOpen:n,children:[t.jsx(t.Fragment,{children:o.children}),t.jsx("button",{onClick:p,type:"button",children:"Close Backdrop"})]})]})};e.args={isOpen:!1,type:r.Dark,children:t.jsx("div",{children:"Example content."})};var s,a,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
  ...props
}) => {
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);
  const toggleBackdrop = () => setIsBackdropOpen(!isBackdropOpen);
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
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const D=["Template"];export{e as Template,D as __namedExportsOrder,T as default};
