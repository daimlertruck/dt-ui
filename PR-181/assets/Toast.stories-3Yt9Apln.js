import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import"./index-5j7WHYEJ.js";import{P as y}from"./z-index-Gl5ZkgZ3.js";import"./index-4g5l5LRQ.js";import{B as i}from"./Button-RdmZqwgs.js";import"./IconButton-CybuRvMK.js";import{j as T,k as s,l as k,m as C}from"./Toaster-qQQeWMmC.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-react.browser.esm-OUs2k2GK.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./extends-E30VzY7q.js";import"./index-jmm5gWkb.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-5tMk2lpP.js";import"./Link-_Aovc20k.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./index-QDCYB1ew.js";import"./Nav.styled-GsNCx_OC.js";import"./NavContainer.styled-U8vOQ75V.js";import"./DescriptionList-iMIY3Ofq.js";import"./ProfileInfo-W3kZ6w9g.js";import"./hexToRgba-fpzAFQCT.js";import"./Header.styled-dSjoYgc7.js";import"./Tooltip-HGZMkqB_.js";import"./Avatar.styled-CUHg7m_f.js";import"./NavItem.styled-F-Ro6JRH.js";import"./Table-vPzD7-MQ.js";import"./LabelField-OWWqgjhK.js";import"./Footer.styled-ViVzqoaf.js";import"./Backdrop-W-F6eJUj.js";import"./Tag-Fq2qdiql.js";import"./Counter-LGyezUq9.js";import"./Breadcrumb-1_ppty26.js";import"./Tabs-tjTOCvAj.js";import"./Checkbox-AvcVMVeH.js";import"./Radio-lqTtrhen.js";import"./Divider-b2fMfDtF.js";import"./Icon.styled-XhfvdDtU.js";import"./Accordion-h2BS8qQ8.js";const ao={title:"Data Display/Toast",component:T,argTypes:{type:{mapping:s,options:Object.values(s).filter(r=>typeof r=="string"),control:{type:"inline-radio"}}},render:({children:r,type:d,title:g,message:u,dismissible:h,...x})=>o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>k({type:d,title:g,message:u,dismissible:h,children:r}),type:"button",children:"Click me"}),o.jsx(y,{isOpen:!0,children:o.jsx(C,{...x})})]})},t={args:{type:s.Success,title:"success",dismissible:!0,message:"This is a success message showed in the Toast.",onClose:()=>console.log("clicked")}},e={args:{type:s.Error,title:"error",message:"This is an error message showed in the Toast.",onClose:()=>console.log("clicked"),children:o.jsxs(o.Fragment,{children:[o.jsx(i,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 1"}),o.jsx(i,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 2"})]})}};var n,a,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: ToastType.Success,
    title: 'success',
    dismissible: true,
    message: 'This is a success message showed in the Toast.',
    onClose: () => console.log('clicked')
  }
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var p,m,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const co=["Default","WithChildren"];export{t as Default,e as WithChildren,co as __namedExportsOrder,ao as default};
