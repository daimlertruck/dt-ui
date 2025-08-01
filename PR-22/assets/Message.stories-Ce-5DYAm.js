import{j as e}from"./jsx-runtime-CB_V9I5Y.js";import{L as y}from"./constants-B-8Kuy0B.js";import{M as s,O as r}from"./Message-Cs0xpRH0.js";import"./index-CTjT7uj6.js";import"./Icon-XPmSDfR_.js";import"./emotion-styled.browser.esm-DuL_gwYN.js";import"./Typography-BnMs8lqk.js";import"./index-DdhpKyCy.js";import"./index-B_xFk7rk.js";import"./index-BAMY2Nnw.js";import"./iframe-CjDyAopK.js";import"./Close-BgpoXZkN.js";import"./Info-CbG8KzIT.js";const v={title:"Data Display/Message",component:s,argTypes:{type:{options:Object.values(r),control:{type:"inline-radio"}},onClose:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onClose",undefined:"Does not have onClose"}}}},render:({hasActions:n,onClose:h,title:a,description:i,type:g})=>e.jsxs(s,{...h&&{onClose:()=>console.log("closed")},type:g,children:[a?e.jsx(s.Title,{children:a}):null,i?e.jsx(s.Description,{children:i}):null,n?e.jsx(s.Action,{children:e.jsx(y,{href:"#",textSize:"small",children:"View action"})}):null]})},t={args:{type:r.Error,hasActions:!0,title:"This is a title",description:"Some important information will appear here.",onClose:!0}},o={args:{type:r.Info},render:({type:n})=>e.jsx(s,{style:{alignItems:"center"},type:n,children:e.jsx("p",{children:"This is a custom and non-dismissable content"})})};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
