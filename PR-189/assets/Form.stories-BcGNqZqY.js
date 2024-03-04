import{j as e}from"./jsx-runtime-CKrituN3.js";import{T as l}from"./TextField-Dfr_wd4n.js";import"./TextField.styled-DRTkhwQ7.js";import{r as h}from"./index-CBqU2yxZ.js";import{T as F}from"./TextArea-r2w4Kbf4.js";import{T as a}from"./Toggle-DcG0f1Xy.js";import{F as r}from"./Form-BKDBA_jY.js";import"./LabelField-Bg0bMqJG.js";import"./emotion-styled.browser.esm-CRzct0lr.js";import"./extends-ChRHEBve.js";import"./emotion-element-43c6fea0.browser.esm-DXL8qHXx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Spinner-wlfpEqi9.js";import"./index-BtDBdDin.js";import"./Box.styled-OXY0hm-i.js";import"./Typography-DQWzsPBO.js";import"./index-Doi4ik1y.js";import"./emotion-react.browser.esm-DebaLaFy.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./Spinner.styled-DLX8sObT.js";import"./Tooltip-CySBE-ZE.js";import"./Portal-U_0UEmB3.js";import"./z-index-Bx-k-k_v.js";import"./Info-BPeIL3LD.js";const V={title:"Data Display/form/Form",component:r},T=()=>e.jsxs(r,{children:[e.jsx(l,{label:"label 1"}),e.jsx(a,{onChange:()=>console.log(0),children:e.jsx(a.Label,{children:"inactive"})})]}),o=T.bind({});o.args={};const j=({isDisabled:b,title:u,tooltip:g})=>{const[s,x]=h.useState(!1);return e.jsxs(r,{children:[e.jsxs(r.Group,{title:u,tooltip:g,children:[e.jsx(l,{label:"label 1"}),e.jsx(a,{isChecked:s,isDisabled:!0,onChange:()=>x(!s),children:e.jsx(a.Label,{children:"inactive"})})]}),e.jsxs(r.Group,{isDisabled:b,children:[e.jsx(l,{label:"label 2"}),e.jsx(l,{label:"label 3"})]}),e.jsx(r.Group,{children:e.jsx(F,{label:"My area"})})]})},t=j.bind({});t.args={title:"",tooltip:"",isDisabled:!1};var i,n,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const W=["Default","FormGroup"];export{o as Default,t as FormGroup,W as __namedExportsOrder,V as default};
