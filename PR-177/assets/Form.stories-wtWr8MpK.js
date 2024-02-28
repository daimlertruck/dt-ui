import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{T as i}from"./TextField-BO5kVcCt.js";import{F as o}from"./Form-runYqVQR.js";import{r as h}from"./index-4g5l5LRQ.js";import{T as F}from"./TextArea-1u9_1L7q.js";import{T as m}from"./Toggle-1sjFNmFv.js";import"./Spinner-TJ4Xns0i.js";import"./index-lOH_pZ5X.js";import"./Box.styled-zcGhU7kj.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./extends-E30VzY7q.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Typography-D6FO4u36.js";import"./MultiSelectProvider-vrdgqO57.js";import"./Spinner.styled-euKDJvzq.js";import"./emotion-react.browser.esm-OUs2k2GK.js";import"./Button.styled-bXS5oslU.js";import"./IconButton.styled-B_RRHdai.js";import"./Nav.styled-GsNCx_OC.js";import"./NavContainer.styled-U8vOQ75V.js";import"./Dropdown-Od06hRzh.js";import"./DropdownOption.styled-eYi-Js2k.js";import"./DropdownMenu-z9sscswl.js";import"./index-izIcSTic.js";import"./index-jmm5gWkb.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-5tMk2lpP.js";import"./z-index-tR9610fR.js";import"./useClickOutside-5i9YsATO.js";import"./Header.styled-dSjoYgc7.js";import"./ProfileInfo-pSUZEbdO.js";import"./hexToRgba-fpzAFQCT.js";import"./Tooltip-kXXwRjGp.js";import"./Portal-EY94Zi_-.js";import"./Avatar.styled-CUHg7m_f.js";import"./NavItem.styled-F-Ro6JRH.js";import"./Grid.styled-IM57ROHE.js";import"./Card-dBhmV7ty.js";import"./Table-tPClmG2j.js";import"./LabelField-lGW2oYQi.js";import"./Footer.styled-ViVzqoaf.js";import"./Link-c-Kgo-en.js";import"./Modal-Q77AEf7P.js";import"./Backdrop-hUfz3cPM.js";import"./Close-fCiS4iy8.js";import"./IconButton-q8eJfSTD.js";import"./Counter-LGyezUq9.js";import"./List-qXYUixbk.js";import"./constants-libmexsO.js";import"./DescriptionList-DLLpITdb.js";import"./Pagination--BYrCvWX.js";import"./debounce-ctlr7l9d.js";import"./Tabs-tjTOCvAj.js";import"./Step-TX1mgo7v.js";import"./Checkbox-YsqCbiLt.js";import"./Radio--p6mHLZJ.js";import"./MultiSelect-Y_PaRblW.js";import"./Tag-t4dOy4wM.js";import"./ProgressBar.styled-1TccEzHa.js";import"./Breadcrumb-no22lV6L.js";import"./useMedia-S1QLeel4.js";import"./Divider-b2fMfDtF.js";import"./Drawer-Sbzk6vcU.js";import"./EmptyState-9WGoEOxR.js";import"./Icon.styled-XhfvdDtU.js";import"./Message--86pBn_H.js";import"./Toaster-rSF416oW.js";import"./ErrorOutline-r55wasc1.js";import"./InfoOutline-vkAQEiMk.js";import"./Accordion-h2BS8qQ8.js";const Br={title:"Data Display/form/Form",component:o},T=()=>r.jsxs(o,{children:[r.jsx(i,{label:"label 1"}),r.jsx(m,{onChange:()=>console.log(0),children:r.jsx(m.Label,{children:"inactive"})})]}),e=T.bind({});e.args={};const j=({isDisabled:b,title:u,tooltip:g})=>{const[p,x]=h.useState(!1);return r.jsxs(o,{children:[r.jsxs(o.Group,{title:u,tooltip:g,children:[r.jsx(i,{label:"label 1"}),r.jsx(m,{isChecked:p,isDisabled:!0,onChange:()=>x(!p),children:r.jsx(m.Label,{children:"inactive"})})]}),r.jsxs(o.Group,{isDisabled:b,children:[r.jsx(i,{label:"label 2"}),r.jsx(i,{label:"label 3"})]}),r.jsx(o.Group,{children:r.jsx(F,{label:"My area"})})]})},t=j.bind({});t.args={title:"",tooltip:"",isDisabled:!1};var l,a,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Form>
      <TextField label='label 1' />
      <Toggle onChange={() => console.log(0)}>
        <Toggle.Label>inactive</Toggle.Label>
      </Toggle>
    </Form>;
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var n,c,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const Hr=["Default","FormGroup"];export{e as Default,t as FormGroup,Hr as __namedExportsOrder,Br as default};
