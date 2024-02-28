import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as h}from"./index-4g5l5LRQ.js";import{F as r,a as i,b as F}from"./Toaster-qQQeWMmC.js";import{T as l}from"./TextField-3YImIRqd.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-QDCYB1ew.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./extends-E30VzY7q.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./emotion-react.browser.esm-OUs2k2GK.js";import"./Link-_Aovc20k.js";import"./IconButton-CybuRvMK.js";import"./Nav.styled-GsNCx_OC.js";import"./NavContainer.styled-U8vOQ75V.js";import"./DescriptionList-iMIY3Ofq.js";import"./ProfileInfo-W3kZ6w9g.js";import"./index-5j7WHYEJ.js";import"./index-jmm5gWkb.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-5tMk2lpP.js";import"./hexToRgba-fpzAFQCT.js";import"./z-index-Gl5ZkgZ3.js";import"./Header.styled-dSjoYgc7.js";import"./Tooltip-HGZMkqB_.js";import"./Avatar.styled-CUHg7m_f.js";import"./NavItem.styled-F-Ro6JRH.js";import"./Table-vPzD7-MQ.js";import"./LabelField-OWWqgjhK.js";import"./Footer.styled-ViVzqoaf.js";import"./Backdrop-W-F6eJUj.js";import"./Tag-Fq2qdiql.js";import"./Counter-LGyezUq9.js";import"./Breadcrumb-1_ppty26.js";import"./Tabs-tjTOCvAj.js";import"./Checkbox-AvcVMVeH.js";import"./Radio-lqTtrhen.js";import"./Divider-b2fMfDtF.js";import"./Icon.styled-XhfvdDtU.js";import"./Accordion-h2BS8qQ8.js";const se={title:"Data Display/form/Form",component:r},T=()=>e.jsxs(r,{children:[e.jsx(l,{label:"label 1"}),e.jsx(i,{onChange:()=>console.log(0),children:e.jsx(i.Label,{children:"inactive"})})]}),o=T.bind({});o.args={};const j=({isDisabled:b,title:u,tooltip:g})=>{const[a,x]=h.useState(!1);return e.jsxs(r,{children:[e.jsxs(r.Group,{title:u,tooltip:g,children:[e.jsx(l,{label:"label 1"}),e.jsx(i,{isChecked:a,isDisabled:!0,onChange:()=>x(!a),children:e.jsx(i.Label,{children:"inactive"})})]}),e.jsxs(r.Group,{isDisabled:b,children:[e.jsx(l,{label:"label 2"}),e.jsx(l,{label:"label 3"})]}),e.jsx(r.Group,{children:e.jsx(F,{label:"My area"})})]})},t=j.bind({});t.args={title:"",tooltip:"",isDisabled:!1};var s,m,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <Form>
      <TextField label='label 1' />
      <Toggle onChange={() => console.log(0)}>
        <Toggle.Label>inactive</Toggle.Label>
      </Toggle>
    </Form>;
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var n,c,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
  isDisabled,
  title,
  tooltip
}) => {
  const [checked, setChecked] = useState(false);
  return <Form>
      <Form.Group title={title} tooltip={tooltip}>
        <TextField label='label 1' />
        <Toggle isChecked={checked} isDisabled onChange={() => setChecked(!checked)}>
          <Toggle.Label>inactive</Toggle.Label>
        </Toggle>
      </Form.Group>
      <Form.Group isDisabled={isDisabled}>
        <TextField label='label 2' />
        <TextField label='label 3' />
      </Form.Group>
      <Form.Group>
        <TextArea label='My area' />
      </Form.Group>
    </Form>;
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const me=["Default","FormGroup"];export{o as Default,t as FormGroup,me as __namedExportsOrder,se as default};
