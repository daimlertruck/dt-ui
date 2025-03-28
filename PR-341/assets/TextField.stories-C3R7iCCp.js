import{j as n}from"./jsx-runtime-CKrituN3.js";import{I as r}from"./Icon-DOElHRRq.js";import{T as i}from"./TextField-CYsC34t4.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-styled.browser.esm-B1le5_Hy.js";import"./extends-DJVMZnyl.js";import"./LabelField-CBVdO7jF.js";import"./Typography-ABVy4bD4.js";import"./index-y-ta-bzz.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./TextField.styled-BmA2lcsJ.js";const l={Text:"text",Date:"date",DatetimeLocal:"datetime-local",Email:"email",Month:"month",Number:"number",Password:"password",Search:"search",Tel:"tel",Time:"time",Url:"url",Week:"week"},c={component:n.jsx(r,{code:"home_work",size:"large"})},d={component:n.jsx(r,{code:"home_work",size:"large"})},K={component:i,title:"Data Display/TextField",argTypes:{onChange:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onChange",undefined:"Does not have onChange"}}},maxLength:{control:{type:"number",min:1}},extras:{options:["suffix","prefix","both","none"],control:{type:"select"}},type:{options:l,control:{type:"select"}},variant:{options:{outlined:"outlined",bottomLine:"bottomLine"},control:{type:"select"}},backgroundFill:{options:{default:"default",contrast:"contrast",light:"light"},control:{type:"select"}}},render:({onChange:e,extras:s,...T})=>n.jsx(i,{...T,...e&&{onChange:F=>console.log("data changed: ",F)},...s==="prefix"&&{extraPrefix:c},...s==="suffix"&&{extraSuffix:d},...s==="both"&&{extraSuffix:d,extraPrefix:c}})},o={args:{type:l.Text,name:"field-name",label:"My label",message:"Additional info",initialValue:"",maxLength:void 0,required:!0,requiredMessage:"",onChange:void 0,hasError:!1,disabled:!1,isFloatingLabel:!0,readOnly:!1,placeholder:"My field placeholder",variant:"outlined",backgroundFill:"default",extras:"none"}},t={args:{type:l.Search,isFloatingLabel:!1,name:"search",label:"Search",extraSuffix:{onClick:e=>console.log("search",e),component:n.jsx(r,{code:"search"})},onResetInput:()=>console.log("reset")}},a={args:{type:l.Text,isFloatingLabel:!1,name:"chat-box",label:"Write your sentence",extraSuffix:{onClick:e=>console.log("chat",e),component:n.jsx(r,{code:"send"})},onKeyDown:e=>{e.code==="Enter"&&console.log("ev",e)}}};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: TextFieldTypeOptions.Text,
    name: 'field-name',
    label: 'My label',
    message: 'Additional info',
    initialValue: '',
    maxLength: undefined,
    required: true,
    requiredMessage: '',
    onChange: undefined,
    hasError: false,
    disabled: false,
    isFloatingLabel: true,
    readOnly: false,
    placeholder: 'My field placeholder',
    variant: 'outlined',
    backgroundFill: 'default',
    extras: 'none'
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,g,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: TextFieldTypeOptions.Search,
    isFloatingLabel: false,
    name: 'search',
    label: 'Search',
    extraSuffix: {
      onClick: (text: string) => console.log('search', text),
      component: <Icon code='search' />
    },
    onResetInput: () => console.log('reset')
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,b,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: TextFieldTypeOptions.Text,
    isFloatingLabel: false,
    name: 'chat-box',
    label: 'Write your sentence',
    extraSuffix: {
      onClick: (text: string) => console.log('chat', text),
      component: <Icon code='send' />
    },
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.code === 'Enter') {
        console.log('ev', event);
      }
    }
  }
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const W=["Default","SearchField","ChatInputField"];export{a as ChatInputField,o as Default,t as SearchField,W as __namedExportsOrder,K as default};
