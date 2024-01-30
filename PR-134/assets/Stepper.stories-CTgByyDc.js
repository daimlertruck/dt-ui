import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{S as m,a as t}from"./Stepper.styled-g35FiRk2.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-lb1Yyg-x.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./Counter-JHYS3iRD.js";import"./Typography-WNFydnn9.js";import"./TooltipProvider-_0wtW8eX.js";const S=({children:i,dataTestId:o,orientation:r="vertical"})=>{const p=o??"default";return e.jsx(m,{"data-testid":`${p}-stepper`,orientation:r,children:i})},_={title:"Data Display/Stepper",component:S},u=({currentStep:i,orientation:o,options:r,completed:p})=>e.jsxs(S,{orientation:o,children:[r.map((l,s)=>e.jsxs(t,{isActive:i===s+1,isCompleted:p.includes(s+1),children:[e.jsx(t.Counter,{children:s+1}),e.jsx(t.Label,{children:l})]},l)),e.jsxs(t,{isDisabled:!0,children:[e.jsx(t.Counter,{children:r.length+1}),e.jsx(t.Label,{children:"Disabled"})]},r.length),e.jsxs(t,{isError:!0,children:[e.jsx(t.Counter,{children:r.length+2}),e.jsx(t.Label,{children:"Error"})]},r.length+1),e.jsxs(t,{isActive:!0,isError:!0,children:[e.jsx(t.Counter,{children:r.length+3}),e.jsx(t.Label,{children:"Active Error"})]},r.length+2)]}),n=u.bind({});n.args={currentStep:1,completed:[],orientation:"vertical",options:["API version definition","Specifications","Review"]};var a,c,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`({
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
  </Stepper>`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const I=["Default"];export{n as Default,I as __namedExportsOrder,_ as default};
