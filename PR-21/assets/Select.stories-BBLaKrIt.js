import{j as t}from"./jsx-runtime-DMAvRu52.js";import{S as a}from"./Select-D5NVv4MH.js";import"./index-Dl6G-zuu.js";import"./index-PAhfFTcf.js";import"./index-DCrStp1_.js";import"./emotion-styled.browser.esm-DpDeK1WQ.js";import"./index-BAMY2Nnw.js";import"./iframe-BsME3wdD.js";import"./useClickOutside-CBJSS0tk.js";import"./Icon-DJuXZjHV.js";import"./IconButton-k4gaNOO5.js";import"./LabelField-CPVeVVru.js";import"./Typography-DhFRVGr8.js";import"./Tooltip-DEtGbM7U.js";import"./Portal-DcNaNmD6.js";import"./z-index-Ds5QkyqS.js";import"./Checkbox-CiDyrDff.js";const d=[{value:"opt1",label:"Option 1",disabled:!1},{value:"opt2",label:"Option 2",disabled:!1},{value:"opt3",label:"A text message to see how big labels will be handled",disabled:!1},{value:"opt4",label:"Option 3",disabled:!0},{value:"opt5",label:"Option 4",disabled:!1}],R={title:"Data Display/Select",component:a,argTypes:{helperText:{control:"text"},variant:{options:["outlined","bottom-line"],control:{type:"select"}},fill:{options:["default","contrast","light"],control:{type:"select"}}},render:({options:r,...p})=>t.jsx("div",{style:{height:"500px",padding:"10px"},children:t.jsx(a,{...p,children:r.map((e,n)=>t.jsx(a.Option,{disabled:e.disabled,index:n,label:e.label,value:e.value},e.value))})})},l={args:{options:d,label:"My label",helperText:"",errorMessage:"",isMulti:!1,isRequired:!1,hasError:!1,isDisabled:!1,initialValue:""}};var o,s,i;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    options: options,
    label: 'My label',
    helperText: '',
    errorMessage: '',
    isMulti: false,
    isRequired: false,
    hasError: false,
    isDisabled: false,
    initialValue: ''
  }
}`,...(i=(s=l.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const q=["Default"];export{l as Default,q as __namedExportsOrder,R as default};
