import{j as e}from"./jsx-runtime-CKrituN3.js";import{T as t}from"./TextField-BUpAt1Fg.js";import"./TextField.styled-Iu3XddML.js";import{r as h}from"./index-CBqU2yxZ.js";import{T as F}from"./TextArea-71Obb2eu.js";import{T as a}from"./Toggle-DX0nZoZx.js";import{F as r}from"./Form-BveDHJ1y.js";import"./index-gq_RjDZX.js";import"./Box.styled-B8MVCI1k.js";import"./emotion-styled.browser.esm-DhD7UCCJ.js";import"./extends-DJVMZnyl.js";import"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./LabelField-K_QTPII-.js";import"./Typography-BM34Rtmj.js";import"./index-C8nwnA3-.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./Tooltip-C3y1DvsF.js";import"./Portal-U_0UEmB3.js";import"./z-index-Ds5QkyqS.js";import"./Info-BPeIL3LD.js";const P={title:"Data Display/form/Form",component:r},T=()=>e.jsxs(r,{children:[e.jsx(t,{label:"label 1"}),e.jsx(a,{onChange:()=>console.log(0),children:e.jsx(a.Label,{children:"inactive"})})]}),o=T.bind({});o.args={};const j=({isDisabled:b,title:u,tooltip:g})=>{const[s,x]=h.useState(!1);return e.jsxs(r,{children:[e.jsxs(r.Group,{title:u,tooltip:g,children:[e.jsx(t,{label:"label 1"}),e.jsx(a,{isChecked:s,isDisabled:!0,onChange:()=>x(!s),children:e.jsx(a.Label,{children:"inactive"})})]}),e.jsxs(r.Group,{isDisabled:b,children:[e.jsx(t,{label:"label 2"}),e.jsx(t,{label:"label 3"})]}),e.jsx(r.Group,{children:e.jsx(F,{label:"My area"})})]})},l=j.bind({});l.args={title:"",tooltip:"",isDisabled:!1};var i,n,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Form>
      <TextField label='label 1' />
      <Toggle onChange={() => console.log(0)}>
        <Toggle.Label>inactive</Toggle.Label>
      </Toggle>
    </Form>;
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,c,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
}`,...(d=(c=l.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const Q=["Default","FormGroup"];export{o as Default,l as FormGroup,Q as __namedExportsOrder,P as default};
