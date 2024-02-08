import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{L as y,a as x}from"./Link-h5OL-K5T.js";import{M as o,O as n}from"./Message-XCrLiJqp.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./Button.styled-fGz7p1PP.js";import"./Typography-33DxhsRi.js";import"./typography-EFa8skSH.js";import"./index-X02A2_j2.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./Close-fCiS4iy8.js";import"./Error-bZYIneX_.js";import"./Info-eLlTCXLO.js";const _={title:"Data Display/Message",component:o,argTypes:{type:{options:Object.values(n),control:{type:"inline-radio"}},onClose:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onClose",undefined:"Does not have onClose"}}}},render:({hasActions:r,onClose:h,title:i,description:a,type:g})=>e.jsxs(o,{...h&&{onClose:()=>console.log("closed")},type:g,children:[i?e.jsx(o.Title,{children:i}):null,a?e.jsx(o.Description,{children:a}):null,r?e.jsx(o.Action,{children:e.jsx(y,{href:"#",textSize:x.Small,children:"View action"})}):null]})},s={args:{type:n.Error,hasActions:!0,title:"This is a title",description:"Some important information will appear here.",onClose:!0}},t={args:{type:n.Info},render:({type:r})=>e.jsx(o,{type:r,children:e.jsx("p",{children:"This is a custom and non-dismissable content"})})};var p,l,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: OMessageType.Error,
    hasActions: true,
    title: 'This is a title',
    description: 'Some important information will appear here.',
    onClose: ((true as unknown) as MessageStory['onClose'])
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,d,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: OMessageType.Info
  },
  render: ({
    type
  }) => <Message type={type}>
      <p>This is a custom and non-dismissable content</p>
    </Message>
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const H=["Default","WithCustomContent"];export{s as Default,t as WithCustomContent,H as __namedExportsOrder,_ as default};
