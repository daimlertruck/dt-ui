import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{L as g,a as h}from"./Link-h5OL-K5T.js";import{M as s,a as o}from"./Message-C2R96EXG.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./Button.styled-fGz7p1PP.js";import"./index-lb1Yyg-x.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./Close-fCiS4iy8.js";import"./Error-bZYIneX_.js";import"./Info-eLlTCXLO.js";import"./Typography-hl8z6s4j.js";import"./typography-TwTgPMES.js";const v={title:"Data Display/Message",component:s,argTypes:{type:{options:Object.values(o),control:{type:"inline-radio"}}}},x=({title:n,description:r,type:u})=>e.jsxs(s,{type:u,children:[e.jsx(s.Title,{children:n}),e.jsx(s.Description,{children:r}),e.jsx(s.Action,{children:e.jsx(g,{href:"#",textSize:h.Small,children:"View action"})})]}),t=x.bind({});t.args={title:"This is a title",description:"Some important information will appear here.",type:o.Error};const M=({type:n,isDismissable:r})=>e.jsx(s,{isDismissable:r,type:n,children:e.jsx("p",{children:"This is a custom and non-dismissable content"})}),i=M.bind({});i.args={type:o.Info,isDismissable:!1};var a,p,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`({
  title,
  description,
  type
}) => {
  return <Message type={type}>
      <Message.Title>{title}</Message.Title>
      <Message.Description>{description}</Message.Description>
      <Message.Action>
        <Link href='#' textSize={LinkTextSize.Small}>
          View action
        </Link>
      </Message.Action>
    </Message>;
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,l,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`({
  type,
  isDismissable
}) => {
  return <Message isDismissable={isDismissable} type={type}>
      <p>This is a custom and non-dismissable content</p>
    </Message>;
}`,...(d=(l=i.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const I=["Default","WithCustomContent"];export{t as Default,i as WithCustomContent,I as __namedExportsOrder,v as default};
