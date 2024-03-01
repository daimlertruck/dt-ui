import{j as l}from"./jsx-runtime-CKrituN3.js";import{M as t}from"./MultiSelect-CiZX2qit.js";import"./MultiSelectProvider-Cu0vsbwR.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtDBdDin.js";import"./Box.styled-OXY0hm-i.js";import"./emotion-styled.browser.esm-CRzct0lr.js";import"./extends-ChRHEBve.js";import"./emotion-element-43c6fea0.browser.esm-DXL8qHXx.js";import"./Close-CGHfkSk3.js";import"./Tag-DSgcpY25.js";import"./Typography-DsaGOTBy.js";import"./index-C91dZ4Gr.js";import"./emotion-react.browser.esm-DebaLaFy.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./DropdownMenu-Dsds32xw.js";import"./z-index-Bx-k-k_v.js";import"./useClickOutside-D7JrBqcS.js";const _={title:"Data Display/MultiSelect",component:t},r=[{text:"Option 1",value:"1"},{text:"Option 2",value:"2",isRemovable:!0},{text:"Option 3",value:"3",isRemovable:!0},{text:"Option 4",value:"4",isRemovable:!0}],e=({options:n,...s})=>l.jsx(t,{defaultValue:[r[0],r[1]],children:l.jsx(t.Container,{children:l.jsx(t.Select,{label:"Label",placeholder:"Select the Items",...s,children:n.map(o=>l.jsx(t.Option,{option:o,children:o.text??o.value},o.value))})})});e.args={options:r,hasError:!1,isDisabled:!1};var i,p,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(a=(p=e.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,_ as default};
