import{j as e}from"./jsx-runtime-CKrituN3.js";import{B as n}from"./Button-CRe5tPTH.js";import"./Button.styled-CrKUpX37.js";import"./index-Cf0MdtL9.js";import{P as y}from"./Portal-U_0UEmB3.js";import"./index-CBqU2yxZ.js";import{T,a as t,e as k,b as C}from"./Toaster-BzEQbwj2.js";import"./Spinner-CkBLRcS2.js";import"./index-gq_RjDZX.js";import"./Box.styled-B8MVCI1k.js";import"./emotion-styled.browser.esm-DhD7UCCJ.js";import"./extends-DJVMZnyl.js";import"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Typography-DO6grfQR.js";import"./index-BtM5VmRH.js";import"./Spinner.styled-CFEtLsEy.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./useMedia-BZw1ksCX.js";import"./Close-CGHfkSk3.js";const K={title:"Data Display/Toast",component:T,argTypes:{type:{mapping:t,options:Object.values(t).filter(r=>typeof r=="string"),control:{type:"inline-radio"}}},render:({children:r,type:d,title:g,message:u,dismissible:h,...x})=>e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>k({type:d,title:g,message:u,dismissible:h,children:r}),type:"button",children:"Click me"}),e.jsx(y,{isOpen:!0,children:e.jsx(C,{...x})})]})},o={args:{type:t.Success,title:"success",dismissible:!0,message:"This is a success message showed in the Toast.",onClose:()=>console.log("clicked")}},s={args:{type:t.Error,title:"error",message:"This is an error message showed in the Toast.",onClose:()=>console.log("clicked"),children:e.jsxs(e.Fragment,{children:[e.jsx(n,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 1"}),e.jsx(n,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 2"})]})}};var i,a,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const L=["Default","WithChildren"];export{o as Default,s as WithChildren,L as __namedExportsOrder,K as default};
