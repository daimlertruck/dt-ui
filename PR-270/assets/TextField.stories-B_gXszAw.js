import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as t}from"./Icon-DOElHRRq.js";import{T as i}from"./TextField-DhrAro5w.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-styled.browser.esm-B1le5_Hy.js";import"./extends-DJVMZnyl.js";import"./index-DMRWov4L.js";import"./Box.styled-TgnH4Hzf.js";import"./index-CJ73Y9Wi.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./debounce-BF4Cdv7I.js";import"./LabelField-Cy5ugnCm.js";import"./Typography-DvHa2txy.js";import"./TextField.styled-D7RLo66B.js";const n={Text:"text",Date:"date",DatetimeLocal:"datetime-local",Email:"email",Month:"month",Number:"number",Password:"password",Search:"search",Tel:"tel",Time:"time",Url:"url",Week:"week"},f=o=>{switch(o){case"prefix":return{extraPrefix:e.jsx(t,{code:"home_work"})};case"suffix":return{extraSuffix:e.jsx(t,{code:"home_work"})};case"both":return{extraPrefix:e.jsx(t,{code:"home_work"}),extraSuffix:e.jsx(t,{code:"home_work"})};default:return{}}},P={component:i,title:"Data Display/TextField",argTypes:{onChange:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onChange",undefined:"Does not have onChange"}}},maxLength:{control:{type:"number",min:1}},extras:{options:["suffix","prefix","both","none"],control:{type:"select"}},type:{options:n,control:{type:"select"}},variant:{options:{outlined:"outlined",bottomLine:"bottomLine"},control:{type:"select"}}},render:({onChange:o,extras:u,...h})=>e.jsx(i,{...h,...o&&{onChange:x=>console.log("data changed: ",x)},...f(u)})},r={args:{type:n.Text,name:"field-name",label:"My label",message:"Additional info",initialValue:"",maxLength:void 0,required:!0,requiredMessage:"",onChange:void 0,hasError:!1,disabled:!1,isFloatingLabel:!0,readOnly:!1,placeholder:"My field placeholder",variant:"outlined",extras:"none"}},a={args:{type:n.Text,name:"serach-field",label:"Search Field",onChange:()=>null,isSearchField:!0}};var s,l,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: TextFieldTypeOptions.Text,
    name: 'serach-field',
    label: 'Search Field',
    onChange: () => null,
    isSearchField: true
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const W=["Default","WithSreach"];export{r as Default,a as WithSreach,W as __namedExportsOrder,P as default};
