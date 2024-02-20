import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{T as r}from"./Tag-okJQ4zFc.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Close-fCiS4iy8.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";const d={Solid:"solid",Outlined:"outlined"},c={Rounded:"rounded",Squared:"squared"},p={Small:"small",Medium:"medium"},u={Primary:"primary",Blue:"blue",Grey:"grey",Green:"green",Red:"red",Yellow:"yellow",Purple:"purple"},v={component:r,title:"Data Display/Tag",argTypes:{onClick:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onClick",undefined:"Does not have onClick"}}},onClose:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onClose",undefined:"Does not have onClose"}}},variant:{options:d,control:{type:"radio"}},border:{options:c,control:{type:"radio"}},size:{options:p,control:{type:"radio"}},color:{options:u,control:{type:"select"}}},render:({onClick:s,onClose:a,...e})=>t.jsx(r,{...e,...s&&{onClick:()=>console.log("clicked")},...a&&{onClose:()=>console.log("closed")},children:e.children})},o={args:{children:"tag label",variant:"solid",size:"small",color:"primary",border:"squared",isClickable:!1,isDisabled:!1,onClick:void 0,onClose:void 0}};var l,n,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const D=["Default"];export{o as Default,D as __namedExportsOrder,v as default};
