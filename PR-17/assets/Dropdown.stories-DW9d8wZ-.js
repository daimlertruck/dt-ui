import{j as e}from"./jsx-runtime-DMAvRu52.js";import{D as t}from"./Dropdown-OmT0MNeV.js";import"./Typography-DGF3aCS1.js";import"./index-LNaMzCj1.js";import"./Icon-D93abFDa.js";import"./IconButton-k4gaNOO5.js";import"./index-Dl6G-zuu.js";import"./index-Qm_yRYDH.js";import"./index-DCrStp1_.js";import"./emotion-styled.browser.esm-DpDeK1WQ.js";import"./z-index-Ds5QkyqS.js";import"./useClickOutside-CBJSS0tk.js";import"./index-BAMY2Nnw.js";import"./iframe-CGh7h3dv.js";const m=[{text:"Option 1",value:"1"},{text:"Option 2",value:"2"},{text:"Option 3 with a large text message label",value:"3"},{text:"Option 4",value:"4"}],w={title:"Data Display/Dropdown",component:t,argTypes:{variant:{options:{outlined:"outlined","bottom-line":"bottom-line"},control:{type:"select"}},fill:{options:{default:"default",contrast:"contrast",light:"light"},control:{type:"select"}}},render:({options:p,defaultValue:d,message:s,...l})=>e.jsx("div",{style:{height:"300px"},children:e.jsx(t,{defaultValue:d,children:e.jsxs(t.Container,{children:[e.jsx(t.Select,{label:"Label",...l,children:p.map(r=>e.jsx(t.Option,{option:r,children:r.text??r.value},r.value))}),s?e.jsx(t.Detail,{...l,children:s}):null]})})})},a={args:{options:m,isDisabled:!1,hasBorder:!0,hasError:!1,isRequired:!1,hasDeselect:!1,message:"",variant:"outlined",fill:"default"}};var o,i,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const R=["Default"];export{a as Default,R as __namedExportsOrder,w as default};
