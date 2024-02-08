import{j as s}from"./jsx-runtime-vNq4Oc-g.js";import{L as y,a as f}from"./Link-c-Kgo-en.js";import{M as e,O as n}from"./Message-Z0JmI3YF.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./extends-E30VzY7q.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./Button.styled-bXS5oslU.js";import"./Typography-D6FO4u36.js";import"./MultiSelectProvider-vrdgqO57.js";import"./Close-fCiS4iy8.js";import"./Error-ZuOFem_K.js";import"./Info-eLlTCXLO.js";const z={title:"Data Display/Message",component:e,argTypes:{type:{options:Object.values(n),control:{type:"inline-radio"}}},render:({hasActions:r,isDismissable:a,title:o,description:p,type:g})=>s.jsxs(e,{isDismissable:a,type:g,children:[o?s.jsx(e.Title,{children:o}):null,p?s.jsx(e.Description,{children:p}):null,r?s.jsx(e.Action,{children:s.jsx(y,{href:"#",textSize:f.Small,children:"View action"})}):null]})},i={args:{isDismissable:!0,hasActions:!0,title:"This is a title",description:"Some important information will appear here.",type:n.Error}},t={args:{type:n.Info,isDismissable:!1},render:({type:r,isDismissable:a})=>s.jsx(e,{isDismissable:a,type:r,children:s.jsx("p",{children:"This is a custom and non-dismissable content"})})};var m,l,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isDismissable: true,
    hasActions: true,
    title: 'This is a title',
    description: 'Some important information will appear here.',
    type: OMessageType.Error
  }
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: OMessageType.Info,
    isDismissable: false
  },
  render: ({
    type,
    isDismissable
  }) => <Message isDismissable={isDismissable} type={type}>
      <p>This is a custom and non-dismissable content</p>
    </Message>
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const I=["Default","WithCustomContent"];export{i as Default,t as WithCustomContent,I as __namedExportsOrder,z as default};
