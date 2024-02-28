import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{f as m,g as t}from"./Toaster-qQQeWMmC.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-QDCYB1ew.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./extends-E30VzY7q.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./emotion-react.browser.esm-OUs2k2GK.js";import"./Link-_Aovc20k.js";import"./IconButton-CybuRvMK.js";import"./Nav.styled-GsNCx_OC.js";import"./NavContainer.styled-U8vOQ75V.js";import"./DescriptionList-iMIY3Ofq.js";import"./ProfileInfo-W3kZ6w9g.js";import"./index-5j7WHYEJ.js";import"./index-jmm5gWkb.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-5tMk2lpP.js";import"./hexToRgba-fpzAFQCT.js";import"./z-index-Gl5ZkgZ3.js";import"./Header.styled-dSjoYgc7.js";import"./Tooltip-HGZMkqB_.js";import"./Avatar.styled-CUHg7m_f.js";import"./NavItem.styled-F-Ro6JRH.js";import"./Table-vPzD7-MQ.js";import"./LabelField-OWWqgjhK.js";import"./Footer.styled-ViVzqoaf.js";import"./Backdrop-W-F6eJUj.js";import"./Tag-Fq2qdiql.js";import"./Counter-LGyezUq9.js";import"./Breadcrumb-1_ppty26.js";import"./Tabs-tjTOCvAj.js";import"./Checkbox-AvcVMVeH.js";import"./Radio-lqTtrhen.js";import"./Divider-b2fMfDtF.js";import"./Icon.styled-XhfvdDtU.js";import"./Accordion-h2BS8qQ8.js";const $={title:"Data Display/Stepper",component:m},d=({currentStep:a,orientation:c,options:r,completed:S})=>e.jsxs(m,{orientation:c,children:[r.map((p,o)=>e.jsxs(t,{isActive:a===o+1,isCompleted:S.includes(o+1),children:[e.jsx(t.Counter,{children:o+1}),e.jsx(t.Label,{children:p})]},p)),e.jsxs(t,{isDisabled:!0,children:[e.jsx(t.Counter,{children:r.length+1}),e.jsx(t.Label,{children:"Disabled"})]},r.length),e.jsxs(t,{isError:!0,children:[e.jsx(t.Counter,{children:r.length+2}),e.jsx(t.Label,{children:"Error"})]},r.length+1),e.jsxs(t,{isActive:!0,isError:!0,children:[e.jsx(t.Counter,{children:r.length+3}),e.jsx(t.Label,{children:"Active Error"})]},r.length+2)]}),i=d.bind({});i.args={currentStep:1,completed:[],orientation:"vertical",options:["API version definition","Specifications","Review"]};var n,s,l;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
  </Stepper>`,...(l=(s=i.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const ee=["Default"];export{i as Default,ee as __namedExportsOrder,$ as default};
