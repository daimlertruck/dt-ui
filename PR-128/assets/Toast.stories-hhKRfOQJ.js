import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{B as p}from"./Button-Rtha2aFP.js";import"./IconButton.styled-QGcFIlZQ.js";import{T as h,a as n,e as y,b as x}from"./Toaster-KFj5sOr4.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Spinner-y_PWtyog.js";import"./index-H1EXaXUo.js";import"./Box.styled-oB9eueTz.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./Typography-VWNkGQM0.js";import"./TooltipProvider-y9Uc-rOM.js";import"./index-lb1Yyg-x.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./Spinner.styled-U10FD3--.js";import"./Button.styled-AWsdAV6e.js";import"./useMedia-S1QLeel4.js";import"./Close-fCiS4iy8.js";const I={title:"Data Display/Toast",component:h,argTypes:{type:{mapping:n,options:Object.values(n).filter(e=>typeof e=="string"),control:{type:"inline-radio"}}}},C=({type:e,title:r,message:i,dismissible:a,...c})=>t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>y({type:e,title:r,message:i,dismissible:a}),type:"button",children:"Click me"}),t.jsx(x,{...c})]}),s=C.bind({});s.args={type:n.Success,title:"success",dismissible:!0,message:"The Team ‘XYZ’ was created! You can now create your Apps and subscribe Products.",onClose:()=>console.log("clicked")};const k=({type:e,title:r,message:i,dismissible:a,children:c,...T})=>t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>y({type:e,title:r,message:i,dismissible:a,children:c}),type:"button",children:"Click me"}),t.jsx(x,{...T})]}),o=k.bind({});o.args={type:n.Error,title:"success",message:"The Team ‘XYZ’ was created! You can now create your Apps and subscribe Products.",onClose:()=>console.log("clicked"),children:t.jsxs(t.Fragment,{children:[t.jsx(p,{onClick:()=>console.log("clicked"),style:{padding:"8px 12px",color:"#4A4A4B"},variant:"text",children:"Action 1"}),t.jsx(p,{onClick:()=>console.log("clicked"),style:{padding:"8px 12px",color:"#4A4A4B"},variant:"text",children:"Action 2"})]})};var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
