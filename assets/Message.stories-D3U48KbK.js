import{j as e}from"./jsx-runtime-DMAvRu52.js";import{L as y}from"./Link-BAwbb2Kd.js";import{M as s,O as r}from"./Message-CBJPt2HB.js";import"./index-Dl6G-zuu.js";import"./Icon-B8gBCtaI.js";import"./emotion-styled.browser.esm-DpDeK1WQ.js";import"./Typography-BgEQrNeh.js";import"./index-CgAoLCk8.js";import"./index-DCrStp1_.js";import"./index-BAMY2Nnw.js";import"./iframe-CBmGFBi9.js";import"./Close-mVzWqPf0.js";import"./Info-BRKcLzcc.js";const v={title:"Data Display/Message",component:s,argTypes:{type:{options:Object.values(r),control:{type:"inline-radio"}},onClose:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onClose",undefined:"Does not have onClose"}}}},render:({hasActions:n,onClose:h,title:a,description:i,type:g})=>e.jsxs(s,{...h&&{onClose:()=>console.log("closed")},type:g,children:[a?e.jsx(s.Title,{children:a}):null,i?e.jsx(s.Description,{children:i}):null,n?e.jsx(s.Action,{children:e.jsx(y,{href:"#",textSize:"small",children:"View action"})}):null]})},t={args:{type:r.Error,hasActions:!0,title:"This is a title",description:"Some important information will appear here.",onClose:!0}},o={args:{type:r.Info},render:({type:n})=>e.jsx(s,{style:{alignItems:"center"},type:n,children:e.jsx("p",{children:"This is a custom and non-dismissable content"})})};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: OMessageType.Error,
    hasActions: true,
    title: 'This is a title',
    description: 'Some important information will appear here.',
    onClose: true as unknown as MessageStory['onClose']
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const A=["Default","WithCustomContent"];export{t as Default,o as WithCustomContent,A as __namedExportsOrder,v as default};
