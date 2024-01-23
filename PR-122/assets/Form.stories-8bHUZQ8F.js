import{j as e}from"./jsx-runtime-CbCNBOXy.js";import{r as h}from"./index-IybTgENJ.js";import{T as F}from"./TextArea-socQP0y6.js";import{T as l}from"./TextField-1V3-IpLt.js";import{T as a}from"./Toggle-RWaC15Q7.js";import{F as r}from"./Form-EK6KJ8EM.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Typography-Bp0by5Aw.js";import"./TooltipProvider-eIt6yA1p.js";import"./index-Hhmu2M5c.js";import"./emotion-react.browser.esm-bvpyIPwg.js";import"./emotion-styled.browser.esm-yeljtSWm.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-HrY-sHGj.js";import"./LabelField-Y3KoqYBv.js";import"./LabelFied.styled-tjO3ymiF.js";import"./TextArea.styled-yvOGH942.js";import"./Error-PUqoEWoO.js";import"./Spinner-HXmQWfKN.js";import"./index-dL_sMmnb.js";import"./Box.styled-0PR27JmK.js";import"./Spinner.styled-rmxTGO73.js";import"./TextField.styled-9MGB7sfA.js";import"./Tooltip-n-mdvVvD.js";import"./Portal-cbzhSllL.js";import"./index-xIHD0DlW.js";import"./z-index-mmXzY7sY.js";const X={title:"Data Display/form/Form",component:r},T=()=>e.jsxs(r,{children:[e.jsx(l,{label:"label 1"}),e.jsx(a,{onChange:()=>console.log(0),children:e.jsx(a.Label,{children:"inactive"})})]}),o=T.bind({});o.args={};const j=({isDisabled:b,title:u,tooltip:g})=>{const[s,x]=h.useState(!1);return e.jsxs(r,{children:[e.jsxs(r.Group,{title:u,tooltip:g,children:[e.jsx(l,{label:"label 1"}),e.jsx(a,{isChecked:s,isDisabled:!0,onChange:()=>x(!s),children:e.jsx(a.Label,{children:"inactive"})})]}),e.jsxs(r.Group,{isDisabled:b,children:[e.jsx(l,{label:"label 2"}),e.jsx(l,{label:"label 3"})]}),e.jsx(r.Group,{children:e.jsx(F,{label:"My area"})})]})},t=j.bind({});t.args={title:"",tooltip:"",isDisabled:!1};var i,n,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
