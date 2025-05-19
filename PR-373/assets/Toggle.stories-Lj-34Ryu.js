import{j as t}from"./jsx-runtime-DMAvRu52.js";import{r as h}from"./index-Dl6G-zuu.js";import{T as u,a as k,b as T}from"./Toggle.styled-coRAUClK.js";import"./emotion-styled.browser.esm-DpDeK1WQ.js";const p=({dataTestId:s,label:n,isDisabled:e=!1,isChecked:c=!1,onClick:r})=>{const l=s??"toggle",m=`${l}-checkbox-id`,x=o=>{e||r(o)},f=o=>{e||o.code==="Enter"&&(o.preventDefault(),r(o))};return t.jsxs(u,{"data-testid":l,onClick:x,onKeyDown:f,tabIndex:e?-1:0,children:[t.jsx(k,{checked:c,disabled:e,id:m,type:"checkbox"}),t.jsx(T,{}),t.jsx("span",{children:n})]})},j=s=>{const[n,e]=h.useState(!1),c=()=>{e(r=>!r)};return t.jsx(p,{...s,isChecked:n,onClick:c})},D={title:"Data Display/Toggle",component:p,argTypes:{},render:({...s})=>t.jsx(j,{...s})},a={args:{isDisabled:!1,label:"Toggle"}};var d,g,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isDisabled: false,
    label: 'Toggle'
  }
}`,...(i=(g=a.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};const E=["Default"];export{a as Default,E as __namedExportsOrder,D as default};
