import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import"./index-LonLnBAn.js";import{P as y}from"./Portal-EY94Zi_-.js";import"./Icon.styled-_wbYwLP-.js";import"./index-4g5l5LRQ.js";import{B as n}from"./Button-hdgc53jE.js";import"./IconButton.styled-39rpUtWL.js";import{T,a as t,e as k,b as C}from"./Toaster-Sb1mPwt1.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-5tMk2lpP.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./Spinner-oBHJsxSH.js";import"./index-H1EXaXUo.js";import"./Box.styled-oB9eueTz.js";import"./Typography-hG7SbwPH.js";import"./MultiSelectProvider-vrdgqO57.js";import"./Spinner.styled-2Rn7jPaQ.js";import"./Button.styled-fGz7p1PP.js";import"./useMedia-S1QLeel4.js";import"./ErrorOutline-r55wasc1.js";import"./Close-fCiS4iy8.js";const Q={title:"Data Display/Toast",component:T,argTypes:{type:{mapping:t,options:Object.values(t).filter(r=>typeof r=="string"),control:{type:"inline-radio"}}},render:({children:r,type:d,title:g,message:u,dismissible:h,...x})=>e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>k({type:d,title:g,message:u,dismissible:h,children:r}),type:"button",children:"Click me"}),e.jsx(y,{isOpen:!0,children:e.jsx(C,{...x})})]})},o={args:{type:t.Success,title:"success",dismissible:!0,message:"This is a success message showed in the Toast.",onClose:()=>console.log("clicked")}},s={args:{type:t.Error,title:"error",message:"This is an error message showed in the Toast.",onClose:()=>console.log("clicked"),children:e.jsxs(e.Fragment,{children:[e.jsx(n,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 1"}),e.jsx(n,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 2"})]})}};var i,a,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const U=["Default","WithChildren"];export{o as Default,s as WithChildren,U as __namedExportsOrder,Q as default};
