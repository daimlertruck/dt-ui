import{j as e}from"./jsx-runtime-CKrituN3.js";import{S as a,a as t}from"./Step-DRY0g9ZC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-styled.browser.esm-DhD7UCCJ.js";import"./extends-DJVMZnyl.js";import"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import"./Typography-IFB7dyWN.js";import"./index-BpxOyJIn.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./Counter-BH71OkUS.js";const k={title:"Data Display/Stepper",component:a},m=({currentStep:c,orientation:S,options:r,completed:d})=>e.jsxs(a,{orientation:S,children:[r.map((o,i)=>e.jsxs(t,{isActive:c===i+1,isCompleted:d.includes(i+1),children:[e.jsx(t.Counter,{children:i+1}),e.jsx(t.Label,{children:o})]},o)),e.jsxs(t,{isDisabled:!0,children:[e.jsx(t.Counter,{children:r.length+1}),e.jsx(t.Label,{children:"Disabled"})]},r.length),e.jsxs(t,{isError:!0,children:[e.jsx(t.Counter,{children:r.length+2}),e.jsx(t.Label,{children:"Error"})]},r.length+1),e.jsxs(t,{isActive:!0,isError:!0,children:[e.jsx(t.Counter,{children:r.length+3}),e.jsx(t.Label,{children:"Active Error"})]},r.length+2)]}),n=m.bind({});n.args={currentStep:1,completed:[],orientation:"vertical",options:["API version definition","Specifications","Review"]};var p,s,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`({
  currentStep,
  orientation,
  options,
  completed
}) => <Stepper orientation={orientation}>
    {options.map((opt, idx) => <Step isActive={currentStep === idx + 1} isCompleted={completed.includes(idx + 1)} key={opt}>
        <Step.Counter>{idx + 1}</Step.Counter>
        <Step.Label>{opt}</Step.Label>
      </Step>)}
    <Step isDisabled key={options.length}>
      <Step.Counter>{options.length + 1}</Step.Counter>
      <Step.Label>Disabled</Step.Label>
    </Step>
    <Step isError key={options.length + 1}>
      <Step.Counter>{options.length + 2}</Step.Counter>
      <Step.Label>Error</Step.Label>
    </Step>
    <Step isActive isError key={options.length + 2}>
      <Step.Counter>{options.length + 3}</Step.Counter>
      <Step.Label>Active Error</Step.Label>
    </Step>
  </Stepper>`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const _=["Default"];export{n as Default,_ as __namedExportsOrder,k as default};
