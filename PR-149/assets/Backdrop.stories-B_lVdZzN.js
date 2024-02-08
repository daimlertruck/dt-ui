import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{r as l}from"./index-4g5l5LRQ.js";import{P as m}from"./Portal-EY94Zi_-.js";import{B as c,a as n}from"./Backdrop-uNKucweT.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./z-index-zwCKGdcf.js";import"./typography-TwTgPMES.js";import"./index-lb1Yyg-x.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./hexToRgba-fpzAFQCT.js";const e=({...r})=>{const[o,d]=l.useState(!1),p=()=>d(!o);return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:p,type:"button",children:"Open Backdrop"}),t.jsx(m,{isOpen:o,children:t.jsxs(c,{...r,isOpen:o,children:[t.jsx(t.Fragment,{children:r.children}),t.jsx("button",{onClick:p,type:"button",children:"Close Backdrop"})]})})]})};e.args={isOpen:!1,type:n.Dark,children:t.jsx("div",{children:"Example content."})};const I={title:"Data Display/Backdrop",component:c,render:e,argTypes:{type:{mapping:n,options:Object.values(n).filter(r=>typeof r=="string"),control:{type:"inline-radio"}},children:{table:{disable:!0}},isOpen:{table:{disable:!0}}}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
  ...props
}) => {
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);
  const toggleBackdrop = () => setIsBackdropOpen(!isBackdropOpen);
  return <>
      <button onClick={toggleBackdrop} type='button'>
        Open Backdrop
      </button>
      <Portal isOpen={isBackdropOpen}>
        <Backdrop {...props} isOpen={isBackdropOpen}>
          <>{props.children}</>
          <button onClick={toggleBackdrop} type='button'>
            Close Backdrop
          </button>
        </Backdrop>
      </Portal>
    </>;
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const S=["Template"];export{e as Template,S as __namedExportsOrder,I as default};
