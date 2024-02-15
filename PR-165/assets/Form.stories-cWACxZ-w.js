import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as h}from"./index-4g5l5LRQ.js";import{T as F}from"./TextArea-L2Ft5u-6.js";import{T as l}from"./TextField-ofP4Jyrl.js";import{T as a}from"./Toggle-1sjFNmFv.js";import{F as r}from"./Form-0NlPNLCz.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Typography-D6FO4u36.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./extends-E30VzY7q.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./MultiSelectProvider-vrdgqO57.js";import"./LabelField-OWWqgjhK.js";import"./Spinner-TJ4Xns0i.js";import"./index-lOH_pZ5X.js";import"./Box.styled-zcGhU7kj.js";import"./Spinner.styled-euKDJvzq.js";import"./emotion-react.browser.esm-OUs2k2GK.js";import"./Error-ZuOFem_K.js";import"./TextField.styled-LipUM-ms.js";import"./Tooltip-Kt2lY6UW.js";import"./index-P2lXlfzc.js";import"./index-jmm5gWkb.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-5tMk2lpP.js";import"./Portal-EY94Zi_-.js";import"./z-index-zwCKGdcf.js";import"./Info-eLlTCXLO.js";const X={title:"Data Display/form/Form",component:r},T=()=>e.jsxs(r,{children:[e.jsx(l,{label:"label 1"}),e.jsx(a,{onChange:()=>console.log(0),children:e.jsx(a.Label,{children:"inactive"})})]}),o=T.bind({});o.args={};const j=({isDisabled:b,title:u,tooltip:g})=>{const[s,x]=h.useState(!1);return e.jsxs(r,{children:[e.jsxs(r.Group,{title:u,tooltip:g,children:[e.jsx(l,{label:"label 1"}),e.jsx(a,{isChecked:s,isDisabled:!0,onChange:()=>x(!s),children:e.jsx(a.Label,{children:"inactive"})})]}),e.jsxs(r.Group,{isDisabled:b,children:[e.jsx(l,{label:"label 2"}),e.jsx(l,{label:"label 3"})]}),e.jsx(r.Group,{children:e.jsx(F,{label:"My area"})})]})},t=j.bind({});t.args={title:"",tooltip:"",isDisabled:!1};var i,n,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const Y=["Default","FormGroup"];export{o as Default,t as FormGroup,Y as __namedExportsOrder,X as default};
