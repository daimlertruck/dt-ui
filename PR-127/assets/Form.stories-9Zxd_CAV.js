import{j as e}from"./jsx-runtime-CbCNBOXy.js";import{r as h}from"./index-IybTgENJ.js";import{T as F}from"./TextArea-9kmh-RuS.js";import{T as l}from"./TextField-GjpzQfPl.js";import{T as a}from"./Toggle-4KY_Dj9L.js";import{F as r}from"./Form-tvNcD-1k.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Typography-ZNxoi-hx.js";import"./index-PWMXJtKE.js";import"./TooltipProvider--5O1-WdZ.js";import"./index-qqeelA58.js";import"./emotion-react.browser.esm-jJwm7MoD.js";import"./emotion-element-c39617d8.browser.esm-HJoeL-IU.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-HrY-sHGj.js";import"./emotion-styled.browser.esm-MfHNkeEy.js";import"./LabelField-NCmJh7rO.js";import"./LabelFied.styled-EHxHbaCF.js";import"./TextArea.styled-O9_LJ1IB.js";import"./Error-A-mBzp11.js";import"./Spinner-MMmfZH5v.js";import"./index-3YscyN0J.js";import"./Box.styled-9IvOy3K5.js";import"./Spinner.styled-mffHpE2Q.js";import"./TextField.styled-pE7gYPMg.js";import"./Info-8l_cmHnM.js";import"./Tooltip-1WvMN_Tm.js";import"./Portal-cbzhSllL.js";import"./index-xIHD0DlW.js";import"./z-index-n4kBdkOc.js";const $={title:"Data Display/form/Form",component:r},T=()=>e.jsxs(r,{children:[e.jsx(l,{label:"label 1"}),e.jsx(a,{onChange:()=>console.log(0),children:e.jsx(a.Label,{children:"inactive"})})]}),o=T.bind({});o.args={};const j=({isDisabled:b,title:u,tooltip:g})=>{const[i,x]=h.useState(!1);return e.jsxs(r,{children:[e.jsxs(r.Group,{title:u,tooltip:g,children:[e.jsx(l,{label:"label 1"}),e.jsx(a,{isChecked:i,isDisabled:!0,onChange:()=>x(!i),children:e.jsx(a.Label,{children:"inactive"})})]}),e.jsxs(r.Group,{isDisabled:b,children:[e.jsx(l,{label:"label 2"}),e.jsx(l,{label:"label 3"})]}),e.jsx(r.Group,{children:e.jsx(F,{label:"My area"})})]})},t=j.bind({});t.args={title:"",tooltip:"",isDisabled:!1};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
