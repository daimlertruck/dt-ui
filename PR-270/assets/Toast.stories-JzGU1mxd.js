import{j as e}from"./jsx-runtime-CKrituN3.js";import{B as n}from"./Button-CdwwMXlB.js";import"./Button.styled-DnUhGC_u.js";import"./index-DjLjG34w.js";import{P as y}from"./Portal-U_0UEmB3.js";import"./index-CBqU2yxZ.js";import{T,a as t,e as k,b as C}from"./Toaster-BH0wxx41.js";import"./Spinner-CchqEybk.js";import"./index-DMRWov4L.js";import"./Box.styled-TgnH4Hzf.js";import"./emotion-styled.browser.esm-B1le5_Hy.js";import"./extends-DJVMZnyl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Typography-BuALMDSW.js";import"./index-BtM5VmRH.js";import"./Spinner.styled-Ce63FXC2.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./useMedia-BZw1ksCX.js";import"./Close-CGHfkSk3.js";const J={title:"Data Display/Toast",component:T,argTypes:{type:{mapping:t,options:Object.values(t).filter(r=>typeof r=="string"),control:{type:"inline-radio"}}},render:({children:r,type:d,title:g,message:u,dismissible:h,...x})=>e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>k({type:d,title:g,message:u,dismissible:h,children:r}),type:"button",children:"Click me"}),e.jsx(y,{isOpen:!0,children:e.jsx(C,{...x})})]})},o={args:{type:t.Success,title:"success",dismissible:!0,message:"This is a success message showed in the Toast.",onClose:()=>console.log("clicked")}},s={args:{type:t.Error,title:"error",message:"This is an error message showed in the Toast.",onClose:()=>console.log("clicked"),children:e.jsxs(e.Fragment,{children:[e.jsx(n,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 1"}),e.jsx(n,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 2"})]})}};var i,a,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const K=["Default","WithChildren"];export{o as Default,s as WithChildren,K as __namedExportsOrder,J as default};
