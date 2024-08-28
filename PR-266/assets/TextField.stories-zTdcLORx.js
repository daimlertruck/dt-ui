import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as t}from"./Icon-DOElHRRq.js";import{T as a}from"./TextField-DZnW7J9Q.js";import"./TextField.styled-D7RLo66B.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-styled.browser.esm-B1le5_Hy.js";import"./extends-DJVMZnyl.js";import"./index-DMRWov4L.js";import"./Box.styled-TgnH4Hzf.js";import"./LabelField-Cy5ugnCm.js";import"./Typography-DvHa2txy.js";import"./index-CJ73Y9Wi.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";const l={Text:"text",Date:"date",DatetimeLocal:"datetime-local",Email:"email",Month:"month",Number:"number",Password:"password",Search:"search",Tel:"tel",Time:"time",Url:"url",Week:"week"},c=r=>{switch(r){case"prefix":return{extraPrefix:e.jsx(t,{code:"home_work"})};case"suffix":return{extraSuffix:e.jsx(t,{code:"home_work"})};case"both":return{extraPrefix:e.jsx(t,{code:"home_work"}),extraSuffix:e.jsx(t,{code:"home_work"})};default:return{}}},F={component:a,title:"Data Display/TextField",argTypes:{onChange:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onChange",undefined:"Does not have onChange"}}},maxLength:{control:{type:"number",min:1}},extras:{options:["suffix","prefix","both","none"],control:{type:"select"}},type:{options:l,control:{type:"select"}},variant:{options:{outlined:"outlined",bottomLine:"bottomLine"},control:{type:"select"}}},render:({onChange:r,extras:d,...m})=>e.jsx(a,{...m,...r&&{onChange:p=>console.log("data changed: ",p)},...c(d)})},o={args:{type:l.Text,name:"field-name",label:"My label",message:"Additional info",initialValue:"",maxLength:void 0,required:!0,requiredMessage:"",onChange:void 0,hasError:!1,disabled:!1,isFloatingLabel:!0,readOnly:!1,placeholder:"My field placeholder",variant:"outlined",extras:"none"}};var n,i,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const _=["Default"];export{o as Default,_ as __namedExportsOrder,F as default};
