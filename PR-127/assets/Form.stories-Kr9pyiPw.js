import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as h}from"./index-4g5l5LRQ.js";import{T as F}from"./TextArea-DFUiPR5R.js";import{T as l}from"./TextField-OSJz8rvX.js";import{T as a}from"./Toggle-dmdLccMv.js";import{F as r}from"./Form-3bZ36zwq.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Typography-8sSoJOlL.js";import"./index-i4R6vv1G.js";import"./TooltipProvider-dYtCL4NP.js";import"./index-NFQKXe9b.js";import"./emotion-react.browser.esm-OUs2k2GK.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./extends-E30VzY7q.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./LabelField-YmEXfUx7.js";import"./LabelFied.styled-O06yYu5z.js";import"./TextArea.styled-WUE7dRxp.js";import"./Error-ZuOFem_K.js";import"./Spinner-XruJ2zRJ.js";import"./index-lOH_pZ5X.js";import"./Box.styled-zcGhU7kj.js";import"./Spinner.styled-euKDJvzq.js";import"./TextField.styled-LipUM-ms.js";import"./Info-eLlTCXLO.js";import"./Tooltip-RA6vjJCA.js";import"./Portal-EY94Zi_-.js";import"./index-jmm5gWkb.js";import"./z-index-n4kBdkOc.js";const $={title:"Data Display/form/Form",component:r},T=()=>e.jsxs(r,{children:[e.jsx(l,{label:"label 1"}),e.jsx(a,{onChange:()=>console.log(0),children:e.jsx(a.Label,{children:"inactive"})})]}),o=T.bind({});o.args={};const j=({isDisabled:b,title:u,tooltip:g})=>{const[i,x]=h.useState(!1);return e.jsxs(r,{children:[e.jsxs(r.Group,{title:u,tooltip:g,children:[e.jsx(l,{label:"label 1"}),e.jsx(a,{isChecked:i,isDisabled:!0,onChange:()=>x(!i),children:e.jsx(a.Label,{children:"inactive"})})]}),e.jsxs(r.Group,{isDisabled:b,children:[e.jsx(l,{label:"label 2"}),e.jsx(l,{label:"label 3"})]}),e.jsx(r.Group,{children:e.jsx(F,{label:"My area"})})]})},t=j.bind({});t.args={title:"",tooltip:"",isDisabled:!1};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <Form>
      <TextField label='label 1' />
      <Toggle onChange={() => console.log(0)}>
        <Toggle.Label>inactive</Toggle.Label>
      </Toggle>
    </Form>;
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,c,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const ee=["Default","FormGroup"];export{o as Default,t as FormGroup,ee as __namedExportsOrder,$ as default};
