import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as h}from"./index-4g5l5LRQ.js";import{T as F}from"./TextArea-c74mue_s.js";import{T as l}from"./TextField-VXzVOzhg.js";import{T as a}from"./Toggle-oTlmhAP4.js";import{F as r}from"./Form-P9AmMRDJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Typography-VWNkGQM0.js";import"./TooltipProvider-y9Uc-rOM.js";import"./index-lb1Yyg-x.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./LabelField-0IA7wtDd.js";import"./LabelFied.styled-GjB3PGtm.js";import"./TextArea.styled-6XHaE8xM.js";import"./Error-ONMH080z.js";import"./Spinner-y_PWtyog.js";import"./index-H1EXaXUo.js";import"./Box.styled-oB9eueTz.js";import"./Spinner.styled-U10FD3--.js";import"./TextField.styled-rkXn3Ya2.js";import"./Info-eLlTCXLO.js";import"./Tooltip-xKo2aG_s.js";import"./Portal-EY94Zi_-.js";import"./index-jmm5gWkb.js";import"./z-index-n4kBdkOc.js";const Y={title:"Data Display/form/Form",component:r},T=()=>e.jsxs(r,{children:[e.jsx(l,{label:"label 1"}),e.jsx(a,{onChange:()=>console.log(0),children:e.jsx(a.Label,{children:"inactive"})})]}),o=T.bind({});o.args={};const j=({isDisabled:b,title:u,tooltip:g})=>{const[i,x]=h.useState(!1);return e.jsxs(r,{children:[e.jsxs(r.Group,{title:u,tooltip:g,children:[e.jsx(l,{label:"label 1"}),e.jsx(a,{isChecked:i,isDisabled:!0,onChange:()=>x(!i),children:e.jsx(a.Label,{children:"inactive"})})]}),e.jsxs(r.Group,{isDisabled:b,children:[e.jsx(l,{label:"label 2"}),e.jsx(l,{label:"label 3"})]}),e.jsx(r.Group,{children:e.jsx(F,{label:"My area"})})]})},t=j.bind({});t.args={title:"",tooltip:"",isDisabled:!1};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const Z=["Default","FormGroup"];export{o as Default,t as FormGroup,Z as __namedExportsOrder,Y as default};
