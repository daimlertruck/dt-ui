import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{L as y,a as x}from"./Link-_Aovc20k.js";import{i as t,O as i}from"./Toaster-qQQeWMmC.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./extends-E30VzY7q.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./index-QDCYB1ew.js";import"./emotion-react.browser.esm-OUs2k2GK.js";import"./IconButton-CybuRvMK.js";import"./Nav.styled-GsNCx_OC.js";import"./NavContainer.styled-U8vOQ75V.js";import"./DescriptionList-iMIY3Ofq.js";import"./ProfileInfo-W3kZ6w9g.js";import"./index-5j7WHYEJ.js";import"./index-jmm5gWkb.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-5tMk2lpP.js";import"./hexToRgba-fpzAFQCT.js";import"./z-index-Gl5ZkgZ3.js";import"./Header.styled-dSjoYgc7.js";import"./Tooltip-HGZMkqB_.js";import"./Avatar.styled-CUHg7m_f.js";import"./NavItem.styled-F-Ro6JRH.js";import"./Table-vPzD7-MQ.js";import"./LabelField-OWWqgjhK.js";import"./Footer.styled-ViVzqoaf.js";import"./Backdrop-W-F6eJUj.js";import"./Tag-Fq2qdiql.js";import"./Counter-LGyezUq9.js";import"./Breadcrumb-1_ppty26.js";import"./Tabs-tjTOCvAj.js";import"./Checkbox-AvcVMVeH.js";import"./Radio-lqTtrhen.js";import"./Divider-b2fMfDtF.js";import"./Icon.styled-XhfvdDtU.js";import"./Accordion-h2BS8qQ8.js";const re={title:"Data Display/Message",component:t,argTypes:{type:{options:Object.values(i),control:{type:"inline-radio"}},onClose:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onClose",undefined:"Does not have onClose"}}}},render:({hasActions:s,onClose:h,title:n,description:p,type:g})=>e.jsxs(t,{...h&&{onClose:()=>console.log("closed")},type:g,children:[n?e.jsx(t.Title,{children:n}):null,p?e.jsx(t.Description,{children:p}):null,s?e.jsx(t.Action,{children:e.jsx(y,{href:"#",textSize:x.Small,children:"View action"})}):null]})},o={args:{type:i.Error,hasActions:!0,title:"This is a title",description:"Some important information will appear here.",onClose:!0}},r={args:{type:i.Info},render:({type:s})=>e.jsx(t,{style:{alignItems:"center"},type:s,children:e.jsx("p",{children:"This is a custom and non-dismissable content"})})};var a,m,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    type: OMessageType.Error,
    hasActions: true,
    title: 'This is a title',
    description: 'Some important information will appear here.',
    onClose: ((true as unknown) as MessageStory['onClose'])
  }
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: OMessageType.Info
  },
  render: ({
    type
  }) => <Message style={{
    alignItems: 'center'
  }} type={type}>
      <p>This is a custom and non-dismissable content</p>
    </Message>
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const se=["Default","WithCustomContent"];export{o as Default,r as WithCustomContent,se as __namedExportsOrder,re as default};
