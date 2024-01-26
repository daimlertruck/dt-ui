import{j as e}from"./jsx-runtime-CbCNBOXy.js";import{S as m,a as t}from"./Stepper.styled-X6xKMqjb.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-qqeelA58.js";import"./emotion-react.browser.esm-jJwm7MoD.js";import"./emotion-element-c39617d8.browser.esm-HJoeL-IU.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-HrY-sHGj.js";import"./Counter-xik0ZggA.js";import"./emotion-styled.browser.esm-MfHNkeEy.js";import"./Typography-ZNxoi-hx.js";import"./index-PWMXJtKE.js";import"./TooltipProvider--5O1-WdZ.js";const S=({children:i,dataTestId:o,orientation:r="vertical"})=>{const p=o??"default";return e.jsx(m,{"data-testid":`${p}-stepper`,orientation:r,children:i})},R={title:"Data Display/Stepper",component:S},u=({currentStep:i,orientation:o,options:r,completed:p})=>e.jsxs(S,{orientation:o,children:[r.map((l,s)=>e.jsxs(t,{isActive:i===s+1,isCompleted:p.includes(s+1),children:[e.jsx(t.Counter,{children:s+1}),e.jsx(t.Label,{children:l})]},l)),e.jsxs(t,{isDisabled:!0,children:[e.jsx(t.Counter,{children:r.length+1}),e.jsx(t.Label,{children:"Disabled"})]},r.length),e.jsxs(t,{isError:!0,children:[e.jsx(t.Counter,{children:r.length+2}),e.jsx(t.Label,{children:"Error"})]},r.length+1),e.jsxs(t,{isActive:!0,isError:!0,children:[e.jsx(t.Counter,{children:r.length+3}),e.jsx(t.Label,{children:"Active Error"})]},r.length+2)]}),n=u.bind({});n.args={currentStep:1,completed:[],orientation:"vertical",options:["API version definition","Specifications","Review"]};var a,c,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`({
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
  </Stepper>`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const w=["Default"];export{n as Default,w as __namedExportsOrder,R as default};
