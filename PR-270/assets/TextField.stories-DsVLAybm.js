import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as r}from"./Icon-DOElHRRq.js";import{T as i}from"./TextField-Cq1FtHT5.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-styled.browser.esm-B1le5_Hy.js";import"./extends-DJVMZnyl.js";import"./index-DMRWov4L.js";import"./Box.styled-TgnH4Hzf.js";import"./LabelField-Cy5ugnCm.js";import"./Typography-DvHa2txy.js";import"./index-CJ73Y9Wi.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./TextField.styled-Ajer_JVe.js";const s={Text:"text",Date:"date",DatetimeLocal:"datetime-local",Email:"email",Month:"month",Number:"number",Password:"password",Search:"search",Tel:"tel",Time:"time",Url:"url",Week:"week"},c={component:e.jsx(r,{code:"home_work",size:"large"})},p={component:e.jsx(r,{code:"home_work",size:"large"})},z={component:i,title:"Data Display/TextField",argTypes:{onChange:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onChange",undefined:"Does not have onChange"}}},maxLength:{control:{type:"number",min:1}},extras:{options:["suffix","prefix","both","none"],control:{type:"select"}},type:{options:s,control:{type:"select"}},variant:{options:{outlined:"outlined",bottomLine:"bottomLine"},control:{type:"select"}}},render:({onChange:n,extras:l,...T})=>e.jsx(i,{...T,...n&&{onChange:F=>console.log("data changed: ",F)},...l==="prefix"&&{extraPrefix:c},...l==="suffix"&&{extraSuffix:p},...l==="both"&&{extraSuffix:p,extraPrefix:c}})},o={args:{type:s.Text,name:"field-name",label:"My label",message:"Additional info",initialValue:"",maxLength:void 0,required:!0,requiredMessage:"",onChange:void 0,hasError:!1,disabled:!1,isFloatingLabel:!0,readOnly:!1,placeholder:"My field placeholder",variant:"outlined",extras:"none"}},t={args:{type:s.Search,isFloatingLabel:!1,name:"search",label:"Search",extraSuffix:{onClick:()=>console.log("search"),component:e.jsx(r,{code:"search"})},onResetInput:()=>console.log("reset")}},a={args:{type:s.Text,isFloatingLabel:!1,name:"chat-box",label:"Write your sentence",extraSuffix:{onClick:()=>console.log("chat"),component:e.jsx(r,{code:"send"})},onKeyDown:n=>{n.code==="Enter"&&console.log("ev",n)}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
    extras: 'none'
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,h,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: TextFieldTypeOptions.Search,
    isFloatingLabel: false,
    name: 'search',
    label: 'Search',
    extraSuffix: {
      onClick: () => console.log('search'),
      component: <Icon code='search' />
    },
    onResetInput: () => console.log('reset')
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,y,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: TextFieldTypeOptions.Text,
    isFloatingLabel: false,
    name: 'chat-box',
    label: 'Write your sentence',
    extraSuffix: {
      onClick: () => console.log('chat'),
      component: <Icon code='send' />
    },
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.code === 'Enter') {
        console.log('ev', event);
      }
    }
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const A=["Default","SearchField","ChatInputField"];export{a as ChatInputField,o as Default,t as SearchField,A as __namedExportsOrder,z as default};
