import{j as e}from"./jsx-runtime-CKrituN3.js";import{D as t}from"./Dropdown-3e0ig4VH.js";import"./Typography-C3Apdm1M.js";import"./Icon-DOElHRRq.js";import"./index-CBqU2yxZ.js";import"./index-bKUcOz2Q.js";import"./index-BtM5VmRH.js";import"./emotion-styled.browser.esm-B1le5_Hy.js";import"./extends-DJVMZnyl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./z-index-Ds5QkyqS.js";import"./useClickOutside-D7JrBqcS.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";const d=[{text:"Option 1",value:"1"},{text:"Option 2",value:"2"},{text:"Option 3 with a large text message label",value:"3"},{text:"Option 4",value:"4"}],S={title:"Data Display/Dropdown",component:t,argTypes:{variant:{options:{outlined:"outlined",bottomLine:"bottomLine"},control:{type:"select"}},backgroundFill:{options:{default:"default",contrast:"contrast",light:"light"},control:{type:"select"}}},render:({options:n,defaultValue:p,...o})=>e.jsx("div",{style:{height:"300px",padding:"10px",backgroundColor:"#EBECED"},children:e.jsx(t,{defaultValue:p,children:e.jsxs(t.Container,{children:[e.jsx(t.Select,{label:"Label",...o,children:n.map(a=>e.jsx(t.Option,{option:a,...o,children:a.text??a.value},a.value))}),e.jsx(t.Detail,{...o})]})})})},r={args:{options:d,isDisabled:!1,hasBorder:!0,hasError:!1,hasDeselect:!1,message:"",variant:"outlined",backgroundFill:"default"}};var s,l,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    options: OPTIONS,
    isDisabled: false,
    hasBorder: true,
    hasError: false,
    hasDeselect: false,
    message: '',
    variant: 'outlined',
    backgroundFill: 'default'
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const w=["Default"];export{r as Default,w as __namedExportsOrder,S as default};
