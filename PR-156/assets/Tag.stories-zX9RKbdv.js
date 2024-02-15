import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{T as r}from"./Tag-t4dOy4wM.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Close-fCiS4iy8.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./extends-E30VzY7q.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";const d={Solid:"solid",Outlined:"outlined"},c={Rounded:"rounded",Squared:"squared"},p={Primary:"primary",Blue:"blue",Grey:"grey",Green:"green",Red:"red",Yellow:"yellow",Purple:"purple"},v={component:r,title:"Data Display/Tag",argTypes:{onClick:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onClick",undefined:"Does not have onClick"}}},onClose:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onClose",undefined:"Does not have onClose"}}},variant:{options:d,control:{type:"radio"}},border:{options:c,control:{type:"radio"}},color:{options:p,control:{type:"select"}}},render:({onClick:a,onClose:i,...e})=>t.jsx(r,{...e,...a&&{onClick:()=>console.log("clicked")},...i&&{onClose:()=>console.log("closed")},children:e.children})},o={args:{children:"tag label",variant:"solid",size:"small",color:"primary",border:"squared",isClickable:!1,isDisabled:!1,onClick:void 0,onClose:void 0}};var n,l,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'tag label',
    variant: 'solid',
    size: 'small',
    color: 'primary',
    border: 'squared',
    isClickable: false,
    isDisabled: false,
    onClick: undefined,
    onClose: undefined
  }
}`,...(s=(l=o.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const D=["Default"];export{o as Default,D as __namedExportsOrder,v as default};
