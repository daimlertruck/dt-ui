import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{L as y,a as x}from"./Link-c-Kgo-en.js";import{M as s,O as n}from"./Message-WJXX75UR.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./extends-E30VzY7q.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./Button.styled-bXS5oslU.js";import"./Typography-D6FO4u36.js";import"./MultiSelectProvider-vrdgqO57.js";import"./Close-fCiS4iy8.js";import"./Error-ZuOFem_K.js";import"./Info-eLlTCXLO.js";const L={title:"Data Display/Message",component:s,argTypes:{type:{options:Object.values(n),control:{type:"inline-radio"}},onClose:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onClose",undefined:"Does not have onClose"}}}},render:({hasActions:r,onClose:h,title:i,description:a,type:g})=>e.jsxs(s,{...h&&{onClose:()=>console.log("closed")},type:g,children:[i?e.jsx(s.Title,{children:i}):null,a?e.jsx(s.Description,{children:a}):null,r?e.jsx(s.Action,{children:e.jsx(y,{href:"#",textSize:x.Small,children:"View action"})}):null]})},o={args:{type:n.Error,hasActions:!0,title:"This is a title",description:"Some important information will appear here.",onClose:!0}},t={args:{type:n.Info},render:({type:r})=>e.jsx(s,{type:r,children:e.jsx("p",{children:"This is a custom and non-dismissable content"})})};var p,l,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: OMessageType.Error,
    hasActions: true,
    title: 'This is a title',
    description: 'Some important information will appear here.',
    onClose: ((true as unknown) as MessageStory['onClose'])
  }
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,d,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: OMessageType.Info
  },
  render: ({
    type
  }) => <Message type={type}>
      <p>This is a custom and non-dismissable content</p>
    </Message>
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const z=["Default","WithCustomContent"];export{o as Default,t as WithCustomContent,z as __namedExportsOrder,L as default};
