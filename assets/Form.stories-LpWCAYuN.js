import{j as e}from"./jsx-runtime-CKrituN3.js";import{T as l}from"./TextField-D6dgiGE7.js";import"./TextField.styled-CpWAB4t-.js";import{r as h}from"./index-CBqU2yxZ.js";import{T as F}from"./TextArea-Dh-0A__R.js";import{T as a}from"./Toggle-DWc0RPTT.js";import{F as r}from"./Form-fl4jf98B.js";import"./LabelField-CYC0Kkn0.js";import"./Typography-D8TF_xvx.js";import"./index-eD4KSPJ7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import"./extends-DJVMZnyl.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./emotion-styled.browser.esm-DhD7UCCJ.js";import"./Spinner-Dg2lRPrU.js";import"./index-gq_RjDZX.js";import"./Box.styled-B8MVCI1k.js";import"./Spinner.styled-WvtA0Kgk.js";import"./Tooltip-Bos6QF5O.js";import"./Portal-U_0UEmB3.js";import"./z-index-C-tE6wDk.js";import"./Info-BPeIL3LD.js";const U={title:"Data Display/form/Form",component:r},T=()=>e.jsxs(r,{children:[e.jsx(l,{label:"label 1"}),e.jsx(a,{onChange:()=>console.log(0),children:e.jsx(a.Label,{children:"inactive"})})]}),o=T.bind({});o.args={};const j=({isDisabled:b,title:u,tooltip:g})=>{const[s,x]=h.useState(!1);return e.jsxs(r,{children:[e.jsxs(r.Group,{title:u,tooltip:g,children:[e.jsx(l,{label:"label 1"}),e.jsx(a,{isChecked:s,isDisabled:!0,onChange:()=>x(!s),children:e.jsx(a.Label,{children:"inactive"})})]}),e.jsxs(r.Group,{isDisabled:b,children:[e.jsx(l,{label:"label 2"}),e.jsx(l,{label:"label 3"})]}),e.jsx(r.Group,{children:e.jsx(F,{label:"My area"})})]})},t=j.bind({});t.args={title:"",tooltip:"",isDisabled:!1};var i,n,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const V=["Default","FormGroup"];export{o as Default,t as FormGroup,V as __namedExportsOrder,U as default};
