import{j as t}from"./jsx-runtime-CbCNBOXy.js";import{B as c}from"./Button-Rv_sQkM1.js";import"./IconButton.styled-lroq88L_.js";import{T as h,a as r,e as y,b as x}from"./Toaster-11H2fMN_.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Spinner-MMmfZH5v.js";import"./index-3YscyN0J.js";import"./Box.styled-9IvOy3K5.js";import"./emotion-styled.browser.esm-MfHNkeEy.js";import"./emotion-element-c39617d8.browser.esm-HJoeL-IU.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-PWMXJtKE.js";import"./TooltipProvider--5O1-WdZ.js";import"./index-qqeelA58.js";import"./emotion-react.browser.esm-jJwm7MoD.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-HrY-sHGj.js";import"./Typography-ZNxoi-hx.js";import"./Spinner.styled-mffHpE2Q.js";import"./Button.styled-3C_lV10f.js";import"./useMedia-QA4teFwo.js";import"./Close-ix0QOkL6.js";import"./Warning-6iU_aaJr.js";const L={title:"Data Display/Toast",component:h,argTypes:{type:{mapping:r,options:Object.values(r).filter(e=>typeof e=="string"),control:{type:"inline-radio"}}}},C=({type:e,title:n,message:i,dismissible:a,...p})=>t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>y({type:e,title:n,message:i,dismissible:a}),type:"button",children:"Click me"}),t.jsx(x,{...p})]}),o=C.bind({});o.args={type:r.Success,title:"success",dismissible:!0,message:"The Team ‘XYZ’ was created! You can now create your Apps and subscribe Products.",onClose:()=>console.log("clicked")};const k=({type:e,title:n,message:i,dismissible:a,children:p,...T})=>t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>y({type:e,title:n,message:i,dismissible:a,children:p}),type:"button",children:"Click me"}),t.jsx(x,{...T})]}),s=k.bind({});s.args={type:r.Error,title:"success",message:"The Team ‘XYZ’ was created! You can now create your Apps and subscribe Products.",onClose:()=>console.log("clicked"),children:t.jsxs(t.Fragment,{children:[t.jsx(c,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 1"}),t.jsx(c,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 2"})]})};var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,b,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const M=["Default","WithChildren"];export{o as Default,s as WithChildren,M as __namedExportsOrder,L as default};
