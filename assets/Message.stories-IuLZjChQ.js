import{j as e}from"./jsx-runtime-BTCK_S7S.js";import{L as y,a as x}from"./Link-EItEcb3Z.js";import{M as t,O as n}from"./Message-i1E2D7_z.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Box.styled-B_R5XVxs.js";import"./emotion-styled.browser.esm-DQrX-Ye0.js";import"./extends-D3DEmvZu.js";import"./Typography-BmDPVo4c.js";import"./index-alWhQwoC.js";import"./index-D_w70K-N.js";import"./index-BAMY2Nnw.js";import"./util-CeDosPPD.js";import"./index-BwrsF4c9.js";import"./Spinner.styled-DKVt3JB6.js";import"./Button.styled-DlWoDIQY.js";import"./Close-B4vRQiIP.js";import"./Info-Ol3Oms6R.js";const _={title:"Data Display/Message",component:t,argTypes:{type:{options:Object.values(n),control:{type:"inline-radio"}},onClose:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onClose",undefined:"Does not have onClose"}}}},render:({hasActions:r,onClose:h,title:i,description:a,type:g})=>e.jsxs(t,{...h&&{onClose:()=>console.log("closed")},type:g,children:[i?e.jsx(t.Title,{children:i}):null,a?e.jsx(t.Description,{children:a}):null,r?e.jsx(t.Action,{children:e.jsx(y,{href:"#",textSize:x.Small,children:"View action"})}):null]})},s={args:{type:n.Error,hasActions:!0,title:"This is a title",description:"Some important information will appear here.",onClose:!0}},o={args:{type:n.Info},render:({type:r})=>e.jsx(t,{style:{alignItems:"center"},type:r,children:e.jsx("p",{children:"This is a custom and non-dismissable content"})})};var p,l,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: OMessageType.Error,
    hasActions: true,
    title: 'This is a title',
    description: 'Some important information will appear here.',
    onClose: ((true as unknown) as MessageStory['onClose'])
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const H=["Default","WithCustomContent"];export{s as Default,o as WithCustomContent,H as __namedExportsOrder,_ as default};
