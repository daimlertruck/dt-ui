import{j as l}from"./jsx-runtime-CKrituN3.js";import{M as t}from"./MultiSelect-CBXuKnPB.js";import"./MultiSelectProvider-Cu0vsbwR.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-gq_RjDZX.js";import"./Box.styled-B8MVCI1k.js";import"./emotion-styled.browser.esm-DhD7UCCJ.js";import"./extends-DJVMZnyl.js";import"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import"./Close-CGHfkSk3.js";import"./Tag-D-KFSfjp.js";import"./Typography-IFB7dyWN.js";import"./index-BpxOyJIn.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./DropdownMenu-CMpkKcud.js";import"./z-index-Bx-k-k_v.js";import"./useClickOutside-D7JrBqcS.js";const T={title:"Data Display/MultiSelect",component:t},r=[{text:"Option 1",value:"1"},{text:"Option 2",value:"2",isRemovable:!0},{text:"Option 3",value:"3",isRemovable:!0},{text:"Option 4",value:"4",isRemovable:!0}],e=({options:n,...s})=>l.jsx(t,{defaultValue:[r[0],r[1]],children:l.jsx(t.Container,{children:l.jsx(t.Select,{label:"Label",placeholder:"Select the Items",...s,children:n.map(o=>l.jsx(t.Option,{option:o,children:o.text??o.value},o.value))})})});e.args={options:r,hasError:!1,isDisabled:!1};var i,p,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(a=(p=e.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,T as default};
