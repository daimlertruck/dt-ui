import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as h}from"./index-CBqU2yxZ.js";import{T as F}from"./TextArea-Bw37BxwQ.js";import{T as l}from"./TextField-DWRKoZxa.js";import{T as a}from"./Toggle-BnNsI3lf.js";import{F as r}from"./Form-C0cEHKYh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./LabelField-DEOS_6J4.js";import"./emotion-styled.browser.esm-CRzct0lr.js";import"./extends-ChRHEBve.js";import"./emotion-element-43c6fea0.browser.esm-DXL8qHXx.js";import"./Typography-DsaGOTBy.js";import"./index-C91dZ4Gr.js";import"./emotion-react.browser.esm-DebaLaFy.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./Spinner-BOwMuyXC.js";import"./index-BtDBdDin.js";import"./Box.styled-OXY0hm-i.js";import"./Spinner.styled-DLX8sObT.js";import"./Error-CIsWkEOB.js";import"./TextField.styled-DU68196Z.js";import"./Tooltip-CvQi_JOv.js";import"./Portal-U_0UEmB3.js";import"./z-index-Bx-k-k_v.js";import"./Info-BPeIL3LD.js";const W={title:"Data Display/form/Form",component:r},T=()=>e.jsxs(r,{children:[e.jsx(l,{label:"label 1"}),e.jsx(a,{onChange:()=>console.log(0),children:e.jsx(a.Label,{children:"inactive"})})]}),o=T.bind({});o.args={};const j=({isDisabled:b,title:u,tooltip:g})=>{const[s,x]=h.useState(!1);return e.jsxs(r,{children:[e.jsxs(r.Group,{title:u,tooltip:g,children:[e.jsx(l,{label:"label 1"}),e.jsx(a,{isChecked:s,isDisabled:!0,onChange:()=>x(!s),children:e.jsx(a.Label,{children:"inactive"})})]}),e.jsxs(r.Group,{isDisabled:b,children:[e.jsx(l,{label:"label 2"}),e.jsx(l,{label:"label 3"})]}),e.jsx(r.Group,{children:e.jsx(F,{label:"My area"})})]})},t=j.bind({});t.args={title:"",tooltip:"",isDisabled:!1};var i,n,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const X=["Default","FormGroup"];export{o as Default,t as FormGroup,X as __namedExportsOrder,W as default};
