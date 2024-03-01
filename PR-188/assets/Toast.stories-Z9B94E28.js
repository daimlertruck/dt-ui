import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import"./index-ZSUVOW7k.js";import{P as y}from"./Portal-EY94Zi_-.js";import"./index-4g5l5LRQ.js";import{B as i}from"./Button-VHKqqa--.js";import"./IconButton.styled-B_RRHdai.js";import{T,a as t,e as k,b as C}from"./Toaster-6fNiqyHz.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-react.browser.esm-OUs2k2GK.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./extends-E30VzY7q.js";import"./index-jmm5gWkb.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-5tMk2lpP.js";import"./Spinner-TJ4Xns0i.js";import"./index-lOH_pZ5X.js";import"./Box.styled-zcGhU7kj.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./Typography-D6FO4u36.js";import"./MultiSelectProvider-vrdgqO57.js";import"./Spinner.styled-euKDJvzq.js";import"./Button.styled-bXS5oslU.js";import"./useMedia-S1QLeel4.js";import"./ErrorOutline-r55wasc1.js";import"./Close-fCiS4iy8.js";import"./InfoOutline-vkAQEiMk.js";const U={title:"Data Display/Toast",component:T,argTypes:{type:{mapping:t,options:Object.values(t).filter(r=>typeof r=="string"),control:{type:"inline-radio"}}},render:({children:r,type:d,title:g,message:u,dismissible:h,...x})=>e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>k({type:d,title:g,message:u,dismissible:h,children:r}),type:"button",children:"Click me"}),e.jsx(y,{isOpen:!0,children:e.jsx(C,{...x})})]})},o={args:{type:t.Success,title:"success",dismissible:!0,message:"This is a success message showed in the Toast.",onClose:()=>console.log("clicked")}},s={args:{type:t.Error,title:"error",message:"This is an error message showed in the Toast.",onClose:()=>console.log("clicked"),children:e.jsxs(e.Fragment,{children:[e.jsx(i,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 1"}),e.jsx(i,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 2"})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: ToastType.Success,
    title: 'success',
    dismissible: true,
    message: 'This is a success message showed in the Toast.',
    onClose: () => console.log('clicked')
  }
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,p,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: ToastType.Error,
    title: 'error',
    message: 'This is an error message showed in the Toast.',
    onClose: () => console.log('clicked'),
    children: <>
        <Button color='secondary' onClick={() => console.log('clicked')} style={{
        padding: '8px 12px'
      }} variant='text'>
          Action 1
        </Button>
        <Button color='secondary' onClick={() => console.log('clicked')} style={{
        padding: '8px 12px'
      }} variant='text'>
          Action 2
        </Button>
      </>
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const V=["Default","WithChildren"];export{o as Default,s as WithChildren,V as __namedExportsOrder,U as default};
