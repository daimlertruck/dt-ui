import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{D as o}from"./Toaster-qQQeWMmC.js";import"./DescriptionList-iMIY3Ofq.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-QDCYB1ew.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./extends-E30VzY7q.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./emotion-react.browser.esm-OUs2k2GK.js";import"./Link-_Aovc20k.js";import"./IconButton-CybuRvMK.js";import"./Nav.styled-GsNCx_OC.js";import"./NavContainer.styled-U8vOQ75V.js";import"./ProfileInfo-W3kZ6w9g.js";import"./index-5j7WHYEJ.js";import"./index-jmm5gWkb.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-5tMk2lpP.js";import"./hexToRgba-fpzAFQCT.js";import"./z-index-Gl5ZkgZ3.js";import"./Header.styled-dSjoYgc7.js";import"./Tooltip-HGZMkqB_.js";import"./Avatar.styled-CUHg7m_f.js";import"./NavItem.styled-F-Ro6JRH.js";import"./Table-vPzD7-MQ.js";import"./LabelField-OWWqgjhK.js";import"./Footer.styled-ViVzqoaf.js";import"./Backdrop-W-F6eJUj.js";import"./Tag-Fq2qdiql.js";import"./Counter-LGyezUq9.js";import"./Breadcrumb-1_ppty26.js";import"./Tabs-tjTOCvAj.js";import"./Checkbox-AvcVMVeH.js";import"./Radio-lqTtrhen.js";import"./Divider-b2fMfDtF.js";import"./Icon.styled-XhfvdDtU.js";import"./Accordion-h2BS8qQ8.js";const wo={title:"Data Display/Dropdown",component:o},i=[{text:"Option 1",value:"1"},{text:"Option 2",value:"2"}],s=({options:r,defaultValue:t,...p})=>e.jsx(o,{defaultValue:t,children:e.jsx(o.Container,{children:e.jsx(o.Select,{label:"Label",...p,children:r.map(n=>e.jsx(o.Option,{option:n,children:n.text??n.value},n.value))})})});s.args={options:i,isDisabled:!1,hasBorder:!0,hasError:!1};const d=({options:r,defaultValue:t,...p})=>e.jsx(o,{defaultValue:t,children:e.jsx(o.Container,{children:e.jsx(o.Select,{label:"Label",...p,children:r.map(n=>e.jsx(o.Option,{option:n,children:n.text??n.value},n.value))})})});d.args={options:i,defaultValue:i[1],isDisabled:!1,hasBorder:!0};const u=({options:r,defaultValue:t,...p})=>e.jsx(o,{defaultValue:t,children:e.jsx(o.Container,{children:e.jsx(o.Select,{label:"Label",...p,children:r.map(n=>e.jsx(o.Option,{option:n,children:n.text??n.value},n.value))})})});u.args={options:i.slice(0,1),isDisabled:!1,hasBorder:!0};const c=({options:r,defaultValue:t,message:p,...n})=>e.jsx(o,{defaultValue:t,children:e.jsxs(o.Container,{children:[e.jsx(o.Select,{label:"Label",...n,children:r.map(a=>e.jsx(o.Option,{option:a,children:a.text??a.value},a.value))}),e.jsx(o.Detail,{children:p})]})});c.args={options:i.slice(0,1),message:"A short message.",isDisabled:!1,hasBorder:!0};const m=({options:r,defaultValue:t,message:p,...n})=>e.jsx(o,{defaultValue:t,children:e.jsxs(o.Container,{children:[e.jsx(o.Select,{label:"Label",...n,children:r.map(a=>{const l={value:a.value};return e.jsx(o.Option,{option:l,children:(l==null?void 0:l.text)??l.value},a.value)})}),e.jsx(o.Detail,{children:p})]})});m.args={options:i,isDisabled:!1,hasBorder:!0};var D,w,x;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`({
  options,
  defaultValue,
  ...props
}: DropdownStoryProps) => {
  return <Dropdown defaultValue={defaultValue}>
      <Dropdown.Container>
        <Dropdown.Select label='Label' {...props}>
          {options.map(option => <Dropdown.Option key={option.value} option={option}>
              {option.text ?? option.value}
            </Dropdown.Option>)}
        </Dropdown.Select>
      </Dropdown.Container>
    </Dropdown>;
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var h,O,f;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`({
  options,
  defaultValue,
  ...props
}: DropdownStoryProps) => {
  return <Dropdown defaultValue={defaultValue}>
      <Dropdown.Container>
        <Dropdown.Select label='Label' {...props}>
          {options.map(option => <Dropdown.Option key={option.value} option={option}>
              {option.text ?? option.value}
            </Dropdown.Option>)}
        </Dropdown.Select>
      </Dropdown.Container>
    </Dropdown>;
}`,...(f=(O=d.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var v,S,b;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`({
  options,
  defaultValue,
  ...props
}: DropdownStoryProps) => {
  return <Dropdown defaultValue={defaultValue}>
      <Dropdown.Container>
        <Dropdown.Select label='Label' {...props}>
          {options.map(option => <Dropdown.Option key={option.value} option={option}>
              {option.text ?? option.value}
            </Dropdown.Option>)}
        </Dropdown.Select>
      </Dropdown.Container>
    </Dropdown>;
}`,...(b=(S=u.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var j,V,g;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`({
  options,
  defaultValue,
  message,
  ...props
}: DropdownStoryProps) => {
  return <Dropdown defaultValue={defaultValue}>
      <Dropdown.Container>
        <Dropdown.Select label='Label' {...props}>
          {options.map(option => <Dropdown.Option key={option.value} option={option}>
              {option.text ?? option.value}
            </Dropdown.Option>)}
        </Dropdown.Select>
        <Dropdown.Detail>{message}</Dropdown.Detail>
      </Dropdown.Container>
    </Dropdown>;
}`,...(g=(V=c.parameters)==null?void 0:V.docs)==null?void 0:g.source}}};var C,y,L;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`({
  options,
  defaultValue,
  message,
  ...props
}: DropdownStoryProps) => {
  return <Dropdown defaultValue={defaultValue}>
      <Dropdown.Container>
        <Dropdown.Select label='Label' {...props}>
          {options.map(option => {
          const internalOption: DropdownOptionValue = {
            value: option.value
          };
          return <Dropdown.Option key={option.value} option={internalOption}>
                {internalOption?.text ?? internalOption.value}
              </Dropdown.Option>;
        })}
        </Dropdown.Select>
        <Dropdown.Detail>{message}</Dropdown.Detail>
      </Dropdown.Container>
    </Dropdown>;
}`,...(L=(y=m.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const xo=["Default","WithDefaultValue","WithOneOption","WithMessageOption","OptionsWithOnlyValue"];export{s as Default,m as OptionsWithOnlyValue,d as WithDefaultValue,c as WithMessageOption,u as WithOneOption,xo as __namedExportsOrder,wo as default};
