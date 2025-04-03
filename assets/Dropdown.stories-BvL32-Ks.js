import{j as e}from"./jsx-runtime-CKrituN3.js";import{D as t}from"./Dropdown-CMJWAqI7.js";import"./Typography-D8tl62dX.js";import"./Box.styled-TgnH4Hzf.js";import"./Icon-DOElHRRq.js";import"./index-CBqU2yxZ.js";import"./index-DhoK5pdg.js";import"./index-BtM5VmRH.js";import"./emotion-styled.browser.esm-B1le5_Hy.js";import"./extends-DJVMZnyl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DMRWov4L.js";import"./z-index-Ds5QkyqS.js";import"./useClickOutside-D7JrBqcS.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";const d=[{text:"Option 1",value:"1"},{text:"Option 2",value:"2"},{text:"Option 3 with a large text message label",value:"3"},{text:"Option 4",value:"4"}],q={title:"Data Display/Dropdown",component:t,argTypes:{variant:{options:{outlined:"outlined","bottom-line":"bottom-line"},control:{type:"select"}},fill:{options:{default:"default",contrast:"contrast",light:"light"},control:{type:"select"}}},render:({options:p,defaultValue:m,message:o,...s})=>e.jsx("div",{style:{height:"300px"},children:e.jsx(t,{defaultValue:m,children:e.jsxs(t.Container,{children:[e.jsx(t.Select,{label:"Label",...s,children:p.map(r=>e.jsx(t.Option,{option:r,children:r.text??r.value},r.value))}),o?e.jsx(t.Detail,{...s,children:o}):null]})})})},a={args:{options:d,isDisabled:!1,hasBorder:!0,hasError:!1,isRequired:!1,hasDeselect:!1,message:"",variant:"outlined",fill:"default"}};var l,i,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    options: OPTIONS,
    isDisabled: false,
    hasBorder: true,
    hasError: false,
    isRequired: false,
    hasDeselect: false,
    message: '',
    variant: 'outlined',
    fill: 'default'
  }
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const B=["Default"];export{a as Default,B as __namedExportsOrder,q as default};
