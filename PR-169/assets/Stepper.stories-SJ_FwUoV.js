import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{S as a,a as t}from"./Step-p6-_BnFr.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./Counter-aYlenIO8.js";import"./Typography-hG7SbwPH.js";import"./MultiSelectProvider-vrdgqO57.js";const v={title:"Data Display/Stepper",component:a},u=({currentStep:c,orientation:S,options:r,completed:d})=>e.jsxs(a,{orientation:S,children:[r.map((o,i)=>e.jsxs(t,{isActive:c===i+1,isCompleted:d.includes(i+1),children:[e.jsx(t.Counter,{children:i+1}),e.jsx(t.Label,{children:o})]},o)),e.jsxs(t,{isDisabled:!0,children:[e.jsx(t.Counter,{children:r.length+1}),e.jsx(t.Label,{children:"Disabled"})]},r.length),e.jsxs(t,{isError:!0,children:[e.jsx(t.Counter,{children:r.length+2}),e.jsx(t.Label,{children:"Error"})]},r.length+1),e.jsxs(t,{isActive:!0,isError:!0,children:[e.jsx(t.Counter,{children:r.length+3}),e.jsx(t.Label,{children:"Active Error"})]},r.length+2)]}),n=u.bind({});n.args={currentStep:1,completed:[],orientation:"vertical",options:["API version definition","Specifications","Review"]};var p,s,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
  </Stepper>`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const D=["Default"];export{n as Default,D as __namedExportsOrder,v as default};
