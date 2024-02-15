import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{A as c,a as t,b as n}from"./Accordion-J2iFL54G.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./extends-E30VzY7q.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";const f={title:"Data Display/Accordion",component:c,argTypes:{size:{mapping:t,options:Object.values(t).filter(e=>typeof e=="string"),control:{type:"inline-radio"}},backgroundColor:{mapping:n,options:Object.values(n).filter(e=>typeof e=="string"),control:{type:"inline-radio"}}}},o=({...e})=>{const d=r.jsx(r.Fragment,{children:"Header content here."});return r.jsx(c,{...e,headerContent:d,children:"Body content here."})};o.args={isOpen:!1,size:t.Large,backgroundColor:n.White,showIcon:!0,isDisabled:!1,headerContent:r.jsx(r.Fragment,{children:"Header content here."})};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`({
  ...props
}: AccordionBaseProps) => {
  const headerCustomContent = <>Header content here.</>;
  return <Accordion {...props} headerContent={headerCustomContent}>
      Body content here.
    </Accordion>;
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const A=["Default"];export{o as Default,A as __namedExportsOrder,f as default};
