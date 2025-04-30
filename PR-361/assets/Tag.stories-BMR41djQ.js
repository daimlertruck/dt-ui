import{j as t}from"./jsx-runtime-DMAvRu52.js";import{T as r}from"./Tag-DarPqZ64.js";import"./index-Dl6G-zuu.js";import"./Close-mVzWqPf0.js";import"./emotion-styled.browser.esm-DpDeK1WQ.js";const d={Solid:"solid",Outlined:"outlined"},c={Rounded:"rounded",Squared:"squared"},p={Small:"small",Medium:"medium"},u={Primary:"primary",Blue:"blue",Grey:"grey",Green:"green",Red:"red",Yellow:"yellow",Purple:"purple"},b={component:r,title:"Data Display/Tag",argTypes:{onClick:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onClick",undefined:"Does not have onClick"}}},onClose:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onClose",undefined:"Does not have onClose"}}},variant:{options:d,control:{type:"radio"}},border:{options:c,control:{type:"radio"}},size:{options:p,control:{type:"radio"}},color:{options:u,control:{type:"select"}}},render:({onClick:a,onClose:i,...e})=>t.jsx(r,{...e,...a&&{onClick:()=>console.log("clicked")},...i&&{onClose:()=>console.log("closed")},children:e.children})},o={args:{children:"tag label",variant:"solid",size:"small",color:"primary",border:"squared",isClickable:!1,isDisabled:!1,onClick:void 0,onClose:void 0}};var l,n,s;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const k=["Default"];export{o as Default,k as __namedExportsOrder,b as default};
