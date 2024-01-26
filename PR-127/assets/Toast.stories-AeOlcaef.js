import{j as e}from"./jsx-runtime-CbCNBOXy.js";import{B as p}from"./Button-eu84suNE.js";import"./IconButton.styled-5IFe7pAv.js";import{T as h,a as n,e as y,b as x}from"./Toaster-GlC-RYuZ.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Spinner-1LHA-Hrg.js";import"./index-dL_sMmnb.js";import"./Box.styled-0PR27JmK.js";import"./emotion-styled.browser.esm-yeljtSWm.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./Typography-qT9DMSUX.js";import"./TooltipProvider-Z8-dQ5a2.js";import"./index-Hhmu2M5c.js";import"./emotion-react.browser.esm-bvpyIPwg.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-HrY-sHGj.js";import"./Spinner.styled-kJToKyL4.js";import"./Button.styled-fxd2HAnM.js";import"./useMedia-QA4teFwo.js";import"./Close-ix0QOkL6.js";import"./Warning-rclJqbPA.js";const J={title:"Data Display/Toast",component:h,argTypes:{type:{mapping:n,options:Object.values(n).filter(t=>typeof t=="string"),control:{type:"inline-radio"}}}},C=({type:t,title:r,message:i,dismissible:a,...c})=>e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>y({type:t,title:r,message:i,dismissible:a}),type:"button",children:"Click me"}),e.jsx(x,{...c})]}),s=C.bind({});s.args={type:n.Success,title:"success",dismissible:!0,message:"The Team ‘XYZ’ was created! You can now create your Apps and subscribe Products.",onClose:()=>console.log("clicked")};const k=({type:t,title:r,message:i,dismissible:a,children:c,...T})=>e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>y({type:t,title:r,message:i,dismissible:a,children:c}),type:"button",children:"Click me"}),e.jsx(x,{...T})]}),o=k.bind({});o.args={type:n.Error,title:"success",message:"The Team ‘XYZ’ was created! You can now create your Apps and subscribe Products.",onClose:()=>console.log("clicked"),children:e.jsxs(e.Fragment,{children:[e.jsx(p,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 1"}),e.jsx(p,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 2"})]})};var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`({
  type,
  title,
  message,
  dismissible,
  ...props
}) => {
  return <>
      <button onClick={() => emitToast({
      type,
      title,
      message,
      dismissible
    })} type='button'>
        Click me
      </button>
      <Toaster {...props} />
    </>;
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,b,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`({
  type,
  title,
  message,
  dismissible,
  children,
  ...props
}) => {
  return <>
      <button onClick={() => emitToast({
      type,
      title,
      message,
      dismissible,
      children
    })} type='button'>
        Click me
      </button>
      <Toaster {...props} />
    </>;
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const K=["Default","WithChildren"];export{s as Default,o as WithChildren,K as __namedExportsOrder,J as default};
