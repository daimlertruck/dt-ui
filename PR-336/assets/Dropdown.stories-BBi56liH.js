import{j as t}from"./jsx-runtime-CKrituN3.js";import{D as e}from"./Dropdown-CCNKJ_ha.js";import"./Typography-D8tl62dX.js";import"./Box.styled-TgnH4Hzf.js";import"./Icon-DOElHRRq.js";import"./index-CBqU2yxZ.js";import"./index-DhoK5pdg.js";import"./index-BtM5VmRH.js";import"./emotion-styled.browser.esm-B1le5_Hy.js";import"./extends-DJVMZnyl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DMRWov4L.js";import"./z-index-Ds5QkyqS.js";import"./useClickOutside-D7JrBqcS.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";const m=[{text:"Option 1",value:"1"},{text:"Option 2",value:"2"},{text:"Option 3 with a large text message label",value:"3"},{text:"Option 4",value:"4"}],B={title:"Data Display/Dropdown",component:e,argTypes:{variant:{options:{outlined:"outlined","bottom-line":"bottom-line"},control:{type:"select"}},fill:{options:{default:"default",contrast:"contrast",light:"light"},control:{type:"select"}}},render:({options:n,defaultValue:p,...a})=>t.jsx("div",{style:{height:"300px"},children:t.jsx(e,{defaultValue:p,children:t.jsxs(e.Container,{children:[t.jsx(e.Select,{label:"Label",...a,children:n.map(r=>t.jsx(e.Option,{option:r,children:r.text??r.value},r.value))}),t.jsx(e.Detail,{...a})]})})})},o={args:{options:m,isDisabled:!1,hasBorder:!0,hasError:!1,message:"",variant:"outlined",fill:"default"}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    options: OPTIONS,
    isDisabled: false,
    hasBorder: true,
    hasError: false,
    message: '',
    variant: 'outlined',
    fill: 'default'
  }
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const I=["Default"];export{o as Default,I as __namedExportsOrder,B as default};
