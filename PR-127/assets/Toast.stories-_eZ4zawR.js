import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{B as c}from"./Button-5T3KsMRR.js";import"./IconButton.styled-B_RRHdai.js";import{T as h,a as r,e as y,b as x}from"./Toaster--6P4ugjQ.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Spinner-XruJ2zRJ.js";import"./index-lOH_pZ5X.js";import"./Box.styled-zcGhU7kj.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./extends-E30VzY7q.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./index-i4R6vv1G.js";import"./TooltipProvider-dYtCL4NP.js";import"./index-NFQKXe9b.js";import"./emotion-react.browser.esm-OUs2k2GK.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./Typography-8sSoJOlL.js";import"./Spinner.styled-euKDJvzq.js";import"./Button.styled-efwrJuai.js";import"./useMedia-S1QLeel4.js";import"./Close-fCiS4iy8.js";import"./Warning-JtpWMlIT.js";const L={title:"Data Display/Toast",component:h,argTypes:{type:{mapping:r,options:Object.values(r).filter(e=>typeof e=="string"),control:{type:"inline-radio"}}}},C=({type:e,title:n,message:i,dismissible:a,...p})=>t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>y({type:e,title:n,message:i,dismissible:a}),type:"button",children:"Click me"}),t.jsx(x,{...p})]}),o=C.bind({});o.args={type:r.Success,title:"success",dismissible:!0,message:"The Team ‘XYZ’ was created! You can now create your Apps and subscribe Products.",onClose:()=>console.log("clicked")};const k=({type:e,title:n,message:i,dismissible:a,children:p,...T})=>t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>y({type:e,title:n,message:i,dismissible:a,children:p}),type:"button",children:"Click me"}),t.jsx(x,{...T})]}),s=k.bind({});s.args={type:r.Error,title:"success",message:"The Team ‘XYZ’ was created! You can now create your Apps and subscribe Products.",onClose:()=>console.log("clicked"),children:t.jsxs(t.Fragment,{children:[t.jsx(c,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 1"}),t.jsx(c,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 2"})]})};var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
