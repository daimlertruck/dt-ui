import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{M as t}from"./Toaster-qQQeWMmC.js";import"./DescriptionList-iMIY3Ofq.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-QDCYB1ew.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./extends-E30VzY7q.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./emotion-react.browser.esm-OUs2k2GK.js";import"./Link-_Aovc20k.js";import"./IconButton-CybuRvMK.js";import"./Nav.styled-GsNCx_OC.js";import"./NavContainer.styled-U8vOQ75V.js";import"./ProfileInfo-W3kZ6w9g.js";import"./index-5j7WHYEJ.js";import"./index-jmm5gWkb.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-5tMk2lpP.js";import"./hexToRgba-fpzAFQCT.js";import"./z-index-Gl5ZkgZ3.js";import"./Header.styled-dSjoYgc7.js";import"./Tooltip-HGZMkqB_.js";import"./Avatar.styled-CUHg7m_f.js";import"./NavItem.styled-F-Ro6JRH.js";import"./Table-vPzD7-MQ.js";import"./LabelField-OWWqgjhK.js";import"./Footer.styled-ViVzqoaf.js";import"./Backdrop-W-F6eJUj.js";import"./Tag-Fq2qdiql.js";import"./Counter-LGyezUq9.js";import"./Breadcrumb-1_ppty26.js";import"./Tabs-tjTOCvAj.js";import"./Checkbox-AvcVMVeH.js";import"./Radio-lqTtrhen.js";import"./Divider-b2fMfDtF.js";import"./Icon.styled-XhfvdDtU.js";import"./Accordion-h2BS8qQ8.js";const W={title:"Data Display/MultiSelect",component:t},i=[{text:"Option 1",value:"1"},{text:"Option 2",value:"2",isRemovable:!0},{text:"Option 3",value:"3",isRemovable:!0},{text:"Option 4",value:"4",isRemovable:!0}],e=({options:a,...n})=>r.jsx(t,{defaultValue:[i[0],i[1]],children:r.jsx(t.Container,{children:r.jsx(t.Select,{label:"Label",placeholder:"Select the Items",...n,children:a.map(o=>r.jsx(t.Option,{option:o,children:o.text??o.value},o.value))})})});e.args={options:i,hasError:!1,isDisabled:!1};var p,l,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`({
  options,
  ...props
}: MultiSelectStoryProps) => {
  return <MultiSelect defaultValue={[OPTIONS[0], OPTIONS[1]]}>
      <MultiSelect.Container>
        <MultiSelect.Select label='Label' placeholder='Select the Items' {...props}>
          {options.map(option => <MultiSelect.Option key={option.value} option={option}>
              {option.text ?? option.value}
            </MultiSelect.Option>)}
        </MultiSelect.Select>
      </MultiSelect.Container>
    </MultiSelect>;
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const X=["Default"];export{e as Default,X as __namedExportsOrder,W as default};
