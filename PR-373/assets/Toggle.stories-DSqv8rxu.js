import{j as e}from"./jsx-runtime-DMAvRu52.js";import{r as f}from"./index-Dl6G-zuu.js";import{T as h,a as k,b as u}from"./Toggle.styled-DyHGKX9I.js";import"./emotion-styled.browser.esm-DpDeK1WQ.js";const g=({dataTestId:s,label:a,isDisabled:t=!1,isChecked:r=!1,onClick:l})=>{const c=s??"toggle",p=`${c}-checkbox-id`,m=x=>{t||l(x)};return e.jsxs(h,{"data-testid":c,onClick:m,children:[e.jsx(k,{checked:r,disabled:t,id:p,type:"checkbox"}),e.jsx(u,{}),e.jsx("span",{children:a})]})},T=s=>{const[a,t]=f.useState(!1),r=()=>{t(l=>!l)};return e.jsx(g,{...s,isChecked:a,onClick:r})},S={title:"Data Display/Toggle",component:g,argTypes:{},render:({...s})=>e.jsx(T,{...s})},o={args:{isDisabled:!1,label:"Toggle"}};var n,d,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    isDisabled: false,
    label: 'Toggle'
  }
}`,...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const D=["Default"];export{o as Default,D as __namedExportsOrder,S as default};
