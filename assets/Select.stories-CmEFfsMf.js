import{j as t}from"./jsx-runtime-DMAvRu52.js";import{S as a}from"./Select-BTOrWK-Y.js";import"./index-Dl6G-zuu.js";import"./index-Z8d7uwML.js";import"./index-DCrStp1_.js";import"./emotion-styled.browser.esm-DpDeK1WQ.js";import"./index-BAMY2Nnw.js";import"./iframe-Bw7HRo_f.js";import"./useClickOutside-CBJSS0tk.js";import"./Icon-B8gBCtaI.js";import"./LabelField-BAxP7tTr.js";import"./Typography-C1zOAkJP.js";import"./Tooltip-DjsoLxxP.js";import"./Portal-DcNaNmD6.js";import"./z-index-Ds5QkyqS.js";import"./Checkbox-DCu8g_Y2.js";const d=[{value:"opt1",label:"Option 1",disabled:!1},{value:"opt2",label:"Option 2",disabled:!1},{value:"opt3",label:"A text message to see how big labels will be handled",disabled:!1},{value:"opt4",label:"Option 3",disabled:!0},{value:"opt5",label:"Option 4",disabled:!1}],T={title:"Data Display/Select",component:a,argTypes:{helperText:{control:"text"},variant:{options:["outlined","bottom-line"],control:{type:"select"}},fill:{options:["default","contrast","light"],control:{type:"select"}}},render:({options:r,...p})=>t.jsx("div",{style:{height:"500px",padding:"10px"},children:t.jsx(a,{...p,children:r.map((e,n)=>t.jsx(a.Option,{disabled:e.disabled,index:n,label:e.label,value:e.value},e.value))})})},l={args:{options:d,label:"My label",helperText:"",errorMessage:"",isMulti:!1,isRequired:!1,hasError:!1,isDisabled:!1,initialValue:""}};var s,o,i;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(o=l.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const R=["Default"];export{l as Default,R as __namedExportsOrder,T as default};
