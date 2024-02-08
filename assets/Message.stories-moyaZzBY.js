import{j as s}from"./jsx-runtime-vNq4Oc-g.js";import{L as y,a as f}from"./Link-h5OL-K5T.js";import{M as e,O as a}from"./Message-W7nVx5f6.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./Button.styled-fGz7p1PP.js";import"./Typography-hl8z6s4j.js";import"./typography-TwTgPMES.js";import"./index-lb1Yyg-x.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./Close-fCiS4iy8.js";import"./Error-bZYIneX_.js";import"./Info-eLlTCXLO.js";const v={title:"Data Display/Message",component:e,argTypes:{type:{options:Object.values(a),control:{type:"inline-radio"}}},render:({hasActions:r,isDismissable:o,title:n,description:p,type:g})=>s.jsxs(e,{isDismissable:o,type:g,children:[n?s.jsx(e.Title,{children:n}):null,p?s.jsx(e.Description,{children:p}):null,r?s.jsx(e.Action,{children:s.jsx(y,{href:"#",textSize:f.Small,children:"View action"})}):null]})},i={args:{isDismissable:!0,hasActions:!0,title:"This is a title",description:"Some important information will appear here.",type:a.Error}},t={args:{type:a.Info,isDismissable:!1},render:({type:r,isDismissable:o})=>s.jsx(e,{isDismissable:o,type:r,children:s.jsx("p",{children:"This is a custom and non-dismissable content"})})};var m,l,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const R=["Default","WithCustomContent"];export{i as Default,t as WithCustomContent,R as __namedExportsOrder,v as default};
