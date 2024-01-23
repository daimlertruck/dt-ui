import{j as t}from"./jsx-runtime-CbCNBOXy.js";import{B as p}from"./Button-OjZkVnuO.js";import"./IconButton.styled-exhLHJAm.js";import{T as h,a as n,e as y,b as x}from"./Toaster-1CXs2X62.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Spinner-HXmQWfKN.js";import"./index-dL_sMmnb.js";import"./Box.styled-0PR27JmK.js";import"./emotion-styled.browser.esm-yeljtSWm.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./Typography-Bp0by5Aw.js";import"./TooltipProvider-eIt6yA1p.js";import"./index-Hhmu2M5c.js";import"./emotion-react.browser.esm-bvpyIPwg.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-HrY-sHGj.js";import"./Spinner.styled-rmxTGO73.js";import"./Button.styled-JMA4V0n6.js";import"./useMedia-QA4teFwo.js";import"./Close-ix0QOkL6.js";const I={title:"Data Display/Toast",component:h,argTypes:{type:{mapping:n,options:Object.values(n).filter(e=>typeof e=="string"),control:{type:"inline-radio"}}}},C=({type:e,title:r,message:i,dismissible:a,...c})=>t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>y({type:e,title:r,message:i,dismissible:a}),type:"button",children:"Click me"}),t.jsx(x,{...c})]}),s=C.bind({});s.args={type:n.Success,title:"success",dismissible:!0,message:"The Team ‘XYZ’ was created! You can now create your Apps and subscribe Products.",onClose:()=>console.log("clicked")};const k=({type:e,title:r,message:i,dismissible:a,children:c,...T})=>t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>y({type:e,title:r,message:i,dismissible:a,children:c}),type:"button",children:"Click me"}),t.jsx(x,{...T})]}),o=k.bind({});o.args={type:n.Error,title:"success",message:"The Team ‘XYZ’ was created! You can now create your Apps and subscribe Products.",onClose:()=>console.log("clicked"),children:t.jsxs(t.Fragment,{children:[t.jsx(p,{onClick:()=>console.log("clicked"),style:{padding:"8px 12px",color:"#4A4A4B"},variant:"text",children:"Action 1"}),t.jsx(p,{onClick:()=>console.log("clicked"),style:{padding:"8px 12px",color:"#4A4A4B"},variant:"text",children:"Action 2"})]})};var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const J=["Default","WithChildren"];export{s as Default,o as WithChildren,J as __namedExportsOrder,I as default};
