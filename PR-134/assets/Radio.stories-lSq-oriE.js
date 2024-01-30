import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{B as b}from"./index-H1EXaXUo.js";import{r as n}from"./index-4g5l5LRQ.js";import{R as x,a as f,G as R}from"./Radio.styled-AkNb48xB.js";import"./Box.styled-oB9eueTz.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./_commonjsHelpers-4gQjN7DL.js";const D=({children:r,onChange:o,dataTestId:t,direction:s="row",name:l})=>{const d=n.useMemo(()=>n.Children.map(r,a=>a&&n.cloneElement(a,{...a.props,onChange:o,name:l})),[r,o,l]);return e.jsx(R,{"data-testid":t??"radio-group",direction:s,children:d})},p=({onChange:r,label:o,isDefaultChecked:t,isDisabled:s,name:l="radio-group-name",value:d})=>{const a=`${d}-id`;return e.jsxs(b,{style:{flexDirection:"row",gap:8,cursor:s?"default":"pointer"},children:[e.jsx(x,{defaultChecked:t,disabled:s,id:a,name:l,onChange:r,type:"radio",value:d}),e.jsx(f,{htmlFor:a,children:o})]})},k={title:"Data Display/Radio",component:p},j=({isDisabled:r,direction:o,label:t})=>e.jsxs(D,{direction:o,name:"radio-group",onChange:()=>null,children:[e.jsx(p,{isDisabled:r,label:"Label 1",value:"1"}),e.jsx(p,{isDefaultChecked:!0,label:t,value:"2"})]}),i=j.bind({});i.args={isDisabled:!1,direction:"row",label:"Label 2"};var u,c,m;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`({
  isDisabled,
  direction,
  label
}) => {
  return <RadioGroup direction={direction} name='radio-group' onChange={() => null}>
      <Radio isDisabled={isDisabled} label='Label 1' value='1' />
      <Radio isDefaultChecked label={label} value='2' />
    </RadioGroup>;
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const v=["Default"];export{i as Default,v as __namedExportsOrder,k as default};
