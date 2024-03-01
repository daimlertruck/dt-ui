import{j as e}from"./jsx-runtime-CKrituN3.js";import{L as y,a as x}from"./Link-C_asYthw.js";import{M as t,O as n}from"./Message-B9Op6Jij.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-styled.browser.esm-CRzct0lr.js";import"./extends-ChRHEBve.js";import"./emotion-element-43c6fea0.browser.esm-DXL8qHXx.js";import"./Button.styled-BaZIR7EZ.js";import"./Typography-DsaGOTBy.js";import"./index-C91dZ4Gr.js";import"./emotion-react.browser.esm-DebaLaFy.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./Close-CGHfkSk3.js";import"./Error-CIsWkEOB.js";import"./Info-BPeIL3LD.js";const H={title:"Data Display/Message",component:t,argTypes:{type:{options:Object.values(n),control:{type:"inline-radio"}},onClose:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onClose",undefined:"Does not have onClose"}}}},render:({hasActions:r,onClose:h,title:i,description:a,type:g})=>e.jsxs(t,{...h&&{onClose:()=>console.log("closed")},type:g,children:[i?e.jsx(t.Title,{children:i}):null,a?e.jsx(t.Description,{children:a}):null,r?e.jsx(t.Action,{children:e.jsx(y,{href:"#",textSize:x.Small,children:"View action"})}):null]})},o={args:{type:n.Error,hasActions:!0,title:"This is a title",description:"Some important information will appear here.",onClose:!0}},s={args:{type:n.Info},render:({type:r})=>e.jsx(t,{style:{alignItems:"center"},type:r,children:e.jsx("p",{children:"This is a custom and non-dismissable content"})})};var p,l,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: OMessageType.Error,
    hasActions: true,
    title: 'This is a title',
    description: 'Some important information will appear here.',
    onClose: ((true as unknown) as MessageStory['onClose'])
  }
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,d,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const R=["Default","WithCustomContent"];export{o as Default,s as WithCustomContent,R as __namedExportsOrder,H as default};
