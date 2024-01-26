import{j as l}from"./jsx-runtime-CbCNBOXy.js";import{M as t}from"./MultiSelect-D3aCJ0Hk.js";import"./TooltipProvider--5O1-WdZ.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-3YscyN0J.js";import"./Box.styled-9IvOy3K5.js";import"./emotion-styled.browser.esm-MfHNkeEy.js";import"./emotion-element-c39617d8.browser.esm-HJoeL-IU.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./Close-ix0QOkL6.js";import"./DropdownMenu-DsrUEvQy.js";import"./z-index-n4kBdkOc.js";import"./Tag-v9QVZJWG.js";import"./Typography-ZNxoi-hx.js";import"./index-PWMXJtKE.js";import"./index-qqeelA58.js";import"./emotion-react.browser.esm-jJwm7MoD.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-HrY-sHGj.js";import"./useClickOutside-031TREIJ.js";const _={title:"Data Display/MultiSelect",component:t},r=[{text:"Option 1",value:"1"},{text:"Option 2",value:"2",isRemovable:!0},{text:"Option 3",value:"3",isRemovable:!0},{text:"Option 4",value:"4",isRemovable:!0}],e=({options:n,...s})=>l.jsx(t,{defaultValue:[r[0],r[1]],children:l.jsx(t.Container,{children:l.jsx(t.Select,{label:"Label",placeholder:"Select the Items",...s,children:n.map(o=>l.jsx(t.Option,{option:o,children:o.text??o.value},o.value))})})});e.args={options:r,hasError:!1,isDisabled:!1};var i,p,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
