import{j as e}from"./jsx-runtime-CKrituN3.js";import{L as y,a as x}from"./Link-DHWhXEyj.js";import{M as s,O as n}from"./Message-qoDK10Q5.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Box.styled-TgnH4Hzf.js";import"./emotion-styled.browser.esm-B1le5_Hy.js";import"./extends-DJVMZnyl.js";import"./Typography-B0iC6O_B.js";import"./index-DSxJN9E5.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./Spinner.styled-DYDR6IYm.js";import"./Button.styled-DnUhGC_u.js";import"./Close-CGHfkSk3.js";const W={title:"Data Display/Message",component:s,argTypes:{type:{options:Object.values(n),control:{type:"inline-radio"}},onClose:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onClose",undefined:"Does not have onClose"}}}},render:({hasActions:r,onClose:h,title:i,description:a,type:g})=>e.jsxs(s,{...h&&{onClose:()=>console.log("closed")},type:g,children:[i?e.jsx(s.Title,{children:i}):null,a?e.jsx(s.Description,{children:a}):null,r?e.jsx(s.Action,{children:e.jsx(y,{href:"#",textSize:x.Small,children:"View action"})}):null]})},t={args:{type:n.Error,hasActions:!0,title:"This is a title",description:"Some important information will appear here.",onClose:!0}},o={args:{type:n.Info},render:({type:r})=>e.jsx(s,{style:{alignItems:"center"},type:r,children:e.jsx("p",{children:"This is a custom and non-dismissable content"})})};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: OMessageType.Error,
    hasActions: true,
    title: 'This is a title',
    description: 'Some important information will appear here.',
    onClose: ((true as unknown) as MessageStory['onClose'])
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const _=["Default","WithCustomContent"];export{t as Default,o as WithCustomContent,_ as __namedExportsOrder,W as default};
